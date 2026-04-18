import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'dateien-und-text',
  title: 'Dateien und Textwerkzeuge',
  description: 'Kostenlose Online-Tools für die Arbeit mit Dateien und Text direkt im Browser. Konvertiere die Zwischenablage in herunterladbare Bilder – ohne Installation und mit vollständiger Privatsphäre.',
  seo: [
    {
      type: 'title',
      text: 'Warum Dateien über den Browser verwalten?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alltägliche Datei- und Textaufgaben – einen Screenshot speichern, ein Format konvertieren, Text extrahieren – erfordern normalerweise die Installation schwerer Software oder die Nutzung von Online-Diensten, die deine Daten auf externe Server hochladen. Diese Tools arbeiten <strong>100% lokal in deinem Browser</strong>: Keine deiner Daten verlässt jemals dein Gerät.',
    },
    {
      type: 'paragraph',
      html: 'Der moderne Browser hat nativen Zugriff auf die Clipboard API, das lokale Dateisystem und Bildverarbeitungs-Engines. Das macht es möglich, die gängigsten Desktop-Anwendungsfunktionen zu replizieren, ohne etwas zu installieren, sich zu registrieren oder Werbung zu sehen.',
    },
    {
      type: 'title',
      text: 'Zwischenablage: Vom Kopieren-Einfügen zur echten Datei',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wenn du einen Screenshot mit <strong>Windows + Shift + S</strong> oder <strong>Cmd + Shift + 4</strong> machst, landet das Bild in der Zwischenablage, wird aber nicht als Datei gespeichert. Um es zu erhalten, müsstest du normalerweise Paint, Photoshop oder einen anderen Editor öffnen, einfügen und exportieren. Mit dem Zwischenablage-zu-Bild-Tool wird der gesamte Prozess auf <strong>Strg+V und einen Klick</strong> reduziert.',
    },
    {
      type: 'paragraph',
      html: 'Dateien werden mit einem Namen heruntergeladen, der auf dem genauen Datum und der Uhrzeit basiert, was es einfach macht, Screenshots chronologisch zu organisieren, ohne sie manuell umzubenennen. Das Ausgabeformat ist PNG, das die Originalqualität ohne Verlust bewahrt.',
    },
    {
      type: 'title',
      text: 'Datenschutz durch Design',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jedes Tool in dieser Kategorie basiert auf einem einzigen Prinzip: <strong>Daten verlassen niemals den Browser</strong>. Es gibt keine Anfragen an externe Server, keine Cloud-Speicherung, keine Aktivitätsprotokollierung. Was auch immer du in das Tool einfügst, wird im Arbeitsspeicher verarbeitet und direkt auf deine Festplatte heruntergeladen – ohne Zwischenstationen.',
    },
    {
      type: 'list',
      items: [
        '<strong>Keine Installation:</strong> Funktioniert direkt im Browser auf jedem Betriebssystem.',
        '<strong>Vollständige Privatsphäre:</strong> Keine Datei oder kein Text wird jemals an einen Server gesendet.',
        '<strong>Kostenlos:</strong> Keine Nutzungslimits, keine Abonnements, keine Wasserzeichen.',
        '<strong>Schnell:</strong> Die Verarbeitung erfolgt lokal, daher hängt die Geschwindigkeit von deinem Gerät ab, nicht von einer Verbindung.',
      ],
    },
    {
      type: 'title',
      text: 'Die Zukunft der Produktivitätswerkzeuge',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Moderne Web-APIs (Clipboard API, File System Access API, Canvas API) haben die Lücke zwischen dem, was eine native Anwendung und was der Browser tun kann, geschlossen. Jedes neue Tool in dieser Kategorie nutzt diese Fähigkeiten, um <strong>Desktop-ähnliche Funktionalität mit der Zugänglichkeit einer URL</strong> bereitzustellen.',
    },
  ],
};
