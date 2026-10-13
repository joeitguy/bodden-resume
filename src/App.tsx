import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ResumeView } from './components/ResumeView';
import { SkillsView } from './components/SkillsView';
import { CoverLetterView } from './components/CoverLetterView';
import { ArchitectureView } from './components/ArchitectureView';
import { HubView } from './components/HubView';
import { ContactModal } from './components/ContactModal';
import { PrintModal } from './components/PrintModal';
import { ModernizationGuide } from './components/ModernizationGuide';
import { PrintResumeSheet } from './components/PrintResumeSheet';
import { Footer } from './components/Footer';
import { ArrowRight, Shield, Layers } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [contactOpen, setContactOpen] = useState(false);
  const [printModalOpen, setPrintModalOpen] = useState(false);
  const [auditOpen, setAuditOpen] = useState(false);

  const handlePrint = () => {
    setPrintModalOpen(true);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      
      {/* Recruiter Ready Print Sheet (hidden in regular browser, visible on print) */}
      <PrintResumeSheet />

      {/* Top Advisory Banner (Highlights modernization suggestions & audit) */}
      <div className="no-print bg-slate-950/90 border-b border-slate-700/80 px-4 py-2 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
            <span className="font-bold text-white">Modernized Identity Engine:</span>
            <span className="hidden sm:inline text-slate-300">
              React 19, Tailwind v4, WCAG AA contrast, and Recruiter Print Hub.
            </span>
          </div>
          <button
            onClick={() => setAuditOpen(true)}
            className="text-xs font-semibold text-sky-400 hover:text-white underline shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 cursor-pointer"
          >
            Modernization &amp; Deployment Guide &rarr;
          </button>
        </div>
      </div>

      {/* Top Bar Contract Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenContact={() => setContactOpen(true)}
        onPrint={handlePrint}
      />

      {/* Main View Area */}
      <main className="no-print flex-1">
        {activeTab === 'overview' && (
          <div>
            <HeroSection
              onNavigate={handleTabChange}
              onOpenContact={() => setContactOpen(true)}
              onPrint={handlePrint}
            />

            {/* Overview Curated Rest of Page */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
              
              {/* Pillar 1: Lead Experience Highlight */}
              <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-700/80">
                  <div>
                    <span className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
                      Flagship Tenure
                    </span>
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                      Enterprise Integration at Scale
                    </h2>
                  </div>
                  <button
                    onClick={() => handleTabChange('resume')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    <span>View Complete 12-Year History</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="bg-slate-800/80 border border-slate-700/80 hover:border-sky-500/50 rounded-xl p-6 sm:p-8 space-y-4 shadow-sm transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Integration Support Analyst
                      </h3>
                      <p className="text-sm font-semibold text-sky-400">
                        Vistage Worldwide, Inc. · Sep 2018 – Mar 2025 (7 Years)
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      San Diego, CA
                    </span>
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed">
                    At Vistage, Joseph served as the crucial linchpin between data infrastructure and business operations. Supported multi-platform integrations using T-SQL, Jira, and Splunk to identify and resolve data sync issues prior to production impact. Automated reporting pipelines and SSRS dashboards gave executive leadership immediate visibility into key metrics.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 bg-slate-900/90 border border-slate-700/80 rounded-lg text-xs text-slate-300">
                      <strong className="text-white block mb-0.5">Automated Reporting Pipelines:</strong>
                      Reduced manual cross-department reconciliation across teams by hundreds of hours via T-SQL, SSRS, and Python.
                    </div>
                    <div className="p-3.5 bg-slate-900/90 border border-slate-700/80 rounded-lg text-xs text-slate-300">
                      <strong className="text-white block mb-0.5">Splunk Telemetry Diagnostics:</strong>
                      Fast root-cause identification of integration discrepancies before data reached production databases.
                    </div>
                  </div>
                </div>
              </section>

              {/* Pillar 2: Core Competencies Preview */}
              <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-700/80">
                  <div>
                    <span className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
                      Technical Breadth
                    </span>
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                      Core Competency Disciplines
                    </h2>
                  </div>
                  <button
                    onClick={() => handleTabChange('skills')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    <span>Open Interactive Matrix</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div className="bg-slate-800/80 border border-slate-700/80 hover:border-sky-500/50 rounded-xl p-5 space-y-2 shadow-sm transition-all">
                    <h3 className="text-sm font-bold text-white">01. AI &amp; GenAI Tooling</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Google AI Certified (8 courses), prompt engineering, custom AI tooling, and contextual algorithm modeling.
                    </p>
                    <p className="text-[11px] font-mono text-emerald-400 pt-2 border-t border-slate-700 font-semibold">
                      Google AI · GenAI · Prompt Eng
                    </p>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/80 hover:border-sky-500/50 rounded-xl p-5 space-y-2 shadow-sm transition-all">
                    <h3 className="text-sm font-bold text-white">02. Data Engineering</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Window functions, stored procedures, triggers, schema migrations, and ETL pipeline design.
                    </p>
                    <p className="text-[11px] font-mono text-sky-400 pt-2 border-t border-slate-700 font-semibold">
                      T-SQL · PostgreSQL · Docker
                    </p>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/80 hover:border-sky-500/50 rounded-xl p-5 space-y-2 shadow-sm transition-all">
                    <h3 className="text-sm font-bold text-white">03. API &amp; SaaS Integration</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Python (PCEP) clients, JSON/XML normalization, OAuth2, and multi-system synchronization.
                    </p>
                    <p className="text-[11px] font-mono text-cyan-400 pt-2 border-t border-slate-700 font-semibold">
                      Python (PCEP) · REST · TypeScript
                    </p>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/80 hover:border-sky-500/50 rounded-xl p-5 space-y-2 shadow-sm transition-all">
                    <h3 className="text-sm font-bold text-white">04. BI &amp; Diagnostics</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      SSRS enterprise reporting, Splunk telemetry, Power BI dashboards, and anomaly resolution.
                    </p>
                    <p className="text-[11px] font-mono text-indigo-400 pt-2 border-t border-slate-700 font-semibold">
                      SSRS · Splunk · Power BI · Tableau
                    </p>
                  </div>
                </div>
              </section>

              {/* Pillar 3: Military Service Foundation */}
              <section className="bg-slate-800/60 border border-slate-700/80 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-base font-bold text-white">
                      United States Navy Veteran — Hospital Corpsman
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                    "My foundation in the U.S. Navy taught me discipline, consistency, and the value of trust within a team. Those lessons still guide how I work today: stay calm under pressure, communicate clearly, and deliver with integrity."
                  </p>
                </div>
                <button
                  onClick={() => handleTabChange('coverletter')}
                  className="px-4 py-2 text-xs font-semibold text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
                >
                  Read Professional Letter
                </button>
              </section>

              {/* Pillar 4: Modular Architecture Spotlight */}
              <section className="bg-gradient-to-r from-blue-950/60 to-slate-800 border border-slate-700/80 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                    <Layers className="w-4 h-4" />
                    <span>SYSTEM SPECIFICATION</span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Modular Identity System Architecture
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                    Explore the full technical documentation, Docker container blueprints, and multi-cloud deployment topologies that drive this platform.
                  </p>
                </div>
                <button
                  onClick={() => handleTabChange('architecture')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shrink-0 shadow-sm cursor-pointer"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </section>

            </div>
          </div>
        )}

        {/* Tab Views */}
        {activeTab !== 'overview' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {activeTab === 'resume' && (
              <ResumeView
                onPrint={handlePrint}
                onOpenContact={() => setContactOpen(true)}
              />
            )}

            {activeTab === 'skills' && (
              <SkillsView />
            )}

            {activeTab === 'coverletter' && (
              <CoverLetterView onPrint={handlePrint} />
            )}

            {activeTab === 'architecture' && (
              <ArchitectureView />
            )}

            {activeTab === 'hub' && (
              <HubView />
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleTabChange}
        onOpenAudit={() => setAuditOpen(true)}
      />

      {/* Contact Dialog Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      {/* Recruiter Print & Export Hub Modal */}
      <PrintModal
        isOpen={printModalOpen}
        onClose={() => setPrintModalOpen(false)}
      />

      {/* Modernization Suggestions Guide Modal */}
      <ModernizationGuide
        isOpen={auditOpen}
        onClose={() => setAuditOpen(false)}
      />

    </div>
  );
}
