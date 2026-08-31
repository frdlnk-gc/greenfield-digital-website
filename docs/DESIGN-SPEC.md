# Greenfield Digital – Build-Spec (aus Figma-Frames, Chat 2026-06-19)

> Quelle: Freddy hat die Frames als Chat-Screenshots geschickt (Figma-MCP rate-limited).
> Diese Datei ist die verbindliche Bauvorlage. Stack = statisch (HTML + inline CSS + JS), wie GreenCareers.
> Design-Tokens siehe `index.html` (:root). Header + Footer identisch über alle Seiten.

## Globale Navigation
Logo "Greenfield" (Blatt-Mark) · Leistungen · Über uns · Ergebnisse · Ressourcen · Karriere · Button "Jetzt starten"
- Leistungen → Dropdown: Recruiting, Neukunden(gewinnung), Social Media Branding, Digitalisierung
- Ergebnisse → Kundenstimmen-Seite (+ Bewerberpool-Tool)
- Ressourcen → Blog-Übersicht (+ Blog-Artikel)
- Karriere → Karriere-Seite (+ Stellendetailseite)

## Footer (alle Seiten, dunkelgrün/schwarz)
4 Spalten: (1) Logo + "Wachstums-Marktführer in der grünen Branche. Spezialisiert auf GaLaBau, Pflanzenhandel, Kulturbetriebe und verwandte Bereiche." + Social-Icons (FB/IG/TikTok) + Button "Bedarfsanalyse"
(2) Leistungen: Recruiting / Neukunden / Social Media Branding / Digitalisierung
(3) Unternehmen: Über uns / Unsere Mission / Erfolgsgeschichten / Blog / Karriere
(4) Kontakt: Hansaring 61, 50670 Köln, Deutschland · info@greenfield-digital.de · +49 221 1234 5678
Unten: © 2025 Greenfield Digital. Alle Rechte vorbehalten. · Datenschutz · AGB · Impressum

## Webhooks
- KUNDEN-Formulare → https://hook.eu1.make.com/1vmdn2c448cipbaicb2u9hqym6jl8fdk
- BEWERBER-Formulare → https://hook.eu1.make.com/qchbmd1jnfxqgy92gtklmgbhn3yipzvi

## Wiederkehrende Komponenten
- Hero-Karte: abgerundete Box, dunkles Foto-Bg (grüne Branche), grünes Pill-Badge, H1 (Teilwort grün), Subtext, weißer CTA-Button. Floating-Cards rechts: "Exklusiver Verbands-Partner" (Logos) + "Über 20 Experten in unserem Team" (Review-Badges).
- Logos-Strip "Über 700(+) Betriebe konnten von unserer Expertise profitieren".
- Deutschland-Karte (Vektor, mint) + 4 Stats: 700+ Partnerbetriebe / 20+ Experten im Team / 9+ Jahre Erfahrung / 92% unserer Kunden.
- Testimonial "Das sagen unsere Kunden" → Video-Karte (VIVAWEST GmbH) + "Weitere Kundenstimmen →".
- Kunden-Kontaktform mit Founder-Card (Frederik Linke, Geschäftsführer) + Felder Name/Unternehmen/E-Mail/Telefon, Challenge-Chips, Nachricht → KUNDEN-Webhook.
- CTA-Band (Foto grüne Pflanzen/Äpfel): "Bereit für dein grünes Wachstum?" + Button.

---

## SEITE: index.html (Home) – GEBAUT, finalisieren
Hero "Unser Herz schlägt für grünes Wachstum." → Stats (1.000+/770+/21.200+/100%) → Kernkompetenzen (4) → Logos → 4.9★ → Karte+Stats → Kontakt → Footer.
TODO: echte Bilder (Hero/Founder), Karte als sauberer Vektor, Sektionen ggf. an Home-Frame angleichen.

## SEITE: recruiting.html (Leistung) – KUNDEN-Webhook
- Hero: Badge "Wir halten was wir versprechen", H1 "Nachhaltige Personalgewinnung für GaLaBau".
- Logos-Strip.
- "Der intelligente Recruiting-Prozess" – 3 alternierende Feature-Zeilen mit Foto: Weniger Zeitaufwand / Niedrigere Kosten / Passendere Bewerbung.
- "So funktioniert Touchpoint-Recruiting:" – Phone-Mockup + 4 Texte: Erster Eindruck / Wiederholte Sichtbarkeit / Interaktion und Bewerbung / Vertrauen und Nahbarkeit. CTA "Jetzt in 30 Tagen neue Bewerber gewinnen".
- "Einfacher Prozess, starke Ergebnisse" – 4 Steps mit Tag-Badges: Erstgespräch / Kandidatensuche / Vorqualifizierung / Einstellung & Onboarding. CTA.
- Karte+Stats. Testimonial. FAQ "Fragen & Antworten". CTA-Band. Footer.

## SEITE: neukundengewinnung.html (Leistung) – KUNDEN-Webhook
- Hero: H1 "Planbar Neukunden gewinnen in Pflanzenhandel, Gartenbau und Dachbegrünungsunternehmen".
- "Planbar Neukunden zu gewinnen ist schwer – Wir machen es einfach" – 6 Cards: Zielgruppe definieren / Kampagne starten / Leads generieren / Leads qualifizieren / Termine vereinbaren / Wachstum skalieren. + Verbandspartner-Logos.
- "So funktioniert Touchpoint-Marketing:" – Phone-Mockups + Features: Erster Eindruck / Wiederkehrung / Handlungsimpuls / Vertrauen & Nähe / Webinar+Mehrwert / Emotion & Identifikation.
- "Unsere Arbeit, Ihre Bilanz" – Stats: 9+ Jahre Erfahrung / +180 Durchgeführte Projekte / +14.400 Neukundenanfragen / +4.300 Neukundenaufträge.
- Testimonial. Karte+Stats. Kunden-Kontaktform "Du benötigst Unterstützung?". FAQ. CTA-Band. Footer.

## SEITE: social-media.html (Leistung) – KUNDEN-Webhook
- Hero: H1 "Social Media Marketing für GaLaBau, Pflanzenhandel & Kultivierung".
- "Kommen dir folgende Herausforderungen als Unternehmer bekannt vor?" – 3 Challenge-Cards.
- "Von 0 auf 430.000 Views in 4 Monaten" – 3 Spalten: Herausforderung / Lösung / Ergebnis (mit Stats).
- "Der Grüne Platzhirsch" – 3 Positionierungs-Spalten (Mitte grün hervorgehoben) mit Checklisten + Button.
- Testimonial. Karte+Stats.
- Team-Reihe (Member-Cards mit Foto). [PLATZHALTER-Namen → echte Team-Daten nötig]
- "Greenfield Digital - In der Grünen Branche zu Hause" – Kunden-Kontaktform (Name/Unternehmen/E-Mail/Telefon/Nachricht/Upload, "Anfrage absenden").
- "Unsere erfolgreichen Projekte" – Logos. Footer.

## SEITE: ergebnisse.html (Kundenstimmen) – KUNDEN-Webhook (Form unten)
- Hero: Badge "Wir halten was wir versprechen", H1 "Kundenstimmen aus der Grünen Branche", Sub "Über 750 Kunden vertrauen bereits auf unsere Expertise".
- "Das sagen unsere Kunden" – großer Video-Testimonial-Slider (VIVAWEST).
- "Mehr Zufriedenheiten" – Grid dunkelgrüner Firmen-Cards (Logo + Name + "X qualifizierte Bewerbungen / Y Tage bis Einstellung / Z eingestellt"): FREIRAUM, WISAG, Lorberg, INTERMARKT THIELEN, Eckhard Köpsel, Gröbner, Pflanzenhandel Huben, Vivawest, August Lütemann, Mauer, Stanze, Schulz & Brammen, Jensen, Grünfingers, Späth, Fißler & Eckhardt.
- Verbandspartner-Logos. 4.9★ Google-Strip (40+ Bewertungen). Kunden-Kontaktform. CTA-Band. Footer.

## SEITE: blog.html (Ressourcen-Übersicht)
- Hero: Badge "Marktführer für grünes Recruiting", H1 "Der Blog für Wachstum in der grünen Branche", Sub "Praxiswissen, Trends und Strategien für Betriebe im Garten- und Landschaftsbau – kompakt, relevant und direkt anwendbar.", CTA "Beiträge entdecken".
- Blog-Grid 3×3: Card = Bild + Tags (z.B. Branche) + Titel "Die Zukunft des Garten- und Landschaftsbaus: Trends" + Autor + Datum + Views + Excerpt + "View Post".
- "Mehr Beiträge anzeigen". CTA-Band. Footer.

## SEITE: blog-artikel.html (Blog-Detail)
- Hero: H1 "Lavendel als Begleitpflanze: Welche Pflanzen harmonieren perfekt?", Sub "Mediterrane Gartenkonzepte: Lavendel als Gestaltungselement", Meta (Autor · Lesezeit · Aufrufe), CTA "Jetzt lesen".
- 2-Spalten: Artikel-Body (H2 "Lavendel im GaLaBau: Robust, pflegeleicht und ein Gewinn für Mensch und Natur" etc., Stichpunkte, Share-Counter) + Sidebar (Folgen Sie uns / Newsletter / Neueste Artikel).
- Related-Posts-Grid. CTA-Band. Footer.

## SEITE: bewerberpool.html (Bewerbertool, unter Ergebnisse)
- Badge "Bewerbertool", H1 "Greenfield Digital Bewerberpool", Sub "Finden Sie qualifizierte Fachkräfte in Ihrer Region".
- Such-Card: Branche / Position / Mindest-Qualifikation (Selects) + Postleitzahl + Umkreis + Button "Jetzt durchsuchen".
- Animierter Ablauf (Demo): Suchfortschritt-Bar + Steps (Datenbank wird durchsucht · 21.200+ Bewerbungen / Qualifikationen abgeglichen / Ergebnisse zusammengestellt) → Ergebnis "3700 Verfügbare Kandidaten" + "Bewerberaktivität in dieser Region" (370 in 30 Tagen) + Karte + Kandidaten-Liste (anonymisiert: MK Landschaftsgärtner 8km / SL Garten- u. Landschaftspflege 12km / TM Baumkletterer 15km, mit Erfahrung + Skill-Chips Führerschein/Motorsäge). "Daten basieren auf aktiven Nutzern."
- Verhalten wie GreenCareers-Bewerberpool-Kalkulator (animierter Demo, kein echter DB-Zugriff). Footer.

## SEITE: karriere.html – BEWERBER-Webhook
- Hero: H1 "Das Team hinter Greenfield Digital", CTA "Werde Teil unseres Teams".
- "Unser Herz schlägt für grünes Wachstum – Deins auch?" + Absatz.
- Team-Karussell: Foto-Cards + grüne Sprechblasen + Name/Rolle (Mitte aktiv). [PLATZHALTER-Namen Untitled-UI → echte Team-Daten nötig]
- "Wofür wir stehen" (mint) – 6 Cards: Nachhaltiges Wachstum / Disruptiver Mindset / Team & Vertrauen / Performance mit Sinn / Persönliches Wachstum / Zukunft gestalten.
- Logos-Grid "Über 700+ Betriebe...". Testimonial-Video.
- "Aktuelle Stellenangebote / Offene Positionen" – 4 Job-Cards: Sales Manager / Projekt & Marketing Manager / Content & Marketing Manager / Videograf & Cutter (je m/w/d) + Chips + "Jetzt bewerben" (→ Stellendetailseite).
- "Passende Stelle nicht gefunden? Bewirb dich initiativ!" – BEWERBER-Form: Founder-Card + Vorname/Nachname, E-Mail/Telefon, "Wo siehst du dich bei uns?", "Warum möchtest du bei uns arbeiten?", Bewerbungsunterlagen-Upload, "Bewerbung absenden".
- CTA-Band "Werde ein Teil von Greenfield Digital..." + "Offene Stellenangebote". Footer.

## SEITE: stellendetail.html – BEWERBER-Webhook
- Hero-Karte: Badge "Wir stellen ein", H1 "Content & Marketing Manager (m/w/d) bei Greenfield Digital", Meta: Köln/Remote · Vollzeit · Recruiting & Talent, CTA "Jetzt bewerben".
- 2-Spalten: LINKS Content / RECHTS Sticky-Sidebar.
- LINKS: "Über die Position" (3 Absätze) · "Deine Aufgaben" (Active Sourcing & Talentakquise / Candidate Journey Management / Strategische Partnerberatung) · "Das bringst du mit" (Muss-Kriterien + Wünschenswert, je 5 Bullets) · "Das bieten wir dir" (6 Cards: Attraktive Vergütung / Flexible Arbeitsmodelle / Entwicklungsmöglichkeiten / Work-Life-Balance / Moderne Ausstattung / Tolle Benefits) · "Der Bewerbungsprozess" (01 Bewerbung einreichen / 02 Erstgespräch / 03 Fachinterview / 04 Praxisaufgabe / 05 Kennenlernen des Teams / 06 Vertragsangebot).
- RECHTS: grüne "Jetzt bewerben"-Card · "Auf einen Blick" (Standort Köln/Remote · Arbeitszeit Vollzeit 40h · Abteilung Recruiting & Talent · Startdatum Sofort möglich · Gehaltsspanne 50.000–65.000 € p.a.) · "Deine Ansprechpartnerin" Frederik Linke (Geschäftsführer) + Kontakt + "Stelle teilen" (LinkedIn/E-Mail/Link).
- CTA-Band "Starte jetzt in deine Karriere im grünen Sektor." + "Jetzt bewerben". Footer.

---

## NOCH OFFEN / NICHT ERHALTEN
- **Über uns** (Nav) – Frame fehlt.
- **Digitalisierung** (Leistungen-Dropdown) – Frame fehlt.
- Mobile-Varianten – falls vorhanden.

## KLÄRUNGSBEDARF (echte Design-Fragen)
1. **Team-Sektion (Karriere + Social Media):** Namen sind Untitled-UI-Platzhalter (Drew Cano, Sienna Hewitt, Steffi Knapp...). Echte Team-Namen + Fotos nötig — KI-Fotos für reale Personen wären unseriös. → von Freddy.
2. **Founder-Foto Frederik Linke** (Kontaktforms, Stellendetail-Sidebar): echtes Foto nötig.
3. **Kontaktdaten-Inkonsistenz Stellendetail:** Frame zeigt frederik.linke@greenfield.com / +49 40 1234 5678 — Impressum: hello@greenfield-digital.de / +49 221 95 01 88 25. → auf echte Daten normalisieren.
4. **Telefon im Footer-Frame:** +49 221 1234 5678 (Platzhalter) vs. Impressum +49 221 95 01 88 25. → echte Nummer verwenden.

## FOTOS via Higgsfield (KI) – atmosphärisch, keine realen Personen
Hero-Bgs (GaLaBau/Pflanzen/Erde/Lavendel je Seite), CTA-Band-Bgs (grüne Pflanzen/Äpfel), Feature-Fotos (Arbeiter in Baumschule), Blog-Beitragsbilder. Deutschland-Karte = Vektor, kein Foto.
