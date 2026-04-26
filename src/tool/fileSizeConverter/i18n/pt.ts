import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FileSizeConverterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'conversor-tamanho-arquivo';
const title = 'Conversor e Visualizador de Tamanho de Arquivo: Binário e Decimal';
const description =
  'Converta unidades de tamanho de arquivo instantaneamente. Veja quanto tempo levam os downloads e visualize o uso de armazenamento em dispositivos. Processamento 100% local.';

const faqData = [
  {
    question: 'Qual é a diferença entre decimal (KB) e binário (KiB)?',
    answer:
      'O sistema decimal usa potências de 1000 (KB, MB, GB), enquanto o binário usa potencias de 1024 (KiB, MiB, GiB). É por isso que um disco de "1GB" parece menor no seu computador — os fabricantes usam decimal, mas os sistemas operacionais usam binário.',
  },
  {
    question: 'Meus dados estão seguros usando esta ferramenta?',
    answer:
      'Absolutamente. Todos os cálculos acontecem inteiramente no seu navegador usando JavaScript. Nenhum dado é enviado para nossos servidores. Seus arquivos e valores nunca saem do seu computador.',
  },
  {
    question: 'Posso carregar arquivos para ver o tamanho deles?',
    answer:
      'Sim! Você pode arrastar e soltar um arquivo diretamente na área de entrada, e a ferramenta lerá automaticamente o seu tamanho. O arquivo em si nunca é carregado — apenas o seu tamanho é usado localmente.',
  },
  {
    question: 'Por que meu disco externo de 1TB mostra menos espaço no meu computador?',
    answer:
      'Os discos externos são comercializados usando decimal (1TB = 1.000.000.000.000 bytes), mas o seu sistema operacional os exibe em binário (1TiB = 1.099.511.627.776 bytes). Esta ferramenta ajuda você a entender ambas as perspectivas.',
  },
  {
    question: 'Quão preciso é o cálculo do tempo de download?',
    answer:
      'O cálculo é baseado em velocidades de rede ideais. As velocidades no mundo real variam devido ao congestionamento da rede, distância e hardware. Use-os como estimativas aproximadas, não como garantias.',
  },
];

const howToData = [
  {
    name: 'Insira um tamanho de arquivo',
    text: 'Digite um número no campo de entrada (ex: "500" ou "1.5") e selecione a unidade (KB, MB, GB, etc.).',
  },
  {
    name: 'Escolha o seu padrão',
    text: 'Alterne entre Decimal (padrão de marketing) e Binário (padrão de computação) para ver como o valor muda.',
  },
  {
    name: 'Veja conversões instantâneas',
    text: 'Todas as unidades, de Bytes a Petabytes, aparecem instantaneamente. Clique em qualquer bloco para copiar o seu valor para a área de transferência.',
  },
  {
    name: 'Visualize o contexto',
    text: 'Abaixo das conversões, veja quanto tempo os downloads levam em diferentes redes e quanto espaço o arquivo ocupa em diferentes dispositivos.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<FileSizeConverterUI> = {
  slug,
  title,
  description,
  bibliography,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Por que converter tamanhos de arquivo? Entendendo Decimal vs. Binário',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Quando você compra um disco de <strong>"1TB"</strong>, os fabricantes o medem em decimal (1.000 GB). Mas o seu sistema operacional o exibe em binário (1.024 GiB = ~931 GB). Esta diferença confunde os usuários. Um <strong>conversor de tamanho de arquivo</strong> preenche esta lacuna, mostrando exatamente o que seus arquivos significam em qualquer unidade.',
    },
    {
      type: 'title',
      text: 'Contexto do mundo real: Downloads e Armazenamento',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Saber que um arquivo tem "50MB" não significa nada sem contexto. Quanto tempo para baixar no 4G? Quanto espaço em um iPhone? Nossa ferramenta responde a isso instantaneamente com cálculos em tempo real para redes e dispositivos reais.',
    },
    {
      type: 'title',
      text: 'O custo oculto: Matemática do Armazenamento',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Um disco externo de "1 TB" tem na verdade <strong>~931 GiB</strong> (o truque do fabricante)',
        'Um filme 4K (~100GB) leva <strong>4 segundos</strong> na fibra, mas <strong>13 minutos</strong> no 4G',
        'Um iPhone de "256GB" armazena menos porque o SO usa espaço e a matemática binária agrava a diferença',
      ],
    },
    {
      type: 'title',
      text: 'Precisão técnica em que você pode confiar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Todas as conversões seguem os <strong>padrões NIST</strong>: decimal (SI) usa 1000 como base, binário (IEC) usa 1024. Os cálculos acontecem <strong>100% localmente</strong> — sem uploads, sem servidores, privacidade total.',
    },
  ],
  ui: {
    inputPlaceholder: 'Digite um número (ex: 1.5 ou 500)',
    selectUnit: 'Unidade',
    standardLabel: 'Padrão:',
    decimalOption: 'Decimal',
    binaryOption: 'Binário',
    conversionTitle: 'Conversões',
    networkSpeedsTitle: 'Tempos de Download',
    deviceStorageTitle: 'Impacto no Armazenamento do Dispositivo',
    copyFeedback: 'Copiado!',
    dragDropText: 'Arraste um arquivo aqui para ler o seu tamanho',
    fileTooBig: 'O arquivo é muito grande',
  },
};
