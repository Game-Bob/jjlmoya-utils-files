import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CharacterCounterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'contador-de-caracteres';
const title = 'Contador de Caracteres e Palavras Online: Contador de Letras';
const description =
  'Contador de caracteres, palavras, frases e parágrafos online. Calcula tempos de leitura e voz. Ferramenta gratuita perfeita para SEO e redes sociais.';

const faqData = [
  {
    question: 'Por que é importante contar caracteres em SEO?',
    answer:
      'Os motores de busca têm limites recomendados para títulos (60 caracteres) e meta descrições (155-160 caracteres). Ultrapassar estes limites pode fazer com que o seu conteúdo seja cortado nos resultados de pesquisa.'
  },
  {
    question: 'O contador de caracteres inclui espaços?',
    answer:
      'Sim, por padrão contamos todos os caracteres, incluindo espaços. No entanto, a nossa ferramenta detalha a contagem com e sem espaços para maior precisão, conforme as suas necessidades.'
  },
  {
    question: 'Como é calculado o tempo de leitura?',
    answer:
      'O tempo de leitura baseia-se numa velocidade média de 200 a 250 palavras por minuto. O tempo de voz é calculado sobre cerca de 130-150 palavras por minuto, ideal para guiões e apresentações.'
  },
  {
    question: 'É seguro analisar textos longos aqui?',
    answer:
      'Totalmente. A análise é realizada localmente no seu navegador. Pode processar artigos inteiros ou documentos extensos sem que o texto seja enviado para os nossos servidores.'
  },
];

const howToData = [
  {
    name: 'Introduzir o texto',
    text: 'Escreva diretamente ou cole o texto que deseja analisar na área principal.'
  },
  {
    name: 'Rever estatísticas',
    text: 'Observe a contagem de palavras, caracteres, frases e parágrafos a serem atualizados em tempo real.'
  },
  {
    name: 'Analisar tempos',
    text: 'Consulte os indicadores de tempo estimado de leitura e tempo de locução para o seu conteúdo.'
  },
  {
    name: 'Otimizar comprimento',
    text: 'Ajuste o seu texto de acordo com os limites recomendados para redes sociais ou SEO (títulos, descrições).'
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

export const content: ToolLocaleContent<CharacterCounterUI> = {
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
      text: 'A importância da precisão no texto digital',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'No mundo digital, a "economia das palavras" é fundamental. Já não escrevemos apenas para ser lidos por humanos, mas para ser processados por algoritmos. O Google corta os seus títulos aos 60 caracteres. O Twitter (agora X) limita-o a 280. Um e-mail de vendas eficaz deve ser lido em menos de 30 segundos.'
    },
    {
      type: 'paragraph',
      html: 'Esta <strong>ferramenta de contagem de caracteres e palavras</strong> foi concebida não apenas para lhe dar um número, mas para o ajudar a otimizar a sua comunicação. Ao calcular métricas como o <em>tempo de leitura</em> ou a <em>densidade de palavras</em>, passa de "escrever texto" para "desenhar conteúdo".'
    },
    {
      type: 'title',
      text: 'Otimização SEO',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Os limites dos motores de busca são rigorosos. Se ultrapassar, a sua mensagem é cortada com reticências (...) e o seu CTR (Click Through Rate) cai drasticamente.'
    },
    {
      type: 'table',
      headers: ['Elemento', 'Limite recomendado'],
      rows: [
        ['Meta Title', '50: 60 caracteres'],
        ['Meta Description', '150: 160 caracteres'],
        ['Google Ads (Títulos)', '30 caracteres'],
      ]
    },
    {
      type: 'title',
      text: 'Redes Sociais',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Cada plataforma tem a sua própria linguagem e comprimento ideal. Embora o limite seja maior, o "ponto ideal" de engagement costuma ser menor.'
    },
    {
      type: 'table',
      headers: ['Plataforma', 'Limite'],
      rows: [
        ['Twitter (X)', '280 car. (Ponto ideal: 70-100)'],
        ['Instagram Bio', '150 caracteres'],
        ['LinkedIn Post', '3000 car. (Ideal: ~1200)'],
      ]
    },
    {
      type: 'title',
      text: 'Perguntas Frequentes sobre a Contagem',
      level: 2
    },
    {
      type: 'title',
      text: 'Os espaços contam como caracteres?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Sim, e é um erro comum esquecê-los. Para um computador, um espaço é um byte de informação tal como uma letra "A". Em plataformas como o Twitter ou bases de dados SMS, os espaços consomem o seu limite. A nossa ferramenta fornece ambos os dados: "com espaços" e "sem espaços" (útil para tradutores ou paginadores).'
    },
    {
      type: 'title',
      text: 'Como é calculado o Tempo de Leitura?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Utilizamos o padrão médio de leitura para adultos: <strong>200-250 palavras por minuto</strong> (leitura silenciosa). Para o tempo de voz (locução), calculamos cerca de <strong>130-150 palavras por minuto</strong>, que é o ritmo de conversa natural ou de um narrador de audiolivros pausado.'
    },
    {
      type: 'title',
      text: 'Privacidade: Para onde vai o meu texto?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Para lado nenhum. Todo o processamento é realizado no seu navegador através de <strong>JavaScript no lado do cliente</strong>. Pode desligar a internet e a ferramenta continuará a funcionar. Nenhum dado é enviado para os nossos servidores.'
    },
  ],
  ui: {
    labelChars: 'Caracteres',
    labelWords: 'Palavras',
    labelLines: 'Linhas',
    labelParagraphs: 'Parágrafos',
    labelNoSpaces: 'Sem espaços',
    labelBytes: 'Bytes',
    labelReading: 'Leitura',
    labelSpeaking: 'Locução',
    labelUpload: 'Enviar arquivo',
    btnCopyTitle: 'Copiar texto',
    btnClearTitle: 'Limpar',
    placeholder: 'Escreva ou cole o seu texto aqui...',
    unitSec: 's',
    unitMin: 'min',
    numberLocale: 'pt-PT'
  }
};
