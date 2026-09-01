# Onboarding: An der Greenfield-Website mitarbeiten (mit Codex)

Diese Anleitung bringt dich in ~15 Minuten so weit, dass du mit Codex an der Website
arbeiten kannst. Die verbindlichen Arbeitsregeln stehen in der [`AGENTS.md`](../AGENTS.md)
im Repo-Root – **Codex liest diese Datei automatisch**, du musst sie ihm nicht erklären.

- **Repo:** https://github.com/frdlnk-gc/greenfield-digital-website
- **Live-Vorschau (Entwurf):** https://frdlnk-gc.github.io/greenfield-digital-website/
- Jeder Push auf `main` ist nach ca. 1–2 Minuten automatisch auf der Live-Vorschau sichtbar.

---

## Schritt 0 – Einmalig durch Freddy: Zugriff bekommen

1. Du brauchst einen (kostenlosen) GitHub-Account → https://github.com/signup
2. Schick Freddy deinen GitHub-Benutzernamen.
3. Freddy fügt dich hinzu: Repo → **Settings → Collaborators → Add people** → Rolle **Write**.
4. Du bekommst eine Einladung per E-Mail → annehmen. Fertig.

---

## Weg A: Codex Cloud (empfohlen – nichts zu installieren)

Der einfachste Weg, wenn du Codex über ChatGPT nutzt:

1. Öffne **chatgpt.com/codex** und verbinde dein GitHub-Konto
   (Codex fragt beim ersten Mal nach der Berechtigung).
2. Wähle das Repo **frdlnk-gc/greenfield-digital-website** aus.
3. Gib Codex deine Aufgabe, z. B.:
   > „Lies zuerst AGENTS.md. Schreibe dann den Blog-Artikel ‚Fachkräftemangel im GaLaBau:
   > 7 Strategien' als eigene Seite nach dem Muster von blog-artikel.html und verlinke
   > ihn in blog.html."
4. Codex arbeitet in einer eigenen Umgebung und erstellt am Ende einen **Pull Request**.
5. PR auf GitHub kurz anschauen → **Merge** → 1–2 Minuten später ist es live auf der Vorschau-URL.

Vorteil: keine lokale Einrichtung, keine Git-Befehle, und durch die PRs sieht das Team
jede Änderung, bevor sie live geht.

## Weg B: Codex CLI (lokal – mit Live-Vorschau beim Arbeiten)

Falls du lieber lokal arbeitest (einmalige Einrichtung im Terminal):

```bash
# 1. GitHub-Anmeldung (einmalig, öffnet den Browser)
brew install gh
gh auth login

# 2. Repo klonen (einmalig)
git clone https://github.com/frdlnk-gc/greenfield-digital-website.git
cd greenfield-digital-website

# 3. Codex im Projektordner starten
codex
```

Lokale Vorschau während der Arbeit (zweites Terminal, dann http://localhost:8760 öffnen):

```bash
python3 -m http.server 8760
```

Täglicher Ablauf mit Weg B:

```bash
git pull                 # IMMER zuerst – den aktuellen Stand holen
# … mit Codex arbeiten …
git add -A
git commit -m "Kurz was du gemacht hast"
git push
```

---

## Die 6 Regeln (Kurzfassung der AGENTS.md)

1. **Vor jedem Arbeiten `git pull`** (bzw. in Codex Cloud: neue Aufgabe = frischer Stand).
2. **Eine Seite = eine Datei. Fass nur deine eigene Seite an.** Wer an `blog.html`
   arbeitet, ändert nicht nebenbei `index.html`.
3. **Tabu ohne Absprache mit Freddy:** `assets/css/foundation.css` (das Design-System),
   `index.html` und `assets/js/main.js`.
4. **Klein und oft committen/pushen** – keine Riesenpakete nach drei Tagen.
5. **Nichts erfinden:** keine ausgedachten Zahlen, Kundenstimmen oder Referenzen,
   keine KI-Fotos von realen Personen, Du-Ansprache beibehalten.
6. **Konflikt oder Unsicherheit?** Kurz in **#team-greenfield-digital** klären
   statt drüberzubügeln.

## Nach jedem Push: selbst kontrollieren

1–2 Minuten warten, dann deine Seite auf
https://frdlnk-gc.github.io/greenfield-digital-website/ öffnen und einmal am Handy
und am Desktop anschauen. Was du gepusht hast, sieht das ganze Team.

---

## Womit anfangen? (offene Aufgaben, Stand 01.09.2026)

| Aufgabe | Dateien | Hinweis |
| --- | --- | --- |
| Blog-Artikel ausschreiben (5 Stück stehen auf „Erscheint in Kürze") | neue Datei je Artikel, Muster: `blog-artikel.html`, verlinken in `blog.html` | Themen + Teaser stehen schon in `blog.html` |
| Stellendetail-Seiten für Sales / Projekt & Marketing / Videograf | Muster: `stellendetail.html`, verlinken in `karriere.html` | Inhalte mit Freddy abstimmen |
| Erste ausgekoppelte Landingpage (z. B. Social-Media-Report) | neue Datei in `lp/` | Regeln in `AGENTS.md` → Abschnitt „Landingpages"; Webhook vorher bei Freddy anfragen |
| Echte Team-Namen/-Fotos, Facebook-/TikTok-Links, Google-Review-Link, GrünTeam-Logo | diverse | liefert Freddy, siehe „Offene Punkte" in `AGENTS.md` |

Wer was übernimmt, klärt ihr am besten einmal kurz in **#team-greenfield-digital** –
damit nie zwei Leute an derselben Datei hängen.
