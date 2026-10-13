import React, { useState, useMemo } from 'react';
import { Search, Database, Cloud, LineChart, Wrench, Users, Code } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const { skillCategories, profile } = PORTFOLIO_DATA;

  // Category Icon Resolver
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'data-eng':
        return <Database className="w-5 h-5 text-sky-400" />;
      case 'salesforce':
        return <Cloud className="w-5 h-5 text-cyan-400" />;
      case 'analytics':
        return <LineChart className="w-5 h-5 text-indigo-400" />;
      case 'devops':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'leadership':
        return <Users className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code className="w-5 h-5 text-slate-300" />;
    }
  };

  // Filter skills
  const filteredCategories = useMemo(() => {
    return skillCategories
      .filter((cat) => selectedCategory === 'all' || cat.id === selectedCategory)
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const q = searchQuery.toLowerCase();
        const matchingSkills = cat.skills.filter(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.details.toLowerCase().includes(q) ||
            s.keywords.some((k) => k.toLowerCase().includes(q))
        );
        return {
          ...cat,
          skills: matchingSkills
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [skillCategories, selectedCategory, searchQuery]);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="pb-6 border-b border-slate-700/80">
        <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-1">
          <span>COMPETENCY MATRIX</span>
          <span>·</span>
          <span>VERIFIED PRODUCTION PROFICIENCY</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Technical Skills &amp; Domain Expertise
        </h2>
        <p className="mt-1 text-sm text-slate-300 max-w-3xl">
          Grounded in real-world enterprise deployments, multi-system integration troubleshooting, and production database administration.
        </p>
      </div>

      {/* Global Technical Toolkit Quick Summary */}
      <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 shadow-sm">
        <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-4 font-semibold">
          Core Technology Stack &amp; Toolkit Overview
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
          <div>
            <span className="font-bold text-white block mb-1">Querying &amp; Languages:</span>
            <span className="text-slate-200 leading-relaxed font-mono">
              {profile.technicalToolkit.languages.join(' · ')}
            </span>
          </div>
          <div>
            <span className="font-bold text-white block mb-1">Databases &amp; Warehousing:</span>
            <span className="text-slate-200 leading-relaxed font-mono">
              {profile.technicalToolkit.databases.join(' · ')}
            </span>
          </div>
          <div>
            <span className="font-bold text-white block mb-1">Analytics &amp; Dashboards:</span>
            <span className="text-slate-200 leading-relaxed font-mono">
              {profile.technicalToolkit.analytics.join(' · ')}
            </span>
          </div>
          <div>
            <span className="font-bold text-white block mb-1">DevOps, Systems &amp; Tools:</span>
            <span className="text-slate-200 leading-relaxed font-mono">
              {profile.technicalToolkit.tools.join(' · ')}
            </span>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search specific tool, framework, or skill..."
            aria-label="Search skills"
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

        {/* Filter categories */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-800/90 border border-slate-700 rounded-lg shrink-0">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white font-bold shadow-xs'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              {cat.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Categorized Competency Cards */}
      <div className="space-y-8">
        {filteredCategories.length === 0 ? (
          <div className="p-8 text-center bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 text-sm">
            No competencies matched "{searchQuery}". Try searching for SQL, Python, Splunk, or Docker.
          </div>
        ) : (
          filteredCategories.map((cat) => (
            <div key={cat.id} className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-700/80">
                {getCategoryIcon(cat.id)}
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-slate-800/80 border border-slate-700/80 hover:border-sky-500/50 rounded-xl p-5 space-y-2.5 transition-colors shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-bold text-white tracking-tight">
                        {skill.name}
                      </h4>
                      <span className="text-[11px] font-mono font-semibold text-sky-400 bg-sky-950/70 border border-sky-800/60 px-2 py-0.5 rounded shrink-0">
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {skill.details}
                    </p>

                    {/* Associated Keywords / Tools (Unboxed clean text) */}
                    <div className="pt-2 border-t border-slate-700/60 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                      <span className="text-sky-400/80 font-mono text-[11px]">Keywords:</span>
                      {skill.keywords.map((kw, kwIdx) => (
                        <React.Fragment key={kwIdx}>
                          <span className="text-slate-300">{kw}</span>
                          {kwIdx < skill.keywords.length - 1 && <span className="text-slate-500">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
