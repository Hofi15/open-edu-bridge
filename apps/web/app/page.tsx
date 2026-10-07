'use client';

import React, { useState } from 'react';

type Day = 'Montag' | 'Dienstag' | 'Mittwoch' | 'Donnerstag' | 'Freitag';

interface Task {
  id: string;
  subject: string;
  title: string;
  description: string;
  day: Day;
  status: 'GRUEN' | 'GELB' | 'ROT';
}

const DAYS: Day[] = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];

export default function PlannerPage() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      subject: 'Mathematik',
      title: 'Bruchrechnung S. 42 Nr. 1-4',
      description: 'Aufgaben im Heft bearbeiten und Ergebnisse kontrollieren.',
      day: 'Montag',
      status: 'GRUEN',
    },
    {
      id: '2',
      subject: 'Deutsch',
      title: 'Leseabschnitt Kapitel 3',
      description: 'Stichpunkte zur Hauptfigur im Lesetagebuch notieren.',
      day: 'Dienstag',
      status: 'GELB',
    },
  ]);

  const [selectedDay, setSelectedDay] = useState<Day>('Montag');
  const [subject, setSubject] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !subject) return;

    const newTask: Task = {
      id: Date.now().toString(),
      subject,
      title,
      description,
      day: selectedDay,
      status: 'GRUEN',
    };

    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
  };

  const getStatusBadge = (status: Task['status']) => {
    switch (status) {
      case 'GRUEN':
        return <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-medium">🟢 Im Zeitplan</span>;
      case 'GELB':
        return <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-medium">🟡 Frage / Hilfe</span>;
      case 'ROT':
        return <span className="bg-rose-100 text-rose-800 text-xs px-2 py-1 rounded-full font-medium">🔴 Rückstand</span>;
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10 text-slate-800">
      {/* Header */}
      <header className="max-w-6xl mx-auto flex justify-between items-center pb-6 border-b border-slate-200 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span>📅</span> Wochenplan-Hub (Lehrkräfte)
          </h1>
          <p className="text-xs text-slate-500">OpenEduBridge – Digitale Lernbegleitung</p>
        </div>
        <a href="/" className="text-sm text-blue-600 hover:underline">
          ← Startseite
        </a>
      </header>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* Formular: Neue Aufgabe anlegen */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 h-fit">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span>➕</span> Neue Aufgabe erstellen
          </h2>
          <form onSubmit={handleAddTask} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Wochentag</label>
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value as Day)}
                className="w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {DAYS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Fach</label>
              <input
                type="text"
                placeholder="z.B. Mathematik, Deutsch..."
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Titel der Aufgabe</label>
              <input
                type="text"
                placeholder="Kurze Beschreibung"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Details / Hinweise</label>
              <textarea
                rows={3}
                placeholder="Zusätzliche Erklärungen..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition shadow-sm"
            >
              Aufgabe zum Wochenplan hinzufügen
            </button>
          </form>
        </div>

        {/* Wochenübersicht (Spalten oder Tageskarten) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-900">Wochenübersicht</h2>
            <span className="text-xs bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full">
              {tasks.length} Aufgaben insgesamt
            </span>
          </div>

          <div className="space-y-4">
            {DAYS.map((day) => {
              const dayTasks = tasks.filter((t) => t.day === day);
              return (
                <div key={day} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-slate-900 text-md">{day}</h3>
                    <span className="text-xs text-slate-400 font-medium">{dayTasks.length} Aufgabe(n)</span>
                  </div>

                  {dayTasks.length === 0 ? (
                    <p className="text-xs text-slate-400 italic">Keine Aufgaben für {day} eingetragen.</p>
                  ) : (
                    <div className="space-y-3">
                      {dayTasks.map((task) => (
                        <div
                          key={task.id}
                          className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-start"
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
                                {task.subject}
                              </span>
                              <h4 className="font-bold text-sm text-slate-800">{task.title}</h4>
                            </div>
                            <p className="text-xs text-slate-600">{task.description}</p>
                          </div>
                          <div className="ml-4">{getStatusBadge(task.status)}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}