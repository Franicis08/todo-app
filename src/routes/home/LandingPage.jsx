import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col justify-between text-slate-800">
      x{/* Hero Section */}
      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-10 md:p-16">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Stay Organized
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6">
            Manage your daily tasks with ease
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mb-8">
            A simple, lightning-fast productivity app designed to help you keep
            track of what matters most every single day.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/todo"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-emerald-600/20 transition"
            >
              Go to My Tasks
            </Link>
            <Link
              to="/about"
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-6 py-3 rounded-xl transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center font-bold mb-4">
              ✓
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Track Progress</h3>
            <p className="text-sm text-slate-500">
              Easily switch tasks between pending and completed states.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center font-bold mb-4">
              📅
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Due Dates</h3>
            <p className="text-sm text-slate-500">
              Keep deadlines in sight so you never miss a task.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center font-bold mb-4">
              ⚡
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Fast & Minimal</h3>
            <p className="text-sm text-slate-500">
              Distraction-free interface built for speed and efficiency.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
