# Greenfield Digital Website – Team-Handbuch

Dieses Dokument ist die **verbindliche Arbeitsgrundlage** für alle, die an diesem Repo arbeiten –
egal ob mit Codex, Claude oder von Hand. (Claude-Nutzer: `CLAUDE.md` verweist hierher.)

## Was das hier ist

Die Website von **Greenfield Digital** (www.greenfield-digital.de) – Wachstums-Marktführer der
grünen Branche (GaLaBau, Pflanzenhandel, Kulturbetriebe). Recruiting, Neukundengewinnung,
Social Media Branding, Digitalisierung & KI.

**Wichtig:** Greenfield Digital ist eine eigene Marke. GreenCareers-Material (Farben #16A34A,
Texte, Logos, Brand-Guidelines) hat hier nichts verloren.

## Stack & Architektur

- **Statisches HTML/CSS/JS. Kein Framework, kein Build-Prozess, keine Abhängigkeiten.**
- **Eine Seite = eine HTML-Datei** im Root. Wer eine Seite baut, arbeitet nur in dieser Datei.
- Hosting: GitHub Pages (main-Branch = live).
- Design-Vorlage: `docs/DESIGN-SPEC.md` (aus dem Figma-Design "User Interface Greenfield – V1").
  Dort steht der komplette Aufbau jeder Unterseite. Nicht 1:1 pixelklonen – CI einhalten,
  modern und sauber bauen.

## CI / Design-System

- **`assets/css/foundation.css` ist eingefroren.** Alle Farben, Schriften, Buttons, Karten,
  Pills, Formulare, Animationen kommen von dort. Änderungen an dieser Datei nur nach Absprache
  mit Freddy – niemals nebenbei.
- Seiten-spezifisches CSS gehört in ein `<style>`-Tag im `<head>` der jeweiligen Seite.
- **Farben:** ausschließlich die CSS-Variablen laut Guideline (`var(--green)` = #0CAE80,
  Viridian #006F53, Night Forest #06211A, Platinum #F4F4F5; Tangerine #F58220 nur als
  seltener Akzent). Keine neuen Hex-Werte erfinden. Kein Lila, kein GreenCareers-Grün.
- **Schriften:** ausschließlich DM Sans (laut Brand-Guideline) via Google Fonts – der
  `<link>` aus `index.html` wird 1:1 übernommen. Kein Poppins, keine weiteren Fonts.
- **Logo:** Blatt-SVG + Wortmarke "Greenfield" – Markup aus `index.html` kopieren.
- Header und Footer sind auf allen fertigen Seiten identisch → aus `index.html` kopieren
  und nur den aktiven Nav-Link anpassen.

## Sprache & Inhalte

- **Du-Ansprache** ("dein Betrieb", "Du benötigst Unterstützung?") – so ist das Design geschrieben.
- Deutsch, professionell-bodenständig, kein Buzzword-Bingo, keine Hype-Sprache.
- **Niemals Zahlen, Kundenstimmen, Bewertungen oder Referenzen erfinden oder umformulieren.**
  Zahlen kommen aus `docs/DESIGN-SPEC.md` oder von Freddy. Echte Zitate werden nie per
  Suchen-Ersetzen angepasst.
- Keine KI-generierten Fotos von realen Personen. Team-Fotos nur echte Bilder von Freddy.
- Kontaktdaten immer aus dem Impressum: Hansaring 61, 50670 Köln ·
  hello@greenfield-digital.de · +49 (0) 221 95 01 88 25.

## Formulare & Automation

- Formulare senden per `fetch` ein **JSON per POST an einen Make-Webhook**, der die Anfrage in
  den Slack-Channel **#gd-anfragen** postet. Muster: Anfrage-Formular in `index.html` +
  `assets/js/main.js`.
- Formulare tragen `data-webhook="…"` – `assets/js/main.js` verarbeitet alle generisch
  (Honeypot, Validierung, Erfolgs-Box = nächstes `.form-success` im selben Container).
- Kunden-Anfrage-Webhook (Szenario "GD Website: Anfrage → Slack #gd-anfragen", Make 7172958):
  `https://hook.eu1.make.com/dpi3yxzn8knq3wimr36vg9hg64oz5l7h`
  Payload: `name, unternehmen, email, telefon, herausforderung, nachricht, seite, url, zeit`.
- Bewerbungs-Webhook (Szenario "GD Website: Bewerbung → Slack #gd-anfragen", Make 7174910):
  `https://hook.eu1.make.com/wmkdkgrwjhk398vxmnmn8k2fd4ig7qcc`
  Payload: `vorname, nachname, email, telefon, stelle, bereich, motivation, unterlagen, seite, url, zeit`.
- **Jedes Formular braucht das Honeypot-Feld** (`input name="website"`, versteckt) – siehe `index.html`.

## Landingpages (ausgekoppelt)

Temporäre LPs (Freebies, Reports, Kampagnen) entstehen als **eine einzelne HTML-Datei** in
`lp/` (z. B. `lp/social-media-report.html`) auf Basis der Foundation: gleicher Font-Link,
gleiches `foundation.css`, gleiche Komponenten – eigener Inhalt, eigener Make-Webhook.
Wird eine LP als Meta-Ad-Ziel geschaltet, vorher mit Freddy klären (Meta-Crawler klickt alle
Buttons durch – Formular-Sendungen nie an bloßes Laden koppeln).

## Zusammenarbeit (Freddy + Janni + Steffi)

Neu im Projekt? → Schritt-für-Schritt-Einstieg in [`docs/ONBOARDING.md`](docs/ONBOARDING.md).

1. **Vor jedem Arbeiten:** `git pull`.
2. **Nur die eigenen Seiten anfassen.** Wer `recruiting.html` baut, ändert nicht nebenbei
   `index.html` oder die Foundation.
3. **Klein und oft committen**, aussagekräftige Messages, direkt pushen.
4. Sobald die Seite live ist: Änderungen in einem Branch, Merge per Pull Request.
5. Konflikte in `foundation.css` oder `index.html` → kurz im Slack-Channel
   **#team-greenfield-digital** klären statt drüberbügeln.

## Interaktive Komponenten (Foundation)

- **Orbit** (`.orbit`, Startseite): 4 schwebende Service-Karten um „Ihr Unternehmen im
  Mittelpunkt"; Hover tauscht den Text in der Mitte (JS in `main.js`).
- **DACH-Karte**: pulsierende Punkte mit Hover-/Fokus-Tooltips (Regionsnamen, keine Zahlen!)
  + sanfter 3D-Tilt bei Mausbewegung (nur pointer:fine, respektiert reduced-motion).
- **Phone-Mockups**: animieren beim Scroll-Einstieg (Balken wachsen, Karten sliden,
  Benachrichtigungs-Toast loopt).
- Favicon = weißes Blatt auf Primärgrün (`assets/img/favicon.svg/.png`, apple-touch-icon).

## Seitenstatus (Stand 31.08.2026)

Alle Seiten sind gebaut: Startseite, Recruiting, Neukundengewinnung, Social Media,
Digitalisierung, Über uns, Ergebnisse (16 echte Referenzen), Karriere (4 Stellen +
Initiativbewerbung), Stellendetail (Content &amp; Marketing Manager), Blog + Blog-Artikel
(Lavendel), Bewerberpool (animiertes Demo-Tool) sowie die Legal-Seiten.

## Offene Punkte (Stand 31.08.2026)

- **GO-LIVE-CHECKLISTE:** `<meta name="robots" content="noindex">` aus ALLEN Seiten entfernen
  und die og:image-Domain in `index.html` umstellen, sobald die Seite auf
  greenfield-digital.de läuft (noindex steht dort nur für die Entwurfsphase auf github.io).
- Slack-Anbindung: In **#gd-anfragen** muss die Make-App einmal per `/invite` hinzugefügt
  werden, sonst laufen Formular-Nachrichten in die Make-Queue statt in den Channel.
- Blog: nur der Lavendel-Artikel ist ausgeschrieben; die übrigen Karten stehen auf
  „Erscheint in Kürze" → Artikel nachliefern.
- Stellendetail existiert nur für Content &amp; Marketing Manager; die anderen 3 Job-Karten
  springen zur Initiativbewerbung (Stelle wird vorausgefüllt) → weitere Detailseiten bei Bedarf.
- Team-Fotos: keine KI-/Stock-Gesichter verwenden – Team-Sektionen arbeiten bewusst mit
  Rollen statt Namen, bis echte Fotos/Namen von Freddy kommen.
- Founder-Foto liegt nur klein vor (`assets/img/frederik-linke.jpg`, 160px) → hochauflösendes
  Original nachliefern.
- Social-Icons: nur Instagram verlinkt (echtes Profil). Facebook/TikTok erst einbauen, wenn
  die echten Profil-URLs vorliegen.
- Google-Bewertungslink zeigt auf die Google-Suche → durch echten g.page-Link ersetzen.
- GrünTeam-Logo war als Datei defekt und ist entfernt → saubere Version nachliefern.
- Bewerberpool ist ein Demo-Tool (Zahlen abgeleitet aus Pool-Durchschnittswerten,
  kein Live-DB-Zugriff) – Verhalten wie im Design vorgesehen.
- Bewerberpool nutzt bewusst Sie-Ansprache (B2B-Tool laut Design), Rest der Website Du.
