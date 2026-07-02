import React from 'react';
import { BarChart3, Code2, Zap } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-purple-500" />
            <h1 className="text-2xl font-bold text-white">CodeBeat</h1>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
            <a href="#analyze" className="text-slate-300 hover:text-white transition">Analyze</a>
            <a href="#docs" className="text-slate-300 hover:text-white transition">Docs</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Code Quality Analysis
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            AI-powered code quality analysis and intelligent feedback. Improve your code instantly.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 mx-auto transition transform hover:scale-105">
            <BarChart3 className="w-5 h-5" />
            Analyze Code
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white text-center mb-12">Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-slate-700/50 border border-slate-600 hover:border-purple-500 transition">
              <BarChart3 className="w-12 h-12 text-purple-500 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Quality Metrics</h4>
              <p className="text-slate-300">Comprehensive analysis of code quality</p>
            </div>
            <div className="p-8 rounded-lg bg-slate-700/50 border border-slate-600 hover:border-purple-500 transition">
              <Zap className="w-12 h-12 text-purple-500 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">AI Feedback</h4>
              <p className="text-slate-300">Smart suggestions powered by Gemini</p>
            </div>
            <div className="p-8 rounded-lg bg-slate-700/50 border border-slate-600 hover:border-purple-500 transition">
              <Code2 className="w-12 h-12 text-purple-500 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Multi-Language</h4>
              <p className="text-slate-300">Support for multiple programming languages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 CodeBeat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}