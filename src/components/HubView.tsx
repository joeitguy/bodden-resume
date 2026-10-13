import React from 'react';
import { ExternalLink, Linkedin, Github, Award, Box, Code, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const HubView: React.FC = () => {
  const { hubCards } = PORTFOLIO_DATA;

  const getCardIcon = (icon: string) => {
    switch (icon) {
      case 'linkedin':
        return <Linkedin className="w-5 h-5 text-sky-400" />;
      case 'github':
        return <Github className="w-5 h-5 text-slate-100" />;
      case 'salesforce':
        return <Award className="w-5 h-5 text-cyan-400" />;
      case 'docker':
        return <Box className="w-5 h-5 text-indigo-400" />;
      default:
        return <Code className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="pb-6 border-b border-slate-700/80">
        <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-1">
          <span>PORTFOLIO HUB &amp; ECOSYSTEM</span>
          <span>·</span>
          <span>EXTERNAL ARTIFACTS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Joe’s Modular Playground &amp; Links
        </h2>
        <p className="mt-1 text-sm text-slate-300 max-w-2xl">
          Cloud-native, containerized, and built to teach. Explore live repositories, container registries, professional networks, and Salesforce credentials.
        </p>
      </div>

      {/* Grid of Hub Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hubCards.map((card) => (
          <a
            key={card.id}
            href={card.link}
            target="_blank"
            rel="noreferrer"
            className="group bg-slate-800/80 hover:bg-slate-750 border border-slate-700/80 hover:border-sky-500/60 rounded-xl p-6 transition-all duration-200 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-700 group-hover:border-slate-600 transition-colors">
                  {getCardIcon(card.icon)}
                </div>
                {card.badge && (
                  <span className="text-[11px] font-mono text-slate-300 group-hover:text-sky-300 transition-colors">
                    {card.badge}
                  </span>
                )}
              </div>

              <div>
                <span className="text-[11px] font-mono text-sky-400 block mb-0.5">
                  {card.category}
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors flex items-center gap-1.5">
                  <span>{card.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-300 transition-colors" />
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {card.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-700/70 flex items-center justify-between text-xs font-semibold text-sky-400 group-hover:text-sky-300">
              <span>Visit External Resource</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        ))}
      </div>

      {/* Cloud & Engineering Multi-Target Footer Card */}
      <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-6 text-center space-y-2 shadow-sm">
        <p className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
          Multi-Cloud Deployment Footprint
        </p>
        <p className="text-sm font-semibold text-slate-100">
          Deployed across Azure · AWS · GCP · Heroku
        </p>
        <p className="text-xs text-slate-300">
          Engineered with precision in Poway, CA (San Diego County)
        </p>
      </div>
    </div>
  );
};
