import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashVerifierUI } from '../ui';

const slug = 'verificar-hash-arquivo';
const title = 'Verificador de Hash Online — SHA 256, MD5 e SHA 1';
const description =
  'Calcule e verifique a integridade dos seus arquivos comparando a sua assinatura digital SHA256, MD5 ou SHA1. Certifique-se de que os seus downloads não foram alterados.';

const faqData = [
  {
    question: 'Como verificar se um arquivo foi modificado?',
    answer:
      'A forma mais segura é comparar o seu Hash. Um Hash é uma impressão digital única. Se apenas um bit do arquivo mudar, o Hash será completamente diferente. Ao comparar o Hash obtido com o fornecido pelo autor, pode garantir a sua integridade.',
  },
  {
    question: 'Qual algoritmo é melhor: MD5 ou SHA-256?',
    answer:
      'O MD5 é muito rápido, mas é considerado menos seguro contra ataques intencionais. O SHA-256 é o padrão atual de segurança e é muito mais difícil de "falsificar". Para a maioria das verificações de integridade de arquivos, o SHA-256 é a opção recomendada.',
  },
  {
    question: 'Por que o Hash muda se eu renomear o arquivo?',
    answer:
      'Na verdade, renomear um arquivo NÃO muda o seu valor Hash. O Hash é calculado com base no conteúdo interno (os bytes) do arquivo, não no seu nome ou data de criação. Se o Hash mudar, é porque os dados internos foram modificados.',
  },
  {
    question: 'O meu arquivo é enviado para o servidor para calcular o Hash?',
    answer:
      'Não. A nossa ferramenta utiliza a Web Crypto API, o que significa que todo o cálculo é feito localmente no seu navegador. O seu arquivo nunca sai do seu computador, garantindo 100% de privacidade e sendo muito mais rápido, já que não é necessário fazer upload.',
  },
];

const howToData = [
  {
    name: 'Selecione o seu arquivo',
    text: 'Arraste ou selecione o arquivo que deseja verificar na ferramenta.',
  },
  {
    name: 'Escolha o algoritmo',
    text: 'Selecione SHA-256, MD5 ou SHA-1 dependendo da assinatura que possui.',
  },
  {
    name: 'Compare os resultados',
    text: 'Cole o Hash esperado e o sistema dir-lhe-á instantaneamente se coincidem (Sucesso) ou se são diferentes (Erro).',
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

export const content: ToolLocaleContent<HashVerifierUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Fontes e Referências',
  bibliography: [
    {
      name: 'NIST: Padrão de Funções Hash',
      url: 'https://csrc.nist.gov/projects/hash-functions',
    },
    {
      name: 'MDN: Web Crypto API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API',
    },
    {
      name: 'Wikipedia: Função Hash Criptográfica',
      url: 'https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_hash_criptogr%C3%A1fica',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'O que é um Hash de arquivo e por que é vital para a sua segurança?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Um Hash é uma <strong>impressão digital</strong> única para cada arquivo. É uma cadeia alfanumérica gerada por um algoritmo matemático (como o SHA-256). A sua principal característica é ser "unidirecional": pode obter o Hash a partir de um arquivo, mas não pode reconstruir o arquivo a partir do seu Hash.',
    },
    {
      type: 'paragraph',
      html: 'Utilizar um <strong>verificador de hash online</strong> é essencial ao descarregar software, imagens ISO ou documentos sensíveis. Os autores publicam habitualmente o MD5 ou SHA256 dos seus arquivos para que possa verificar se o que descarregou é exatamente o que eles carregaram, sem corrupção ou injeções maliciosas.',
    },
    {
      type: 'title',
      text: 'SHA-256 vs MD5: Qual deve utilizar?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O algoritmo <strong>MD5</strong> foi muito popular durante anos devido à sua velocidade, mas hoje é considerado criptograficamente inseguro, pois é suscetível a "colisões". No entanto, ainda é utilizado para verificações de integridade simples (downloads corrompidos).',
    },
    {
      type: 'paragraph',
      html: 'Se procura a segurança máxima, o <strong>SHA-256</strong> (parte da família SHA-2) é o padrão recomendado pelas agências de segurança em todo o mundo. É virtualmente impossível que dois arquivos diferentes produzam o mesmo Hash SHA-256.',
    },
    {
      type: 'title',
      text: 'Privacidade Total: Cálculo 100% no seu navegador',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Não é necessário fazer upload',
      html: '<p>A nossa ferramenta utiliza o poder do seu computador para processar o arquivo. Ao utilizar a <strong>Web Crypto API</strong>, não precisamos de "carregar" o arquivo para nenhum servidor. Isto significa que pode verificar arquivos de vários gigabytes em segundos, sem consumir a sua largura de banda de internet e garantindo que o conteúdo dos seus arquivos nunca sai do seu dispositivo.</p>',
    },
  ],
  ui: {
    labelTitle: "Verificador de Hash Local",
    labelSubtitle: "Solte qualquer arquivo para gerar instantaneamente a sua assinatura <strong class=\"hv-accent\">SHA-256</strong>.",
    btnSelect: "Selecionar Arquivo",
    labelPrivacy: "Os arquivos nunca saem do seu dispositivo.",
    labelCalculating: "Calculando Assinatura...",
    labelSuccess: "Cálculo bem-sucedido",
    btnAnother: "Verificar outro",
    labelHash: "Hash SHA-256",
    btnCopyTitle: "Copiar hash",
    labelCompare: "Comparar com o original",
    placeholderCompare: "Cole o hash esperado aqui...",
    labelCompareNote: "* A comparação ignora maiúsculas e espaços em branco.",
    statusVerified: "VERIFICADO",
    statusCorrupt: "CORROMPIDO / ERRO",
  },
};
