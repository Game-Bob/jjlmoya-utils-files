import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonToCsvUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'conversor-json-para-csv';
const title = 'Conversor de JSON para CSV Online Grátis - Exportar para Excel';
const description =
  'Transforme os seus ficheiros JSON em tabelas CSV de forma rápida e fácil. Ideal para analistas de dados que precisam de abrir ficheiros JSON no Excel ou no Google Sheets.';

const faqData = [
  {
    question: 'Como converter JSON para CSV para o Excel?',
    answer:
      'Basta colar o seu código JSON ou carregar o seu ficheiro na nossa ferramenta. O sistema processa automaticamente a estrutura de dados e gera um ficheiro CSV que pode descarregar e abrir diretamente no Microsoft Excel ou no Google Sheets.'
  },
  {
    question: 'É seguro converter os meus dados neste site?',
    answer:
      'Sim, 100% seguro. A conversão é feita inteiramente no seu navegador usando JavaScript. Nenhuns dados são enviados para os nossos servidores, garantindo que a sua informação permanece privada e segura.'
  },
  {
    question: 'O que acontece se o meu JSON for aninhado?',
    answer:
      'O nosso conversor básico está otimizado para arrays de objetos. Se tiver um aninhamento muito profundo, a ferramenta tentará achatar o primeiro nível de propriedades para garantir uma tabela legível para o Excel.'
  },
  {
    question: 'Posso copiar o CSV diretamente em vez de o descarregar?',
    answer:
      'Claro que sim. Além do botão "Descarregar CSV", tem uma opção "Copiar resultado" para colar o conteúdo diretamente em qualquer editor de texto ou folha de cálculo.'
  },
];

const howToData = [
  {
    name: 'Cole o seu JSON',
    text: 'Insira o código JSON ou carregue o ficheiro .json na área de entrada.'
  },
  {
    name: 'Processe os dados',
    text: 'A ferramenta identifica automaticamente os campos e a estrutura para os organizar em linhas e colunas.'
  },
  {
    name: 'Descarregue ou copie',
    text: 'Clique em "Descarregar CSV" para guardar o ficheiro ou em "Copiar resultado" para o usar imediatamente.'
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text
  }))
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pt'
};

export const content: ToolLocaleContent<JsonToCsvUI> = {
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
      text: 'Porquê converter JSON para CSV para a sua análise de dados?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'O JSON é o formato padrão para as APIs modernas, mas não é o mais fácil de analisar humanamente. Um <strong>conversor de JSON para CSV</strong> permite-lhe transformar estruturas complexas em linhas e colunas, facilitando a manipulação em ferramentas poderosas como o <strong>Microsoft Excel</strong>, Numbers ou Google Sheets.'
    },
    {
      type: 'title',
      text: 'Privacidade Total: Converta sem carregar ficheiros',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'A maioria dos conversores online carrega os seus dados para um servidor. A nossa ferramenta é diferente: a <strong>conversão é 100% local</strong>. Ao usar JavaScript no seu navegador, os dados nunca saem do seu computador. Isto é vital se trabalhar com informações sensíveis, listas de clientes ou relatórios internos de empresa.'
    },
    {
      type: 'title',
      text: 'Dicas Técnicas para uma conversão perfeita',
      level: 3
    },
    {
      type: 'list',
      items: [
        'Certifique-se de que o seu JSON é um <strong>array de objetos</strong> (ex: [{}, {}]).',
        'Verifique se todos os objetos têm propriedades semelhantes para manter as colunas CSV consistentes.',
        'Se tiver caracteres especiais, o nosso CSV é exportado em <strong>UTF-8</strong> para evitar problemas no Excel.',
      ]
    },
  ],
  ui: {
    statusWaiting: 'A aguardar JSON válido',
    statusValid: 'JSON válido',
    statusInvalid: 'JSON inválido',
    labelFlatten: 'Aplanar objetos',
    zoneLabel: 'Cole o seu JSON aqui ou arraste um ficheiro',
    placeholderJson: '[{"id": 1, "name": "John", "details": {"age": 30}}]',
    btnCopyCsv: 'Copiar CSV',
    btnDownloadCsv: 'Descarregar Excel (CSV)',
    copyFeedback: 'Copiado!'
  }
};
