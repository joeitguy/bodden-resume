import React from 'react';
import { Layers, Box, Terminal, GitBranch } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ArchitectureView: React.FC = () => {
  const { architectureDoc, profile } = PORTFOLIO_DATA;

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="pb-6 border-b border-slate-700/80">
        <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-1">
          <span>SYSTEM ARCHITECTURE &amp; SPECIFICATION</span>
          <span>·</span>
          <span>v2.0 OVERHAUL</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {architectureDoc.title}
        </h2>
        <p className="mt-1 text-sm text-slate-300 max-w-3xl leading-relaxed">
          {architectureDoc.summary}
        </p>
      </div>

      {/* Interactive Visual Pipeline Diagram */}
      <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-400" />
            <span>End-to-End System Topology</span>
          </h3>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-800/80 px-2.5 py-0.5 rounded font-semibold">
            Containerized &amp; Portable
          </span>
        </div>

        {/* 4-Stage Architectural Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {/* Stage 1 */}
          <div className="bg-slate-900/90 border border-slate-700/80 rounded-lg p-4 space-y-2 relative">
            <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-800 text-sky-400 flex items-center justify-center font-mono text-xs font-bold">
              01
            </div>
            <h4 className="text-sm font-bold text-white">Client Presentation</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              React 19, TypeScript, Tailwind CSS v4, Motion, WCAG AA Accessibility, zero-pill typography.
            </p>
            <div className="text-[11px] font-mono text-sky-400 pt-2 border-t border-slate-800">
              Vite 8 &amp; Sub-ms HMR
            </div>
          </div>

          {/* Stage 2 */}
          <div className="bg-slate-900/90 border border-slate-700/80 rounded-lg p-4 space-y-2 relative">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center font-mono text-xs font-bold">
              02
            </div>
            <h4 className="text-sm font-bold text-white">Identity Modules</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Resume, CoverLetter, SkillsMatrix, Print Engine, Contact Subsystem with zero state coupling.
            </p>
            <div className="text-[11px] font-mono text-cyan-400 pt-2 border-t border-slate-800">
              Modular Component Vault
            </div>
          </div>

          {/* Stage 3 */}
          <div className="bg-slate-900/90 border border-slate-700/80 rounded-lg p-4 space-y-2 relative">
            <div className="w-8 h-8 rounded-lg bg-indigo-950 border border-indigo-800 text-indigo-400 flex items-center justify-center font-mono text-xs font-bold">
              03
            </div>
            <h4 className="text-sm font-bold text-white">Container Runtime</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Node 18-alpine, Nginx edge reverse proxy, Docker multi-stage builds, and minimal attack surface.
            </p>
            <div className="text-[11px] font-mono text-indigo-400 pt-2 border-t border-slate-800">
              Docker Hub: joeitguy
            </div>
          </div>

          {/* Stage 4 */}
          <div className="bg-slate-900/90 border border-slate-700/80 rounded-lg p-4 space-y-2 relative">
            <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center font-mono text-xs font-bold">
              04
            </div>
            <h4 className="text-sm font-bold text-white">Multi-Cloud Deploy</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Native cloud flexibility across Heroku, Google Cloud Run, AWS ECS, or Azure Container Apps.
            </p>
            <div className="text-[11px] font-mono text-emerald-400 pt-2 border-t border-slate-800">
              Cloud-Native Portability
            </div>
          </div>
        </div>
      </div>

      {/* Deep-Dive Architectural Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {architectureDoc.components.map((comp, idx) => (
          <div
            key={idx}
            className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 space-y-3 shadow-sm"
          >
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Box className="w-4 h-4 text-sky-400" />
              <span>{comp.name}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {comp.description}
            </p>
          </div>
        ))}
      </div>

      {/* Containerization Philosophy & Code Snippet */}
      <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 sm:p-8 space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
            <Terminal className="w-5 h-5 text-sky-400" />
            <span>Containerization Blueprint &amp; Multi-Stage Build</span>
          </h3>
          <span className="text-xs font-mono text-sky-300">Dockerfile.prod</span>
        </div>

        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
          Reflecting Joe Bodden's design principles from the Heroku deployment: using minimal base images (Alpine Linux), unprivileged non-root runtime users, static Nginx web serving with gzip compression, and sub-50MB final images.
        </p>

        <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 font-mono text-xs text-slate-300 overflow-x-auto space-y-1">
          <p className="text-slate-500"># Stage 1: Build the production bundle</p>
          <p><span className="text-sky-400 font-bold">FROM</span> node:18-alpine <span className="text-sky-400 font-bold">AS</span> builder</p>
          <p><span className="text-sky-400 font-bold">WORKDIR</span> /app</p>
          <p><span className="text-sky-400 font-bold">COPY</span> package*.json ./</p>
          <p><span className="text-sky-400 font-bold">RUN</span> npm ci --omit=dev=false</p>
          <p><span className="text-sky-400 font-bold">COPY</span> . .</p>
          <p><span className="text-sky-400 font-bold">RUN</span> npm run build</p>
          <p className="text-slate-500 pt-2"># Stage 2: Hardened Alpine Nginx web server</p>
          <p><span className="text-sky-400 font-bold">FROM</span> nginx:alpine-slim</p>
          <p><span className="text-sky-400 font-bold">COPY</span> --from=builder /app/dist /usr/share/nginx/html</p>
          <p><span className="text-sky-400 font-bold">COPY</span> nginx.conf /etc/nginx/conf.d/default.conf</p>
          <p><span className="text-sky-400 font-bold">EXPOSE</span> 80</p>
          <p><span className="text-sky-400 font-bold">CMD</span> ["nginx", "-g", "daemon off;"]</p>
        </div>
      </div>

      {/* Strategic Roadmap & Future Milestones */}
      <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center justify-between pb-4 border-b border-slate-700/80">
          <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-sky-400" />
            <span>Architecture Roadmap &amp; Feature Milestones</span>
          </h3>
          <span className="text-xs font-mono text-slate-300">Continuous Evolution</span>
        </div>

        <div className="space-y-4">
          {architectureDoc.roadmap.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 bg-slate-900/90 border border-slate-700/80 rounded-lg"
            >
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    {item.item}
                  </h4>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${
                    item.status.includes('Completed')
                      ? 'text-emerald-400 bg-emerald-950/70 border-emerald-800/80'
                      : 'text-amber-400 bg-amber-950/70 border-amber-800/80'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Author Footer Info */}
      <div className="p-6 bg-slate-800/70 border border-slate-700/80 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
        <div>
          <h4 className="text-sm font-bold text-white">
            Architect &amp; Lead Engineer: {profile.fullName}
          </h4>
          <p className="text-xs text-slate-300 mt-0.5">
            Poway, CA · Data &amp; Technology Consultant · U.S. Navy Corpsman Veteran
          </p>
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
        >
          {profile.email}
        </a>
      </div>
    </div>
  );
};
