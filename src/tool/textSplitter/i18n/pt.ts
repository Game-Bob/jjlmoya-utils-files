import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextSplitterUI } from '../ui';

const slug = 'divisor-de-texto';
const title = 'Divisor de Texto Online — Separar por Parágrafos, Frases ou Comprimento';
const description =
  'Divida textos longos em partes menores de forma automática. Escolha entre separar por número de palavras, caracteres, parágrafos ou frases.';

const faqData = [
  {
    question: 'Como dividir texto para o ChatGPT ou IA?',
    answer:
      'Muitas IAs têm limites de caracteres por mensagem. Com a nossa ferramenta, você pode dividir o seu prompt longo em partes menores (por exemplo, a cada 2000 caracteres) para enviá-las sequencialmente sem perder informação.',
  },
  {
    question: 'É seguro colar textos privados no divisor?',
    answer:
      'Totalmente seguro. A lógica de divisão corre 100% no seu navegador usando JavaScript. Nenhum texto é enviado para os nossos servidores, garantindo que os seus dados permaneçam privados no seu dispositivo.',
  },
  {
    question: 'Existe um limite para o tamanho do texto que posso dividir?',
    answer:
      'Não impomos um limite estrito, já que o processamento é feito localmente. Pode dividir vários megabytes de texto em segundos, embora o desempenho dependa da memória do seu computador.',
  },
  {
    question: 'Adiciona numeração às partes?',
    answer:
      'Atualmente, a ferramenta devolve os blocos separados. Pode copiá-los um a um. Muitos utilizadores consideram isto útil para manter o controlo manual sobre como enviam cada segmento para outras aplicações.',
  },
];

const howToData = [
  {
    name: 'Cole o seu texto',
    text: 'Insira o texto longo que deseja dividir na área de entrada principal.',
  },
  {
    name: 'Configure a divisão',
    text: 'Escolha o método (caracteres, palavras, frases ou parágrafos) e defina o valor máximo para cada parte.',
  },
  {
    name: 'Copie as partes',
    text: 'A ferramenta mostrará os blocos gerados. Copie o que precisar e use-o onde desejar.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<TextSplitterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Fontes e Referências',
  bibliography: [
    { name: 'Algoritmo de quebra de linha Unicode', url: 'https://unicode.org/reports/tr14/' },
    { name: 'NLP: Técnicas de divisão de frases', url: 'https://pt.wikipedia.org/wiki/Segmenta%C3%A7%C3%A3o_de_frases' },
    { name: 'Limites da janela de contexto LLM', url: 'https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Por que você precisa de um divisor de texto online?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Trabalhar com textos muito longos pode ser um desafio na era digital. Quer seja um programador que precisa de dividir código em módulos, um escritor que adapta conteúdo para redes sociais ou um utilizador que interage com <strong>Modelos de Linguagem de Grande Escala (LLMs)</strong> como o ChatGPT, um <strong>divisor de texto</strong> é uma ferramenta essencial.',
    },
    {
      type: 'title',
      text: 'Métodos de Divisão Inteligentes',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Por Caracteres:</strong> Preciso para cumprir estritamente limites técnicos.',
        '<strong>Por Palavras:</strong> Ideal para artigos e blogs onde se procura um comprimento específico para SEO ou legibilidade.',
        '<strong>Por Frases:</strong> Garante que as ideias não são cortadas a meio, mantendo o contexto de cada bloco.',
        '<strong>Por Parágrafos:</strong> A melhor opção para manter a estrutura lógica de um documento complexo.',
      ],
    },
    {
      type: 'title',
      text: 'Privacidade e Velocidade: Processamento Local',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O nosso <strong>divisor de texto online</strong> não "carrega" o seu conteúdo para nenhum servidor. Tudo é processado instantaneamente no seu navegador. Isto significa que pode trabalhar com documentos sensíveis, contratos ou e-mails privados com a certeza absoluta de que ninguém mais os pode ver.',
    },
  ],
  ui: {
    labelInput: 'Texto Original',
    labelOutput: 'Partes Divididas',
    labelMethod: 'Método de Divisão',
    labelValue: 'Máx. por parte',
    placeholderInput: 'Cole o texto longo aqui...',
    placeholderOutput: 'As partes divididas aparecerão aqui...',
    optionChars: 'Caracteres',
    optionWords: 'Palavras',
    optionSentences: 'Frases',
    optionParagraphs: 'Parágrafos',
    btnSplit: 'Dividir Texto',
    btnCopy: 'Copiar Parte',
    btnClear: 'Limpar Tudo',
    toastCopied: 'Parte copiada para a área de transferência!',
    labelPartsFound: 'Partes geradas',
  },
};
