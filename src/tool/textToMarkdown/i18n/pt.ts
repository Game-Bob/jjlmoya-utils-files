import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TextToMarkdownUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'conversor-texto-para-markdown';
const title = 'Conversor de Texto para Markdown Online — Formatar Documentos';
const description =
  'Transforme texto simples em código Markdown rapidamente. Converta parágrafos, cabeçalhos e listas em formato compatível com GitHub, Reddit e editores MD.';

const faqData = [
  {
    question: 'O que é Markdown e para que serve?',
    answer:
      'Markdown é uma linguagem de marcação leve usada para formatar texto usando sintaxe de texto simples. É amplamente utilizada em plataformas como GitHub, Reddit, Slack e em geradores de sites estáticos porque é fácil de ler e escrever.'},
  {
    question: 'O meu texto está seguro durante a conversão?',
    answer:
      'Sim, 100% seguro. A conversão é feita inteiramente no seu navegador usando JavaScript. Nenhuma informação é enviada para os nossos servidores, garantindo que os seus documentos permaneçam privados.'},
  {
    question: 'Como são convertidos os títulos e listas?',
    answer:
      'A nossa ferramenta identifica a estrutura básica do texto. Se detetar linhas isoladas antes de parágrafos, pode tratá-las como cabeçalhos. Linhas que começam com traços ou números são formatadas como listas Markdown padrão.'},
  {
    question: 'Posso usar isto para tabelas complexas ou código?',
    answer:
      'Esta ferramenta foi desenhada para formatação básica de texto (parágrafos, listas, negrito, itálico). Para estruturas muito complexas, como tabelas de várias colunas, pode ser necessário um ajuste manual no Markdown gerado.'},
];

const howToData = [
  {
    name: 'Cole o seu texto',
    text: 'Insira o texto simples que deseja formatar no campo de origem.'},
  {
    name: 'Conversão automática',
    text: 'A ferramenta processa o texto e aplica a sintaxe Markdown aos diferentes elementos identificados.'},
  {
    name: 'Copie ou descarregue',
    text: 'Clique em "Copiar resultado" ou "Descarregar .md" para obter o seu ficheiro formatado.'},
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }}))};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text}))};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pt'};

export const content: ToolLocaleContent<TextToMarkdownUI> = {
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
      text: 'Por que converter o seu texto para Markdown?',
      level: 2},
    {
      type: 'paragraph',
      html: 'Se você é um desenvolvedor, blogger ou redator técnico, provavelmente usa <strong>Markdown</strong> diariamente. Converter o seu <strong>texto simples para Markdown</strong> permite-lhe manter uma estrutura limpa que se exporta facilmente para HTML, PDF ou diretamente para plataformas como o WordPress e geradores de sites estáticos.'},
    {
      type: 'title',
      text: 'Privacidade Total: Conversão 100% Local',
      level: 2},
    {
      type: 'paragraph',
      html: 'A maioria dos conversores online processa o seu texto nos seus servidores. O nosso <strong>conversor de texto para Markdown</strong> corre completamente no seu navegador. Os seus dados nunca saem do seu computador, tornando-o ideal para rascunhar documentos internos, notas de reunião ou ideias pessoais.'},
    {
      type: 'title',
      text: 'Funcionalidades em Destaque',
      level: 3},
    {
      type: 'list',
      items: [
        'Identificação automática de <strong>cabeçalhos e títulos</strong>.',
        'Conversão de <strong>listas com marcadores e numeradas</strong>.',
        'Suporte para formatação básica como <strong>negrito e itálico</strong>.',
        'Exportação imediata para <strong>ficheiro .md</strong>.',
      ]},
  ],
  ui: {
    labelInput: 'Texto Simples',
    labelOutput: 'Markdown Formatado',
    placeholderInput: 'Cole o seu texto aqui...',
    placeholderOutput: 'O código Markdown gerado aparecerá aqui...',
    btnConvert: 'Converter para Markdown',
    btnDownload: 'Descarregar .md',
    btnCopy: 'Copiar resultado',
    btnClear: 'Limpar Tudo',
    toastCopied: 'Código Markdown copiado!',
    toastDownloaded: 'A descarregar ficheiro .md...'}};
