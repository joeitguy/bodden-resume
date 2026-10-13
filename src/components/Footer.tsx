import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Linkedin, Github, Award, Box, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAudit }) => {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer bg-slate-900 border-t border-slate-700/80 py-12 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <span className="text-base font-bold text-white tracking-tight">
              {profile.fullName}
            </span>
            <p className="text-xs text-slate-300 mt-1">
              Data &amp; Technology Consultant · {profile.motto}
            </p>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Poway, CA (San Diego County)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
            <button
              onClick={() => onNavigate('overview')}
              className="hover:text-sky-400 transition-colors cursor-pointer"
            >
              Overview
            </button>
            <span className="text-slate-600">·</span>
            <button
              onClick={() => onNavigate('resume')}
              className="hover:text-sky-400 transition-colors cursor-pointer"
            >
              Resume
            </button>
            <span className="text-slate-600">·</span>
            <button
              onClick={() => onNavigate('skills')}
              className="hover:text-sky-400 transition-colors cursor-pointer"
            >
              Skills Matrix
            </button>
            <span className="text-slate-600">·</span>
            <button
              onClick={() => onNavigate('coverletter')}
              className="hover:text-sky-400 transition-colors cursor-pointer"
            >
              Cover Letter
            </button>
            <span className="text-slate-600">·</span>
            <button
              onClick={() => onNavigate('architecture')}
              className="hover:text-sky-400 transition-colors cursor-pointer"
            >
              Architecture
            </button>
            <span className="text-slate-600">·</span>
            <button
              onClick={onOpenAudit}
              className="text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer font-bold"
            >
              Modernization Audit
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; 2026 Joseph W.P. Bodden Jr. — Modernized Identity Engine.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-slate-400 hover:text-sky-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.salesforce}
              target="_blank"
              rel="noreferrer"
              aria-label="Salesforce Trailblazer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Award className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.dockerHub}
              target="_blank"
              rel="noreferrer"
              aria-label="Docker Hub"
              className="text-slate-400 hover:text-indigo-400 transition-colors"
            >
              <Box className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="p-1.5 text-slate-300 hover:text-white bg-slate-800 border border-slate-700 rounded-md transition-colors ml-2 cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
