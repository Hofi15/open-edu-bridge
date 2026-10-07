'use client';

import React, { useState } from 'react';

type Day = 'Montag' | 'Dienstag' | 'Mittwoch' | 'Donnerstag' | 'Freitag';
type Status = 'GRUEN' | 'GELB' | 'ROT';

interface Task {
  id: string;
  subject: string;
  title: string;
  description: string;
  day: Day;
  status: Status;
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

  // Status einer Aufgabe umschalten
  const handleStatusChange = (taskId: string, newStatus: Status) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

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

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10 text-slate-800">
      {/* Header */}
      <header className="max-w-6xl mx-auto flex justify-between items-center pb-6 border-b border-slate-200 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span>📅</span> Wochenplan & Smart-Ampel
          </h1>
          <p className="text-xs text-slate-500">OpenEduBridge – Digitale Lernbegleitung</p>
        </div>
        <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
          Interaktiver Prototyp
        </span>
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

        {/* Wochenübersicht */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-900">Wochenübersicht & Status</h2>
            <span className="text-xs bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full">
              {tasks.length} Aufgaben
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
                          className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
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

                          {/* Interaktive Smart-Ampel */}
                          <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 shadow-sm shrink-0">
                            <button
                              onClick={() => handleStatusChange(task.id, 'GRUEN')}
                              title="Alles klar / Erledigt"
                              className={`p-1.5 rounded-md text-xs font-medium transition ${
                                task.status === 'GRUEN'
                                  ? 'bg-emerald-500 text-white shadow-sm'
                                  : 'hover:bg-slate-100 text-slate-400'
                              }`}
                            >
                              🟢 Ok
                            </button>
                            <button
                              onClick={() => handleStatusChange(task.id, 'GELB')}
                              title="Hilfe benötigt / Unklar"
                              className={`p-1.5 rounded-md text-xs font-medium transition ${
                                task.status === 'GELB'
                                  ? 'bg-amber-500 text-white shadow-sm'
                                  : 'hover:bg-slate-100 text-slate-400'
                              }`}
                            >
                              🟡 Hilfe
                            </button>
                            <button
                              onClick={() => handleStatusChange(task.id, 'ROT')}
                              title="Kritischer Rückstand"
                              className={`p-1.5 rounded-md text-xs font-medium transition ${
                                task.status === 'ROT'
                                  ? 'bg-rose-500 text-white shadow-sm'
                                  : 'hover:bg-slate-100 text-slate-400'
                              }`}
                            >
                              🔴 Halt
                            </button>
                          </div>
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