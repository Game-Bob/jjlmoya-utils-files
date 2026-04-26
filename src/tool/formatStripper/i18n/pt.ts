import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FormatStripperUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'remover-formatacao-de-texto';
const title = 'Remover Formatação de Texto Online Grátis - Limpador de Estilos';
const description =
  'Elimine negritos, itálicos, links e cores de qualquer texto. Converta HTML ou Word em texto simples (txt) instantaneamente com o nosso limpador de estilos profissional.';

const faqData = [
  {
    question: 'Como remover negritos e itálicos de um texto?',
    answer:
      'Basta colar o seu texto na nossa ferramenta. O sistema deteta automaticamente os estilos e remove-os, deixando apenas os caracteres em texto simples, sem qualquer peso ou decoração adicionada.'
  },
  {
    question: 'É compatível com texto do Microsoft Word ou Google Docs?',
    answer:
      'Sim, foi especialmente desenhado para isso. Ao copiar do Word ou Docs, muito código "lixo" é transportado. O nosso limpador remove todos esses estilos ocultos, permitindo-lhe colar um texto limpo noutras aplicações.'
  },
  {
    question: 'Posso converter HTML para texto simples?',
    answer:
      'Exatamente. Se colar um fragmento de HTML, a nossa ferramenta removerá todas as etiquetas (como <div>, <a>, <strong>) e devolverá apenas o conteúdo de texto legível, pronto a ser usado em qualquer lugar.'
  },
  {
    question: 'É seguro colar informações confidenciais?',
    answer:
      'Totalmente seguro. Todo o processamento é feito 100% no seu navegador. Nenhuns dados são enviados para os nossos servidores, garantindo que o seu texto permanece privado e seguro a todo o momento.'
  },
];

const howToData = [
  {
    name: 'Copie o seu texto',
    text: 'Copie o texto com formatação do Word, de um site ou de um e-mail.'
  },
  {
    name: 'Cole no limpador',
    text: 'Insira o conteúdo na área de entrada. A remoção de estilos é automática.'
  },
  {
    name: 'Copie o resultado',
    text: 'O seu texto está agora simples e limpo. Copie-o e use-o onde quiser sem problemas de formato.'
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

export const content: ToolLocaleContent<FormatStripperUI> = {
  slug,
  title,
  description,
  bibliography,
  faq: faqData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'O que significa "limpar a formatação" e por que precisa disso?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Limpar a formatação é o processo de <strong>transformar texto rico em texto simples</strong> (Plain Text). Quando copiamos informações de um site, de um eBook ou de um documento de Word, esse texto carrega uma "bagagem oculta": tipos de letra, tamanhos, cores, links e estilos CSS. A nossa ferramenta serve como um filtro que elimina todo esse lixo digital.'
    },
    {
      type: 'title',
      text: 'Vantagens de usar um limpador de texto',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Compatibilidade Universal:</strong> O texto simples funciona em qualquer programa, desde e-mails antigos a CMS modernos como o WordPress.',
        '<strong>Código Limpo:</strong> Ideal para programadores que precisam de colar texto no seu código sem transportar etiquetas HTML ou estilos RTF.',
        '<strong>SEO e Legibilidade:</strong> Ao remover formatos erráticos, garante que o seu conteúdo mantém a consistência visual do seu site.',
        '<strong>Privacidade Total:</strong> O processo é local. O seu texto nunca sai do seu navegador.',
      ]
    },
    {
      type: 'title',
      text: 'Limpar formatação vs. Simples Copiar e Colar',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Muitas vezes, um simples <code>Ctrl + V</code> transporta formatos indesejados que quebram o design do seu documento de destino. Usar um <strong>removido de formatação</strong> online garante que apenas guarda a essência da mensagem, permitindo-lhe aplicar os seus próprios estilos do zero sem interferências técnicas.'
    },
  ],
  ui: {
    labelInput: 'Texto de origem (com formato)',
    labelOutput: 'Texto simples (limpo)',
    placeholderInput: 'Cole aqui o texto do Word, Web ou PDF...',
    placeholderOutput: 'O texto limpo aparecerá aqui...',
    btnCopy: 'Copiar Resultado',
    btnClear: 'Limpar Tudo',
    toastCopied: 'Texto limpo copiado!'
  }
};
