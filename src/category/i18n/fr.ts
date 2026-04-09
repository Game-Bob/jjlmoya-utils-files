import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'fichiers-et-texte',
  title: 'Outils pour Fichiers et Texte',
  description: "Outils en ligne gratuits pour travailler avec des fichiers et du texte directement dans votre navigateur. Convertissez votre presse-papiers en images téléchargeables, sans installation et en toute confidentialité.",
  seo: [
    {
      type: 'title',
      text: 'Pourquoi gérer des fichiers depuis le navigateur ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Les tâches quotidiennes avec des fichiers et du texte — enregistrer une capture d'écran, convertir un format, extraire du texte — nécessitent généralement l'installation d'un logiciel lourd ou le recours à des services en ligne qui envoient vos données sur des serveurs externes. Ces outils fonctionnent <strong>à 100 % localement dans votre navigateur</strong> : aucune de vos données ne quitte votre appareil.",
    },
    {
      type: 'paragraph',
      html: "Le navigateur moderne dispose d'un accès natif à l'API Clipboard, au système de fichiers local et aux moteurs de traitement d'image. Cela permet de reproduire les fonctions les plus courantes des applications de bureau sans rien installer, sans s'inscrire et sans publicité.",
    },
    {
      type: 'title',
      text: 'Presse-papiers : du copier-coller au fichier réel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Lorsque vous faites une capture d'écran avec <strong>Windows + Shift + S</strong> ou <strong>Cmd + Shift + 4</strong>, l'image se retrouve dans le presse-papiers mais n'est pas enregistrée en tant que fichier. Pour l'obtenir, vous devrez ouvrir Paint, Photoshop ou un autre éditeur, coller et exporter. Avec l'outil presse-papiers vers image, tout le processus se réduit à <strong>Ctrl+V et un clic</strong>.",
    },
    {
      type: 'paragraph',
      html: "Les fichiers sont téléchargés avec un nom basé sur la date et l'heure exactes, ce qui facilite l'organisation chronologique des captures sans avoir à les renommer manuellement. Le format de sortie est PNG, qui préserve la qualité originale sans perte.",
    },
    {
      type: 'title',
      text: 'Confidentialité dès la conception',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Chaque outil de cette catégorie est construit sur un seul principe : <strong>les données ne quittent jamais le navigateur</strong>. Aucune requête vers des serveurs externes, aucun stockage dans le cloud, aucun journal d'activité. Ce que vous collez dans l'outil est traité en mémoire et téléchargé directement sur votre disque, sans intermédiaire.",
    },
    {
      type: 'list',
      items: [
        "<strong>Sans installation :</strong> Fonctionne directement dans le navigateur sur n'importe quel système d'exploitation.",
        '<strong>Confidentialité totale :</strong> Aucun fichier ni texte n\'est envoyé à un serveur.',
        '<strong>Gratuit :</strong> Aucune limite d\'utilisation, aucun abonnement, aucun filigrane.',
        '<strong>Rapide :</strong> Le traitement est local, la vitesse dépend donc de votre appareil et non d\'une connexion.',
      ],
    },
    {
      type: 'title',
      text: 'L\'avenir des outils de productivité',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Les API web modernes (Clipboard API, File System Access API, Canvas API) ont comblé l'écart entre ce que peut faire une application native et ce que peut faire le navigateur. Chaque nouvel outil de cette catégorie exploite ces capacités pour offrir <strong>des fonctionnalités de bureau avec l'accessibilité d'une URL</strong>.",
    },
  ],
};
