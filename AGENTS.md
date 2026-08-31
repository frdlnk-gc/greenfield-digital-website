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
- **Farben:** ausschließlich die CSS-Variablen (`var(--green)` = #0BAE7F usw.). Keine neuen
  Hex-Werte erfinden. Kein Lila, kein GreenCareers-Grün.
- **Schriften:** DM Sans (Fließtext + Headlines) und Poppins (Buttons/Eyebrows) via Google
  Fonts – der `<link>` aus `index.html` wird 1:1 übernommen.
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
- Kunden-Anfrage-Webhook (Szenario "GD Website: Anfrage → Slack #gd-anfragen", Make 7172958):
  `https://hook.eu1.make.com/dpi3yxzn8knq3wimr36vg9hg64oz5l7h`
- Feldnamen im Payload: `name, unternehmen, email, telefon, herausforderung, nachricht, seite, url, zeit`.
  Neue Formulare halten sich an dieses Schema (zusätzliche Felder ok – Make-Szenario dann ergänzen).
- **Jedes Formular braucht das Honeypot-Feld** (`input name="website"`, versteckt) – siehe `index.html`.
- Bewerber-Formulare (Karriere/Stellendetail) bekommen einen **eigenen** Webhook – nicht den
  Kunden-Webhook mitbenutzen.

## Landingpages (ausgekoppelt)

Temporäre LPs (Freebies, Reports, Kampagnen) entstehen als **eine einzelne HTML-Datei** in
`lp/` (z. B. `lp/social-media-report.html`) auf Basis der Foundation: gleicher Font-Link,
gleiches `foundation.css`, gleiche Komponenten – eigener Inhalt, eigener Make-Webhook.
Wird eine LP als Meta-Ad-Ziel geschaltet, vorher mit Freddy klären (Meta-Crawler klickt alle
Buttons durch – Formular-Sendungen nie an bloßes Laden koppeln).

## Zusammenarbeit (Freddy + Janni + Steffi)

1. **Vor jedem Arbeiten:** `git pull`.
2. **Nur die eigenen Seiten anfassen.** Wer `recruiting.html` baut, ändert nicht nebenbei
   `index.html` oder die Foundation.
3. **Klein und oft committen**, aussagekräftige Messages, direkt pushen.
4. Sobald die Seite live ist: Änderungen in einem Branch, Merge per Pull Request.
5. Konflikte in `foundation.css` oder `index.html` → kurz im Slack-Channel
   **#team-greenfield-digital** klären statt drüberbügeln.

## Offene Punkte (Stand 31.08.2026)

- Unterseiten sind Platzhalter – Ausbau nach Freigabe der Startseite (Reihenfolge: Freddy).
- Design-Frames fehlen laut Spec noch für: **Über uns**, **Digitalisierung**.
- Team-Namen im Design sind Platzhalter (Untitled UI) → echte Team-Daten von Freddy nötig.
- Founder-Foto liegt nur klein vor (`assets/img/frederik-linke.jpg`, 160px) → hochauflösendes
  Original nachliefern.
- Social-Icons: nur Instagram verlinkt (echtes Profil). Facebook/TikTok erst einbauen, wenn
  die echten Profil-URLs vorliegen.
- Google-Bewertungslink zeigt auf die Google-Suche → durch echten g.page-Link ersetzen.
