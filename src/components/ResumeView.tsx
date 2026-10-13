import React, { useState, useMemo } from 'react';
import { Search, Printer, Briefcase, Award, GraduationCap, Shield, Check, ExternalLink, Calendar, MapPin, Mail, Linkedin, Github, Cpu, Database, Code2, Cloud, Users } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeViewProps {
  onPrint: () => void;
  onOpenContact: () => void;
}

export const ResumeView: React.FC<ResumeViewProps> = ({ onPrint, onOpenContact }) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'integration' | 'analytics' | 'systems'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { profile, experiences } = PORTFOLIO_DATA;

  // Filter experiences based on selected category and search query
  const filteredExperiences = useMemo(() => {
    return experiences.filter((item) => {
      const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.role.toLowerCase().includes(q) ||
        item.company.toLowerCase().includes(q) ||
        item.overview.toLowerCase().includes(q) ||
        item.technologies.some((t) => t.toLowerCase().includes(q)) ||
        item.highlights.some((h) => h.toLowerCase().includes(q))
      );
    });
  }, [experiences, filterCategory, searchQuery]);

  // Competency Icon resolver
  const getCompetencyIcon = (category: string) => {
    if (category.includes('Artificial Intelligence')) return <Cpu className="w-4 h-4 text-sky-400" />;
    if (category.includes('Data Engineering')) return <Database className="w-4 h-4 text-emerald-400" />;
    if (category.includes('Programming')) return <Code2 className="w-4 h-4 text-cyan-400" />;
    if (category.includes('DevOps')) return <Cloud className="w-4 h-4 text-amber-400" />;
    return <Users className="w-4 h-4 text-indigo-400" />;
  };

  return (
    <div className="space-y-12">
      {/* Resume Section Header / Identification Bar */}
      <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-semibold text-sky-400 tracking-wider uppercase">
                Curriculum Vitae
              </span>
              <span className="text-slate-600">·</span>
              <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60 font-semibold">
                <Shield className="w-3 h-3" />
                {profile.veteranStatus}
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {profile.fullName}
            </h1>
            
            <p className="text-sm sm:text-base font-semibold text-sky-400">
              {profile.title}
            </p>

            {/* Direct Contact & Social Metadata */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-xs text-slate-300 font-mono">
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {profile.location}
              </span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                {profile.email}
              </a>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin.com/in/joe-bodden</span>
              </a>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/joeitguy</span>
              </a>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={onPrint}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer shadow-sm"
            >
              <Printer className="w-4 h-4 text-sky-200" />
              <span>Print Recruiter Sheet</span>
            </button>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-3 pt-1">
          <h2 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
            Professional Summary
          </h2>
          <div className="space-y-2.5 text-sm sm:text-base text-slate-200 leading-relaxed">
            {profile.summaryParagraphs.map((para, idx) => (
              <p key={idx}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Competencies Matrix */}
      <div className="bg-slate-900/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 space-y-5 shadow-lg">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider">
              Skills Architecture
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Technical Competencies
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profile.technicalCompetencies.map((comp, idx) => (
            <div
              key={idx}
              className="p-4 bg-slate-950/60 border border-slate-800/90 rounded-xl space-y-1.5 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                {getCompetencyIcon(comp.category)}
                <span>{comp.category}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                {comp.skills}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Controls: Search and Filter Tabs */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter experience by keyword (e.g. Python, Docker, SSRS, T-SQL)..."
            aria-label="Filter experience by keyword"
            className="w-full bg-slate-800/90 border border-slate-700 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Segmented Control */}
        <div className="flex items-center gap-1 p-1 bg-slate-800/90 border border-slate-700 rounded-lg shrink-0">
          {[
            { id: 'all', label: 'All Roles' },
            { id: 'integration', label: 'Integration' },
            { id: 'analytics', label: 'Analytics & BI' },
            { id: 'systems', label: 'Systems & Infra' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id as any)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer ${
                filterCategory === cat.id
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-sky-400" />
          <span>Professional Experience</span>
          <span className="text-xs font-mono text-slate-400 ml-2">
            ({filteredExperiences.length} {filteredExperiences.length === 1 ? 'role' : 'roles'} shown)
          </span>
        </h3>

        {filteredExperiences.length === 0 ? (
          <div className="p-8 text-center bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 text-sm">
            No roles matched your search keyword "{searchQuery}".
            <button
              onClick={() => { setSearchQuery(''); setFilterCategory('all'); }}
              className="block mx-auto mt-2 text-sky-400 hover:underline text-xs"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredExperiences.map((exp) => (
              <article
                key={exp.id}
                className="bg-slate-800/80 border border-slate-700/80 hover:border-sky-500/50 rounded-xl p-6 sm:p-7 transition-all duration-200 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-semibold text-sky-400">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-1 text-xs text-slate-300 font-mono">
                    <span className="flex items-center gap-1.5 text-slate-200">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Context Narrative */}
                <p className="mt-4 text-sm text-slate-200 leading-relaxed">
                  {exp.overview}
                </p>

                {/* Key Contributions & Achievements */}
                <div className="mt-4 pt-4 border-t border-slate-700/70">
                  <p className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2.5">
                    Key Outcomes &amp; Technical Contributions
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-normal">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Stack Footer */}
                <div className="mt-5 pt-3 border-t border-slate-700/60 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                  <span className="text-slate-400 font-mono">Tech Stack:</span>
                  {exp.technologies.map((tech, idx) => (
                    <React.Fragment key={idx}>
                      <span className="text-slate-200">{tech}</span>
                      {idx < exp.technologies.length - 1 && <span className="text-slate-500">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Military Service Honor Section (Preserved & Enhanced) */}
      <div className="bg-slate-850/80 border border-slate-700/80 rounded-xl p-6 sm:p-7 relative overflow-hidden shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 bg-blue-950/80 text-sky-400 rounded-lg border border-blue-800/60 shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white tracking-tight">
                  United States Navy — {profile.military.location}
                </h3>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                  Veteran
                </span>
              </div>
              <p className="text-sm font-semibold text-sky-300 mt-0.5">
                {profile.military.role}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-200 leading-relaxed max-w-3xl">
                {profile.military.notes}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Education & Certifications Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Education Card (4 cols) */}
        <div className="lg:col-span-4 bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-white font-bold text-base pb-2 border-b border-slate-700">
              <GraduationCap className="w-5 h-5 text-sky-400" />
              <span>Formal Education</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-100">
                {profile.education.institution}
              </h4>
              <p className="text-xs font-semibold text-sky-300 mt-0.5">
                {profile.education.degree}
              </p>
              <p className="text-xs font-mono text-slate-400 mt-1">
                {profile.education.period}
              </p>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Focus: {profile.education.focus}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-700/80 text-xs text-slate-400">
            <p className="italic">
              Academic foundation in business operations, analytical systems, and quantitative leadership.
            </p>
          </div>
        </div>

        {/* Certifications Card (8 cols) */}
        <div className="lg:col-span-8 bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between pb-2 border-b border-slate-700">
            <div className="flex items-center gap-2.5 text-white font-bold text-base">
              <Award className="w-5 h-5 text-sky-400" />
              <span>Professional Certifications &amp; Credentials</span>
            </div>
            <span className="text-xs font-mono text-sky-400">
              {profile.certifications.length} Verified Credentials
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {profile.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-slate-900/70 border border-slate-700/80 hover:border-sky-500/60 rounded-lg p-3.5 transition-all space-y-1.5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                    <h5 className="text-xs sm:text-sm font-bold text-white">
                      {cert.name}
                    </h5>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                      {cert.status}
                    </span>
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 hover:underline"
                        title="Verify Certificate"
                      >
                        <span>Verify</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-slate-400 font-mono">
                  <span>{cert.issuer}</span>
                  {cert.date && (
                    <>
                      <span>·</span>
                      <span>Issued: {cert.date}</span>
                    </>
                  )}
                  {cert.credentialId && (
                    <>
                      <span>·</span>
                      <span className="text-slate-300 font-semibold">ID: {cert.credentialId}</span>
                    </>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pt-0.5">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

