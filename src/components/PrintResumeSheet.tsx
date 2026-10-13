import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const PrintResumeSheet: React.FC = () => {
  const { profile, experiences } = PORTFOLIO_DATA;

  return (
    <div className="hidden print:block print-container text-slate-900 bg-white p-4">
      {/* Print Header */}
      <header className="border-b-2 border-slate-900 pb-3 mb-3 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 uppercase">
          {profile.fullName}
        </h1>
        <p className="text-[11px] font-semibold text-slate-800 tracking-wide mt-0.5">
          {profile.title} · {profile.veteranStatus}
        </p>
        <p className="text-[10px] text-slate-600 mt-1 font-mono">
          {profile.location} • {profile.email} • linkedin.com/in/joe-bodden • github.com/joeitguy
        </p>
      </header>

      {/* Professional Summary */}
      <section className="mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1">
          Professional Summary
        </h2>
        <div className="text-[10px] leading-relaxed text-slate-800 space-y-1">
          {profile.summaryParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </section>

      {/* Professional Certifications & Credentials */}
      <section className="mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1">
          Professional Certifications &amp; Credentials
        </h2>
        <div className="text-[9.5px] grid grid-cols-2 gap-x-3 gap-y-1 text-slate-800">
          {profile.certifications.map((cert, idx) => (
            <div key={idx} className="leading-tight">
              <strong className="font-bold text-slate-900">{cert.name}</strong>
              <div className="text-[9px] text-slate-600">
                {cert.issuer} {cert.credentialId ? `(ID: ${cert.credentialId})` : ''} · {cert.date}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Competencies Matrix */}
      <section className="mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1">
          Technical Competencies
        </h2>
        <div className="text-[9.5px] space-y-1 text-slate-800">
          {profile.technicalCompetencies.map((comp, idx) => (
            <p key={idx}>
              <strong className="font-bold text-slate-900">{comp.category}:</strong> {comp.skills}
            </p>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
          Professional Experience
        </h2>

        <div className="space-y-2.5">
          {experiences.map((exp) => (
            <div key={exp.id} className="space-y-0.5">
              <div className="flex justify-between items-baseline text-[10.5px]">
                <span className="font-bold text-slate-900">
                  {exp.company} | <span className="font-semibold text-slate-800">{exp.role}</span>
                </span>
                <span className="font-mono text-[9.5px] text-slate-600">
                  {exp.period} | {exp.location}
                </span>
              </div>
              <ul className="list-disc pl-4 text-[9.5px] space-y-0.5 text-slate-800 leading-normal">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Military & Formal Education Footer */}
      <section className="pt-2 border-t border-slate-300 text-[10px] grid grid-cols-2 gap-4 text-slate-800">
        <div>
          <h3 className="font-bold uppercase tracking-wider text-slate-900 mb-0.5">
            Military Service
          </h3>
          <p className="font-semibold">{profile.military.branch} — {profile.military.role}</p>
          <p className="text-slate-600 text-[9px]">{profile.military.notes}</p>
        </div>
        <div>
          <h3 className="font-bold uppercase tracking-wider text-slate-900 mb-0.5">
            Formal Education
          </h3>
          <p className="font-semibold">{profile.education.degree}</p>
          <p className="text-slate-600 text-[9px]">{profile.education.institution} ({profile.education.period}) · Focus: {profile.education.focus}</p>
        </div>
      </section>
    </div>
  );
};
