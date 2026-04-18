import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'filer-och-text',
  title: 'Filer och Textverktyg',
  description: 'Gratis onlineverktyg för att arbeta med filer och text direkt i din webbläsare. Konvertera ditt urklipp till nedladdningsbara bilder, utan installation och med total integritet.',
  seo: [
    {
      type: 'title',
      text: 'Varför hantera filer från webbläsaren?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Vardagliga fil- och textuppgifter — spara en skärmbild, konvertera ett format, extrahera text — kräver vanligtvis installation av tung programvara eller användning av onlinetjänster som laddar upp dina data till externa servrar. Dessa verktyg fungerar <strong>100% lokalt i din webbläsare</strong>: ingen av dina data lämnar någonsin din enhet.',
    },
    {
      type: 'paragraph',
      html: 'Den moderna webbläsaren har inbyggd åtkomst till Clipboard API, det lokala filsystemet och bildbehandlingsmotorer. Det gör det möjligt att replikera de vanligaste skrivbordsprogramsfunktionerna utan att installera något, registrera dig för något eller se några annonser.',
    },
    {
      type: 'title',
      text: 'Urklipp: från kopiera-klistra till en riktig fil',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'När du tar en skärmbild med <strong>Windows + Shift + S</strong> eller <strong>Cmd + Shift + 4</strong> hamnar bilden i urklippet men sparas inte som en fil. För att få den skulle du normalt behöva öppna Paint, Photoshop eller en annan redigerare, klistra in och exportera. Med verktyget urklipp-till-bild reduceras hela processen till <strong>Ctrl+V och ett klick</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Filer laddas ned med ett namn baserat på exakt datum och tid, vilket gör det enkelt att organisera skärmbilder kronologiskt utan att byta namn på dem manuellt. Utdataformatet är PNG, som bevarar den ursprungliga kvaliteten utan förlust.',
    },
    {
      type: 'title',
      text: 'Integritet genom design',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Varje verktyg i den här kategorin är byggt på en enda princip: <strong>data lämnar aldrig webbläsaren</strong>. Inga förfrågningar till externa servrar, ingen molnlagring, ingen aktivitetsloggning. Vad du än klistrar in i verktyget bearbetas i minnet och laddas ned direkt till din disk, utan mellanhänder.',
    },
    {
      type: 'list',
      items: [
        '<strong>Ingen installation:</strong> Fungerar direkt i webbläsaren på vilket operativsystem som helst.',
        '<strong>Total integritet:</strong> Ingen fil eller text skickas någonsin till någon server.',
        '<strong>Gratis:</strong> Inga användningsgränser, inga prenumerationer, inga vattenstämplar.',
        '<strong>Snabbt:</strong> Bearbetning sker lokalt, så hastigheten beror på din enhet, inte en anslutning.',
      ],
    },
    {
      type: 'title',
      text: 'Framtiden för produktivitetsverktyg',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Moderna webb-API:er (Clipboard API, File System Access API, Canvas API) har stängt gapet mellan vad en inbyggd applikation och vad webbläsaren kan göra. Varje nytt verktyg i den här kategorin utnyttjar dessa möjligheter för att leverera <strong>skrivbordsfunktionalitet med tillgängligheten hos en URL</strong>.',
    },
  ],
};
