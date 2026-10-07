import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-8 text-slate-800">
      {/* Header */}
      <header className="max-w-5xl mx-auto flex justify-between items-center pb-8 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <span className="text-4xl">🎓</span>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">OpenEduBridge</h1>
            <p className="text-xs text-slate-500">Datenschutzkonforme Lernplattform</p>
          </div>
        </div>
        <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
          AGPL v3.0 Open Source
        </span>
      </header>

      {/* Intro / Vision */}
      <section className="max-w-5xl mx-auto my-12 text-center">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
          Vom Anwesenheitsnachweis zum <span className="text-blue-600">Lernfortschritt</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Verbindet Präsenzunterricht und flexibles Lernen im Home-Office. Datenschutzkonform, verlässlich und ohne Stigmatisierung.
        </p>
      </section>

      {/* Rollenauswahl / Quick Access */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
          <div className="text-3xl mb-3">👩‍🏫</div>
          <h3 className="text-xl font-bold mb-2 text-slate-900">Lehrkräfte</h3>
          <p className="text-sm text-slate-600 mb-4">
            Wochenpläne erstellen, Aufgaben vorausplanen und Hilferufe der Klasse im Blick behalten.
          </p>
          <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition">
            Wochenplan-Hub öffnen
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
          <div className="text-3xl mb-3">🎒</div>
          <h3 className="text-xl font-bold mb-2 text-slate-900">Schüler:innen</h3>
          <p className="text-sm text-slate-600 mb-4">
            Aufgaben abarbeiten, Lernfortschritt sehen und diskret Hilfe per Smart-Ampel anfordern.
          </p>
          <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition">
            Meine Aufgaben
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
          <div className="text-3xl mb-3">🏡</div>
          <h3 className="text-xl font-bold mb-2 text-slate-900">Eltern</h3>
          <p className="text-sm text-slate-600 mb-4">
            Transparenter Einblick in den Lernfortschritt der eigenen Kinder bei Krankheit oder Abwesenheit.
          </p>
          <button className="w-full py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium rounded-lg text-sm transition">
            Übersicht ansehen
          </button>
        </div>
      </section>

      {/* Smart Ampelsystem Preview */}
      <section className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-2xl font-bold mb-4 text-slate-900 text-center">🚦 Smart-Ampelsystem & Hilferuf</h3>
        <p className="text-slate-600 text-center mb-6 max-w-xl mx-auto text-sm">
          Schüler signalisieren ihren Status ohne Stigmatisierung – nur für die Lehrkraft und Eltern sichtbar.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
            <span className="text-2xl">🟢</span>
            <h4 className="font-bold text-emerald-900 mt-2">Grün</h4>
            <p className="text-xs text-emerald-700 mt-1">Im Zeitplan, Thema verstanden</p>
          </div>
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
            <span className="text-2xl">🟡</span>
            <h4 className="font-bold text-amber-900 mt-2">Gelb (Hilferuf)</h4>
            <p className="text-xs text-amber-700 mt-1">Hilfe benötigt / Thema unklar</p>
          </div>
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
            <span className="text-2xl">🔴</span>
            <h4 className="font-bold text-rose-900 mt-2">Rot</h4>
            <p className="text-xs text-rose-700 mt-1">Kritischer Rückstand</p>
          </div>
        </div>
      </section>
    </main>
  );
}