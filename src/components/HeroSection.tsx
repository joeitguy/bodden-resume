import React from 'react';
import { ArrowRight, Terminal, Award, Linkedin, Github, Printer } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onNavigate: (tab: string) => void;
  onOpenContact: () => void;
  onPrint: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenContact,
  onPrint
}) => {
  const { profile, stats } = PORTFOLIO_DATA;

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-700/70 bg-gradient-to-b from-slate-900 via-[#10192e] to-slate-900">
      {/* Background subtle radial glow for personality */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-gradient-to-r from-blue-600/15 via-sky-500/20 to-indigo-600/15 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & Typography */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial Title & Subtitle */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]" style={{ textWrap: 'balance' }}>
                {profile.tagline}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-sky-400">
                {profile.fullName}
              </p>
              <p className="text-sm sm:text-base text-slate-300 font-mono">
                {profile.specializations.join(' · ')}
              </p>
            </div>

            {/* Core Bio Quote / Summary */}
            <blockquote className="border-l-2 border-sky-400 pl-4 py-1 text-slate-200 text-sm sm:text-base leading-relaxed bg-slate-800/40 rounded-r-lg">
              <p className="italic font-medium text-slate-100">
                &ldquo;{profile.motto}&rdquo;
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                {profile.bio}
              </p>
            </blockquote>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('resume')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-900/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
              >
                <span>Interactive Résumé</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('skills')}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-600/80 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
              >
                <span>Skills Matrix</span>
              </button>

              <button
                onClick={onPrint}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-750 border border-slate-700 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
              >
                <Printer className="w-4 h-4 text-sky-400" />
                <span>Print / PDF</span>
              </button>
            </div>

            {/* Social & Verification Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-sky-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-slate-300 hover:text-sky-400" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-500">·</span>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-500">·</span>
              <a
                href={profile.socials.salesforce}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Salesforce Trailblazer</span>
              </a>
              <span className="text-slate-500">·</span>
              <span className="text-slate-300">
                {profile.location}
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Terminal / System Status Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 border border-slate-700/90 rounded-xl overflow-hidden shadow-2xl">
              {/* Terminal Window Header */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                  <span className="text-xs font-mono text-slate-400 ml-2">identity_engine.sh</span>
                </div>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
              </div>

              {/* Console Body */}
              <div className="p-5 font-mono text-xs space-y-4">
                <div className="space-y-1.5 text-slate-300">
                  <p className="text-slate-400">
                    <span className="text-sky-400">$</span> identity --profile "Joseph W.P. Bodden Jr."
                  </p>
                  <p className="text-emerald-400">
                    &gt; Initialized: Analytical Developer &amp; Integration Engineer
                  </p>
                  <p className="text-slate-300">
                    &gt; Certified: Google AI · Python (PCEP™) · Advanced SQL
                  </p>
                </div>

                {/* Structured Verification List */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="flex items-start justify-between text-slate-300">
                    <span className="text-slate-400">Experience:</span>
                    <span className="text-right font-semibold text-white">12+ Years (Vistage, Pala, Jackson)</span>
                  </div>
                  <div className="flex items-start justify-between text-slate-300">
                    <span className="text-slate-400">Military Service:</span>
                    <span className="text-right text-emerald-400">U.S. Navy Corpsman (Veteran)</span>
                  </div>
                  <div className="flex items-start justify-between text-slate-300">
                    <span className="text-slate-400">Certifications:</span>
                    <span className="text-right text-white">Google AI (8x) · PCEP™ · Adv SQL</span>
                  </div>
                  <div className="flex items-start justify-between text-slate-300">
                    <span className="text-slate-400">Tooling:</span>
                    <span className="text-right text-sky-400">SQL · Python · Docker · REST APIs</span>
                  </div>
                </div>

                {/* Quick Interactive Terminal Actions */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onNavigate('architecture')}
                    className="flex-1 py-1.5 px-2 text-center text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded border border-slate-700 transition-colors cursor-pointer"
                  >
                    View Architecture
                  </button>
                  <button
                    onClick={onOpenContact}
                    className="flex-1 py-1.5 px-2 text-center text-xs font-semibold text-sky-300 bg-blue-950/70 hover:bg-blue-900/70 border border-blue-800 rounded transition-colors cursor-pointer"
                  >
                    Send Direct Msg
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Rigor Grid (Adjacent Proof) */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono tabular-nums">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
