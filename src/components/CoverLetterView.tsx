import React, { useState } from 'react';
import { Printer, Copy, Check, Sparkles, Building, UserCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CoverLetterViewProps {
  onPrint: () => void;
}

export const CoverLetterView: React.FC<CoverLetterViewProps> = ({ onPrint }) => {
  const { profile, coverLetter } = PORTFOLIO_DATA;
  const [recipient, setRecipient] = useState('Hiring Team');
  const [company, setCompany] = useState('');
  const [copied, setCopied] = useState(false);

  const formattedDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const generateFullText = () => {
    const greeting = `Dear ${recipient}${company ? ` at ${company}` : ''},`;
    const paragraphs = coverLetter.body.map((p) => {
      if (company) {
        return p.replace(/your organization|your mission|your projects/gi, `${company}`);
      }
      return p;
    });

    return `${profile.fullName}
${profile.location}
${profile.email}
${profile.socials.linkedin}

${formattedDate}

${greeting}

${paragraphs.join('\n\n')}

${coverLetter.closing}
${profile.fullName}
${profile.title}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateFullText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-700/80">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-1">
            <span>EXECUTIVE CORRESPONDENCE</span>
            <span>·</span>
            <span>PRINT-SAFE FORMAT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Cover Letter &amp; Professional Narrative
          </h2>
          <p className="mt-1 text-sm text-slate-300 max-w-2xl">
            A comprehensive statement of professional philosophy, technical rigor, and military foundation.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-600/80 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer shadow-xs"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-300" />
                <span>Copy Full Text</span>
              </>
            )}
          </button>

          <button
            onClick={onPrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print Letter</span>
          </button>
        </div>
      </div>

      {/* Recruiter / Hiring Team Personalizer Bar */}
      <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <Sparkles className="w-4 h-4 text-sky-400" />
          <span className="font-semibold text-white">Personalize Letter View:</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 sm:w-56">
            <UserCheck className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="Recipient (e.g. Hiring Team)"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
            />
          </div>

          <div className="relative flex-1 sm:w-56">
            <Building className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company name (optional)"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
            />
          </div>

          {(recipient !== 'Hiring Team' || company) && (
            <button
              onClick={() => {
                setRecipient('Hiring Team');
                setCompany('');
              }}
              className="text-xs text-slate-300 hover:text-white underline py-1 cursor-pointer"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* The Printable Letter Container */}
      <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 sm:p-10 lg:p-12 max-w-4xl mx-auto shadow-xl">
        {/* Letterhead */}
        <div className="border-b border-slate-700/80 pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {profile.fullName}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-sky-400 mt-0.5">
              {profile.title} · ETL Architecture &amp; Integration
            </p>
          </div>
          <div className="text-xs text-slate-300 sm:text-right space-y-0.5 font-mono">
            <p>{profile.location}</p>
            <p>
              <a href={`mailto:${profile.email}`} className="text-sky-300 hover:underline">
                {profile.email}
              </a>
            </p>
            <p>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">
                linkedin.com/in/joe-bodden
              </a>
            </p>
          </div>
        </div>

        {/* Date & Salutation */}
        <div className="space-y-6 text-sm text-slate-200">
          <p className="font-mono text-xs text-slate-400">{formattedDate}</p>

          <p className="font-bold text-white text-base">
            Dear {recipient}{company ? ` at ${company}` : ''},
          </p>

          {/* Letter Body Paragraphs */}
          <div className="space-y-4 leading-relaxed text-slate-200">
            {coverLetter.body.map((paragraph, index) => {
              let text = paragraph;
              if (company) {
                text = text.replace(/your organization|your mission|your projects/gi, (match) => {
                  if (match.toLowerCase() === 'your mission') return `${company}’s mission`;
                  if (match.toLowerCase() === 'your projects') return `${company}’s initiatives`;
                  return company;
                });
              }
              return (
                <p key={index} className="text-justify sm:text-left">
                  {text}
                </p>
              );
            })}
          </div>

          {/* Signoff */}
          <div className="pt-6 space-y-3">
            <p>{coverLetter.closing}</p>
            <div className="pt-2">
              <p className="font-bold text-white text-base tracking-tight">
                {profile.fullName}
              </p>
              <p className="text-xs text-slate-300">
                {profile.title}
              </p>
              <p className="text-xs text-slate-400 font-mono">
                {profile.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
