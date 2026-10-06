# 🎓 OpenEduBridge

> **Das datenschutzkonforme Framework für flexibles Lernen, Wochenplanung und intelligente Lernprozess-Diagnostik.**

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**OpenEduBridge** ist ein Open-Source-System, das Präsenzunterricht und eigenständiges Lernen im Home-Office nahtlos verbindet. Es gibt Schülern die Flexibilität, bei Abwesenheit nicht den Anschluss zu verlieren, und bietet Lehrkräften sowie Bildungsdirektionen Rechtssicherheit durch lückenlose Lernfortschritts-Dokumentation.

---

## 🏛️ Vision & Konzept für Schulen

Das Ziel von OpenEduBridge ist der Wechsel vom reinen **Anwesenheitsnachweis** hin zum **Lernfortschrittsnachweis**:
* **Flexibilität:** Erarbeitung von Lerninhalten im digitalen Wochenplan (Zuhause oder in der Schule).
* **Verbindlichkeit:** Präsenzpflicht bleibt gezielt erhalten für Prüfungen, Schularbeiten und soziale Interaktion.
* **Datenschutz (DSGVO):** Keine kommerziellen Tracker, vollständige Datenkontrolle, DSGVO-konform hostingfähig (Schul-Cloud / Self-Hosted).

---

## 🌟 Kernfunktionen

### 1. 📅 Wochenplan-Hub (für Lehrkräfte)
* Vorausplanung von Lernzielen, Aufgaben und Unterrichtsmaterialien für die kommende Woche.
* Bei Krankmeldung/Home-Office schaltet die Schüleransicht automatisch auf den synchronisierten Aufgaben-Feed um.

### 2. 🚦 Smart-Ampelsystem & Hilferuf (für Schüler & Lehrer)
* 🟢 **Grün:** Aufgaben im Zeitplan, Lernziele verstanden.
* 🟡 **Gelb (Hilferuf):** Schüler hat bei einer Aufgabe den Button *„Ich benötige Hilfe / Thema unklar“* gewählt.
* 🔴 **Rot:** Kritischer Rückstand oder mehrfacher Hilfebedarf.
> *Stigmatisierungsschutz:* Hilferufe sind nur für die Lehrkraft und die Eltern sichtbar, nicht für Mitschüler.

### 3. 🔑 Identifikation & Sicherheit
* Keine Biometrie. Integration über bestehende Schul-SSO-Systeme (z. B. Edu-ID, OAuth2, Shibboleth).
* Strikte Rollentrennung (Eltern sehen nur eigene Kinder, Lehrer nur ihre Klassen).

---

## 🛠️ Geplanter Tech Stack

* **Frontend:** Next.js (React) / TailwindCSS (Barrierefrei nach WCAG 2.1)
* **Backend:** Node.js (NestJS) oder Go
* **Datenbank:** PostgreSQL / Prisma ORM
* **Deployment:** Docker / Kubernetes

---

## 👥 Mitmachen! (Contribution)

Egal ob Du programmierst oder an der Schule unterrichtest – wir brauchen Dich!

* 👩‍🏫 **Lehrkräfte:** Gib uns Feedback in den GitHub Issues / Discussions zum Schulalltag und zur Didaktik.
* 💻 **Entwickler:** Lese unsere [CONTRIBUTING.md](CONTRIBUTING.md) und suche nach `good first issue`.

---

## 📜 Lizenz
Dieses Projekt steht unter der **GNU Affero General Public License v3.0 (AGPL-3.0)**.
