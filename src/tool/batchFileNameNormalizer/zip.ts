interface ZipFile {
  name: string;
  file: File;
}

function write16(value: number): Uint8Array {
  return new Uint8Array([value & 255, (value >>> 8) & 255]);
}

function write32(value: number): Uint8Array {
  return new Uint8Array([value & 255, (value >>> 8) & 255, (value >>> 16) & 255, (value >>> 24) & 255]);
}

function concatBytes(parts: Uint8Array[]): Uint8Array {
  const result = new Uint8Array(parts.reduce((length, part) => length + part.length, 0));
  let offset = 0;
  parts.forEach((part) => {
    result.set(part, offset);
    offset += part.length;
  });
  return result;
}

function crc32(data: Uint8Array): number {
  let crc = 0xffffffff;
  for (const byte of data) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function buildLocalHeader(name: Uint8Array, checksum: number, size: number): Uint8Array {
  return concatBytes([
    write32(0x04034b50), write16(20), write16(0x800), write16(0), write16(0), write16(0),
    write32(checksum), write32(size), write32(size), write16(name.length), write16(0), name,
  ]);
}

function buildCentralHeader(name: Uint8Array, checksum: number, size: number, offset: number): Uint8Array {
  return concatBytes([
    write32(0x02014b50), write16(20), write16(20), write16(0x800), write16(0), write16(0), write16(0),
    write32(checksum), write32(size), write32(size), write16(name.length), write16(0), write16(0),
    write16(0), write16(0), write32(0), write32(offset), name,
  ]);
}

function buildEndRecord(count: number, directorySize: number, directoryOffset: number): Uint8Array {
  return concatBytes([
    write32(0x06054b50), write16(0), write16(0), write16(count), write16(count), write32(directorySize),
    write32(directoryOffset), write16(0),
  ]);
}

export async function createZip(files: ZipFile[]): Promise<Blob> {
  const localParts: Uint8Array[] = [];
  const centralParts: Uint8Array[] = [];
  let offset = 0;
  for (const item of files) {
    const data = new Uint8Array(await item.file.arrayBuffer());
    const name = new TextEncoder().encode(item.name);
    const local = concatBytes([buildLocalHeader(name, crc32(data), data.length), data]);
    localParts.push(local);
    centralParts.push(buildCentralHeader(name, crc32(data), data.length, offset));
    offset += local.length;
  }
  const directory = concatBytes(centralParts);
  const body = concatBytes(localParts);
  const end = buildEndRecord(files.length, directory.length, body.length);
  const parts: BlobPart[] = [body as unknown as BlobPart, directory as unknown as BlobPart, end as unknown as BlobPart];
  return new Blob(parts, { type: 'application/zip' });
}
