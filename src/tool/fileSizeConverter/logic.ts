export interface ConversionResult {
  bytes: number;
  decimal: Record<string, number>;
  binary: Record<string, number>;
}

const DECIMAL_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
const BINARY_UNITS = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB'];

const DECIMAL_FACTORS: Record<string, number> = {
  B: 1,
  KB: 1000,
  MB: 1000 ** 2,
  GB: 1000 ** 3,
  TB: 1000 ** 4,
  PB: 1000 ** 5,
};

const BINARY_FACTORS: Record<string, number> = {
  B: 1,
  KiB: 1024,
  MiB: 1024 ** 2,
  GiB: 1024 ** 3,
  TiB: 1024 ** 4,
  PiB: 1024 ** 5,
};

export function parseInput(input: string): { value: number; unit: string } | null {
  const match = input.trim().match(/^([\d.]+)\s*([A-Za-z]+)?$/);
  if (!match || !match[1]) return null;

  const value = parseFloat(match[1]);
  if (isNaN(value)) return null;

  const unit = (match[2] || 'B').toUpperCase();
  return { value, unit };
}

export function convertToBytes(value: number, unit: string): number {
  const normalizedUnit = unit.toUpperCase();
  return value * (DECIMAL_FACTORS[normalizedUnit] || BINARY_FACTORS[normalizedUnit] || 1);
}

export function convertFromBytes(bytes: number, _isDecimal: boolean): ConversionResult {
  const decimal: Record<string, number> = {};
  const binary: Record<string, number> = {};

  DECIMAL_UNITS.forEach((unit) => {
    const factor = DECIMAL_FACTORS[unit];
    if (factor !== undefined) {
      decimal[unit] = bytes / factor;
    }
  });

  BINARY_UNITS.forEach((unit) => {
    const factor = BINARY_FACTORS[unit];
    if (factor !== undefined) {
      binary[unit] = bytes / factor;
    }
  });

  return { bytes, decimal, binary };
}

export interface NetworkSpeed {
  name: string;
  mbps: number;
}

const NETWORK_SPEEDS: NetworkSpeed[] = [
  { name: '3G (2 Mbps)', mbps: 2 },
  { name: '4G LTE (20 Mbps)', mbps: 20 },
  { name: '5G (100 Mbps)', mbps: 100 },
  { name: 'Fiber (500 Mbps)', mbps: 500 },
  { name: 'Gigabit (1000 Mbps)', mbps: 1000 },
];

export function calculateDownloadTime(bytes: number, mbps: number): string {
  const bits = bytes * 8;
  const seconds = bits / (mbps * 1000000);

  if (seconds < 1) return '< 1s';
  if (seconds < 60) return `${Math.round(seconds)}s`;
  if (seconds < 3600) return `${Math.round(seconds / 60)}m`;
  return `${(seconds / 3600).toFixed(1)}h`;
}

export function getNetworkDownloadTimes(bytes: number): Record<string, string> {
  const times: Record<string, string> = {};
  NETWORK_SPEEDS.forEach((speed) => {
    times[speed.name] = calculateDownloadTime(bytes, speed.mbps);
  });
  return times;
}

export interface DeviceStorage {
  name: string;
  totalGB: number;
}

const DEVICES: DeviceStorage[] = [
  { name: 'iPhone 15 (256GB)', totalGB: 256 },
  { name: 'Samsung Galaxy (128GB)', totalGB: 128 },
  { name: '2TB SSD', totalGB: 2000 },
  { name: '1TB HDD', totalGB: 1000 },
];

export function getDeviceStorageUsage(bytes: number): Record<string, string> {
  const usage: Record<string, string> = {};
  DEVICES.forEach((device) => {
    const gb = bytes / (1000 ** 3);
    const percentage = ((gb / device.totalGB) * 100).toFixed(1);
    usage[device.name] = `${percentage}%`;
  });
  return usage;
}
