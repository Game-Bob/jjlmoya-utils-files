import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ClipboardToImageUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'area-de-transferencia-para-png';
const title = 'Área de Transferência para PNG: Baixar Capturas de Tela';
const description =
  'Ferramenta online para converter o conteúdo da área de transferência (capturas, imagens) num arquivo PNG descarregável instantaneamente. Processo 100% privado e rápido.';

const faqData = [
  {
    question: 'É seguro colar as minhas capturas de tela aqui?',
    answer:
      'Sim, é totalmente seguro. Esta ferramenta funciona de forma 100% local no seu navegador. Os dados da sua área de transferência nunca são enviados para nenhum servidor, garantindo a sua privacidade total.'},
  {
    question: 'Que tipos de conteúdo posso converter?',
    answer:
      'Pode colar imagens copiadas (capturas de tela, fotos), texto que será convertido num arquivo .txt, ou até elementos HTML. O uso mais comum é guardar capturas de tela rápidas como arquivos PNG.'},
  {
    question: 'Por que é que o botão de colar não funciona?',
    answer:
      'Devido a restrições de segurança dos navegadores, às vezes o botão "Colar" requer permissões explícitas. Se não funcionar, pode sempre usar o atalho de teclado padrão: Ctrl+V (Windows) ou Cmd+V (Mac).'},
  {
    question: 'Funciona em dispositivos móveis?',
    answer:
      'Sim, pode usar a função de colar do seu telemóvel para visualizar conteúdos, embora a experiência esteja otimizada para a gestão rápida de capturas de tela no computador.'},
];

const howToData = [
  {
    name: 'Copiar conteúdo',
    text: 'Faça uma captura de tela ou copie uma imagem/texto de qualquer aplicação.'},
  {
    name: 'Colar na área',
    text: 'Clique na área de colagem ou use o atalho Ctrl+V / Cmd+V para carregar o conteúdo.'},
  {
    name: 'Pré-visualizar',
    text: 'Verifique se o conteúdo está correto na zona de pré-visualização que aparecerá instantaneamente.'},
  {
    name: 'Baixar arquivo',
    text: 'Pressione o botão de descarga para guardar o conteúdo como um arquivo real no seu computador.'},
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

export const content: ToolLocaleContent<ClipboardToImageUI> = {
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
      text: 'Como guardar uma imagem da área de transferência como arquivo',
      level: 2},
    {
      type: 'paragraph',
      html: 'Esta ferramenta online gratuita permite <strong>converter o conteúdo da sua área de transferência num arquivo de imagem</strong> (PNG) de forma instantânea. É a solução perfeita quando fez uma captura de tela (Windows + Shift + S) ou copiou uma imagem de uma web e precisa de guardá-la no seu computador sem abrir editores pesados como o Photoshop ou Paint.'},
    {
      type: 'title',
      text: 'Porquê usar este conversor de área de transferência?',
      level: 2},
    {
      type: 'list',
      items: [
        '<strong>Rapidez:</strong> Basta pressionar <code>Ctrl + V</code> e descarregar. Sem passos intermédios.',
        '<strong>Privacidade:</strong> Todo o processo é realizado no seu navegador. As suas imagens <strong>nunca são enviadas para nenhum servidor</strong>.',
        '<strong>Qualidade original:</strong> Obtemos os dados brutos da área de transferência, garantindo que a imagem descarregada mantém a máxima qualidade possível.',
        '<strong>Organização automática:</strong> Os arquivos são descarregados com um nome baseado na data e hora exata, facilitando a organização das suas capturas.',
      ]},
    {
      type: 'title',
      text: 'Perguntas frequentes',
      level: 2},
    {
      type: 'title',
      text: 'Funciona com capturas de tela?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Sim, é ideal para guardar rapidamente capturas de tela feitas com a ferramenta de recortes do Windows ou Mac.'},
    {
      type: 'title',
      text: 'Que formatos suporta?',
      level: 3},
    {
      type: 'paragraph',
      html: 'Atualmente a ferramenta deteta e converte automaticamente qualquer imagem na área de transferência para o formato PNG para garantir a compatibilidade e transparência.'},
  ],
  ui: {
    labelCtrlV: 'Pressione Ctrl + V em qualquer lugar',
    labelClickPaste: 'ou clique aqui para colar',
    btnClear: 'Limpar',
    btnDownload: 'Baixar',
    privacyMsg: 'Todo o processo é 100% local. As suas imagens nunca saem do seu navegador.'}};
