import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'arquivos-e-texto',
  title: 'Ferramentas para Arquivos e Texto',
  description: 'Ferramentas online gratuitas para trabalhar com arquivos e texto diretamente no navegador. Converta sua área de transferência em imagens para download, sem instalação e com privacidade total.',
  seo: [
    {
      type: 'title',
      text: 'Por que gerenciar arquivos pelo navegador?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tarefas diárias de arquivo e texto - salvar uma captura de tela, converter um formato, extrair texto - geralmente exigem a instalação de software pesado ou o uso de serviços online que enviam seus dados para servidores externos. Essas ferramentas funcionam <strong>100% localmente no seu navegador</strong>: nenhum dos seus dados jamais sai do seu dispositivo.',
    },
    {
      type: 'paragraph',
      html: 'O navegador moderno tem acesso nativo à Clipboard API, ao sistema de arquivos local e a mecanismos de processamento de imagem. Isso torna possível replicar as funções mais comuns de aplicativos desktop sem instalar nada, se cadastrar em nada ou ver anúncios.',
    },
    {
      type: 'title',
      text: 'Área de transferência: do copiar-colar a um arquivo real',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Quando você tira uma captura de tela com <strong>Windows + Shift + S</strong> ou <strong>Cmd + Shift + 4</strong>, a imagem vai para a área de transferência mas não é salva como arquivo. Para obtê-la normalmente você teria que abrir o Paint, Photoshop ou outro editor, colar e exportar. Com a ferramenta de área de transferência para imagem, todo o processo se resume a <strong>Ctrl+V e um clique</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Os arquivos são baixados com um nome baseado na data e hora exatas, facilitando a organização cronológica das capturas de tela sem renomeá-las manualmente. O formato de saída é PNG, que preserva a qualidade original sem nenhuma perda.',
    },
    {
      type: 'title',
      text: 'Privacidade por design',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cada ferramenta nesta categoria é construída sobre um único princípio: <strong>os dados nunca saem do navegador</strong>. Sem solicitações a servidores externos, sem armazenamento em nuvem, sem registro de atividades. O que você colar na ferramenta é processado na memória e baixado diretamente para o disco, sem intermediários.',
    },
    {
      type: 'list',
      items: [
        '<strong>Sem instalação:</strong> Funciona diretamente no navegador em qualquer sistema operacional.',
        '<strong>Privacidade total:</strong> Nenhum arquivo ou texto é jamais enviado a qualquer servidor.',
        '<strong>Gratuito:</strong> Sem limites de uso, sem assinaturas, sem marcas d\'água.',
        '<strong>Rápido:</strong> O processamento é local, então a velocidade depende do seu dispositivo, não de uma conexão.',
      ],
    },
    {
      type: 'title',
      text: 'O futuro das ferramentas de produtividade',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'As APIs web modernas (Clipboard API, File System Access API, Canvas API) fecharam a lacuna entre o que um aplicativo nativo e o que o navegador podem fazer. Cada nova ferramenta nesta categoria aproveita essas capacidades para entregar <strong>funcionalidade de nível desktop com a acessibilidade de uma URL</strong>.',
    },
  ],
};
