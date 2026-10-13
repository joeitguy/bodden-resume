import React, { useState } from 'react';
import { Printer, Mail, Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenContact: () => void;
  onPrint: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenContact,
  onPrint
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'resume', label: 'Resume' },
    { id: 'skills', label: 'Skills Matrix' },
    { id: 'coverletter', label: 'Cover Letter' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'hub', label: 'Portfolio Hub' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/80 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('overview')}
              className="text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-emerald-500/25" aria-label="Available for hire status indicator" />
                <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-sky-400 transition-colors">
                  {PORTFOLIO_DATA.profile.preferredName}
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: 4–6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 py-1.5 rounded-md text-sm transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                    isActive
                      ? 'text-white bg-slate-800 font-semibold shadow-xs border border-slate-700/80'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1–2 primary actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onPrint}
              aria-label="Print or export resume as PDF"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-600/80 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 whitespace-nowrap cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5 text-sky-400" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 whitespace-nowrap cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Joe</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onPrint}
              aria-label="Print resume"
              className="p-2 text-slate-200 hover:text-white bg-slate-800 rounded-lg border border-slate-700"
            >
              <Printer className="w-4 h-4 text-sky-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2 text-slate-200 hover:text-white bg-slate-800 rounded-lg border border-slate-700 focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-700 bg-slate-900 px-4 pt-2 pb-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === item.id
                  ? 'bg-slate-800 text-white font-semibold border border-slate-700'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-700/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onPrint();
              }}
              className="w-full py-2 px-3 text-center text-sm font-semibold text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4 text-sky-400" />
              <span>Print / Export Résumé</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2 px-3 text-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Joe</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
