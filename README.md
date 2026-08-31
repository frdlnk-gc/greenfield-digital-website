# Greenfield Digital – Website

Statische Website für www.greenfield-digital.de. Kein Build-Prozess – HTML, CSS, JS, fertig.

## Lokal ansehen

```bash
python3 -m http.server 8760
```

Dann http://localhost:8760 öffnen. (Direktes Öffnen der Datei geht auch, aber über den
Server verhält sich das Formular wie live.)

## Struktur

| Pfad | Inhalt |
| --- | --- |
| `index.html` | Startseite (fertig, Entwurf v1) |
| `recruiting.html` u. a. | Unterseiten – aktuell Platzhalter, Ausbau nach Freigabe |
| `impressum.html`, `datenschutz.html`, `agb.html` | Legal-Seiten (übernommen, Stand 08/2026) |
| `assets/css/foundation.css` | **CI-Foundation** – Design-Tokens & Komponenten (eingefroren) |
| `assets/js/main.js` | Basis-Interaktionen inkl. Formular → Make-Webhook |
| `assets/img/` | Fotos, Kundenlogos, Karte, Favicons |
| `lp/` | Ausgekoppelte Landingpages (gleiches CI, eigene Themen) |
| `docs/DESIGN-SPEC.md` | Seitenaufbau aller Unterseiten aus dem Figma-Design |
| `AGENTS.md` | Team-Handbuch – **vor dem Arbeiten lesen** |

## Mitarbeiten

Regeln, CI-Vorgaben und der Git-Workflow stehen in [`AGENTS.md`](AGENTS.md).
Kurzfassung: pullen → nur eigene Seiten anfassen → klein committen → pushen.
