import React, { useState } from 'react';
import { X, Printer, Copy, Download, Check, ExternalLink, FileText, Info } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintModal: React.FC<PrintModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const { profile, experiences } = PORTFOLIO_DATA;

  if (!isOpen) return null;

  // Generate plain text for ATS / recruiters
  const generatePlainText = () => {
    return `${profile.fullName.toUpperCase()}
${profile.location} | ${profile.email}
LinkedIn: ${profile.socials.linkedin} | GitHub: ${profile.socials.github}
${profile.veteranStatus}

==================================================
PROFESSIONAL SUMMARY
==================================================
${profile.summaryParagraphs.join('\n\n')}

==================================================
PROFESSIONAL CERTIFICATIONS & CREDENTIALS
==================================================
${profile.certifications
  .map(
    (c) => `* ${c.name}
  Issuer: ${c.issuer} | Date: ${c.date}${c.credentialId ? ` | ID: ${c.credentialId}` : ''}${c.verifyUrl ? `\n  Verify: ${c.verifyUrl}` : ''}`
  )
  .join('\n\n')}

==================================================
TECHNICAL COMPETENCIES
==================================================
${profile.technicalCompetencies.map((comp) => `* ${comp.category}: ${comp.skills}`).join('\n')}

==================================================
PROFESSIONAL EXPERIENCE
==================================================
${experiences
  .map(
    (exp) => `
${exp.role.toUpperCase()} — ${exp.company}
${exp.period} | ${exp.location}
Overview: ${exp.overview}

Key Contributions:
${exp.highlights.map((h) => `• ${h}`).join('\n')}

Technologies: ${exp.technologies.join(', ')}
`
  )
  .join('\n--------------------------------------------------\n')}

==================================================
MILITARY SERVICE
==================================================
${profile.military.branch} — ${profile.military.role}
Location: ${profile.military.location}
${profile.military.notes}

==================================================
FORMAL EDUCATION
==================================================
* ${profile.education.degree} — ${profile.education.institution} (${profile.education.period})
  Focus: ${profile.education.focus}
`;
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(generatePlainText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadMarkdown = () => {
    const element = document.createElement('a');
    const file = new Blob([generatePlainText()], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = `Joseph_Bodden_Resume_2026.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  const handleBrowserPrint = () => {
    try {
      window.print();
    } catch (e) {
      console.warn('Browser window.print was intercepted by iframe sandbox:', e);
    }
  };

  const handleOpenStandalonePrint = () => {
    // Open a clean standalone window with printable content
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      // If popup blocked, run standard print
      window.print();
      return;
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${profile.fullName} — Résumé</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; padding: 24px; color: #0f172a; line-height: 1.4; max-width: 800px; margin: 0 auto; font-size: 11pt; }
            h1 { margin: 0 0 4px 0; font-size: 20pt; text-transform: uppercase; letter-spacing: 0.5px; }
            h2 { font-size: 11pt; text-transform: uppercase; border-bottom: 1.5px solid #0f172a; padding-bottom: 2px; margin: 16px 0 8px 0; letter-spacing: 0.5px; }
            .header-info { font-size: 9.5pt; color: #334155; margin-bottom: 12px; }
            .role-header { display: flex; justify-content: space-between; font-weight: bold; margin-bottom: 2px; font-size: 10.5pt; }
            .role-meta { font-size: 9pt; color: #475569; }
            .role-overview { font-style: italic; font-size: 9.5pt; margin: 3px 0 6px 0; color: #1e293b; }
            ul { margin: 4px 0 12px 18px; padding: 0; font-size: 9.5pt; }
            li { margin-bottom: 3px; }
            .footer-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px; border-top: 1px solid #cbd5e1; padding-top: 8px; font-size: 9.5pt; }
            @media print { body { padding: 0; } }
          </style>
        </head>
        <body>
          <h1>${profile.fullName}</h1>
          <div class="header-info">
            <strong>${profile.title}</strong> · ${profile.specializations.join(' · ')}<br/>
            ${profile.location} | ${profile.email} | linkedin.com/in/joe-bodden
          </div>

          <h2>Professional Profile</h2>
          <p style="font-size: 9.5pt; margin: 0 0 12px 0;">${profile.bio}</p>

          <h2>Core Competencies</h2>
          <div style="font-size: 9.5pt; margin-bottom: 12px;">
            <p style="margin: 0 0 3px 0;"><strong>Querying &amp; Languages:</strong> ${profile.technicalToolkit.languages.join(', ')}</p>
            <p style="margin: 0 0 3px 0;"><strong>Data Engineering &amp; Databases:</strong> ${profile.technicalToolkit.databases.join(', ')} · ETL Pipelines · Schema Synchronization · Query Optimization</p>
            <p style="margin: 0 0 3px 0;"><strong>Analytics &amp; Logging:</strong> ${profile.technicalToolkit.analytics.join(', ')} · Log Diagnostics · SSRS</p>
            <p style="margin: 0 0 3px 0;"><strong>DevOps &amp; Tools:</strong> ${profile.technicalToolkit.tools.join(', ')}</p>
          </div>

          <h2>Professional Experience</h2>
          ${experiences
            .map(
              (exp) => `
            <div style="margin-bottom: 14px;">
              <div class="role-header">
                <span>${exp.role} — ${exp.company}</span>
                <span class="role-meta">${exp.period} | ${exp.location}</span>
              </div>
              <div class="role-overview">${exp.overview}</div>
              <ul>
                ${exp.highlights.slice(0, 4).map((h) => `<li>${h}</li>`).join('')}
              </ul>
            </div>
          `
            )
            .join('')}

          <div class="footer-grid">
            <div>
              <strong>MILITARY SERVICE</strong><br/>
              ${profile.military.branch} — ${profile.military.role}<br/>
              <span style="font-size: 8.5pt; color: #475569;">DD-214 available upon request</span>
            </div>
            <div>
              <strong>EDUCATION &amp; CERTIFICATIONS</strong><br/>
              ${profile.education.degree} (${profile.education.period})<br/>
              <span style="font-size: 8.5pt; color: #475569;">PCEP Python · Salesforce Data 360 Trailhead Explorer</span>
            </div>
          </div>

          <script>
            window.onload = function() {
              window.print();
            };
          </script>
        </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="print-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Modal Top Control Bar */}
        <div className="bg-slate-950/90 px-4 sm:px-6 py-4 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
              <Printer className="w-3.5 h-3.5" />
              <span>RECRUITER PACKET &amp; EXPORT HUB</span>
            </div>
            <h3 id="print-modal-title" className="text-lg font-bold text-white tracking-tight">
              Print or Export Résumé
            </h3>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleBrowserPrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-blue-400"
              title="Trigger browser print dialog"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print (PDF)</span>
            </button>

            <button
              onClick={handleOpenStandalonePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              title="Open full-page print view in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
              <span>Open in New Window</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              title="Copy plain text for ATS applications"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-300" />
                  <span>Copy ATS Text</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              title="Download markdown version"
            >
              {downloaded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Downloaded</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-slate-300" />
                  <span>Download .md</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              aria-label="Close export dialog"
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800/80 rounded-lg ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Helpful Info Notice */}
        <div className="bg-blue-950/40 border-b border-blue-900/40 px-4 sm:px-6 py-2 flex items-center justify-between text-xs text-blue-200 shrink-0">
          <div className="flex items-center gap-2">
            <Info className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>
              If your browser sandbox blocks the print prompt inside preview, click <strong>"Open in New Window"</strong> or <strong>"Copy ATS Text"</strong>.
            </span>
          </div>
        </div>

        {/* Scrollable Live Document Preview (Simulating Clean Letter Paper) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-950 flex justify-center">
          <div className="w-full max-w-[800px] bg-white text-slate-900 p-8 sm:p-12 shadow-2xl rounded-sm border border-slate-200 text-[11pt] leading-relaxed">
            
            {/* Header */}
            <div className="border-b-2 border-slate-900 pb-3 mb-4">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 uppercase">
                {profile.fullName}
              </h1>
              <p className="text-xs font-bold text-slate-700 tracking-wide mt-0.5">
                {profile.title} · {profile.specializations.join(' · ')}
              </p>
              <p className="text-[10px] text-slate-600 mt-1 font-mono">
                {profile.location} | {profile.email} | linkedin.com/in/joe-bodden
              </p>
            </div>

            {/* Professional Summary */}
            <div className="mb-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
                Professional Profile
              </h2>
              <p className="text-[10.5px] leading-relaxed text-slate-800">
                {profile.bio}
              </p>
            </div>

            {/* Core Competencies */}
            <div className="mb-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
                Core Competencies &amp; Technical Skills
              </h2>
              <div className="text-[10px] space-y-1 text-slate-800">
                <p>
                  <strong className="font-bold">Languages &amp; Querying:</strong> T-SQL (SQL Server), PostgreSQL, SOQL, Python, Shell/Bash, HTML/CSS, JavaScript.
                </p>
                <p>
                  <strong className="font-bold">Data Engineering &amp; ETL:</strong> Pipeline Orchestration, Schema Synchronization, Performance Tuning, Indexing Strategies, Data Validation.
                </p>
                <p>
                  <strong className="font-bold">CRM &amp; Cloud Systems:</strong> Salesforce Data 360 SQL Exploration, SOQL Querying, Flow Automation, Docker, Heroku, Git.
                </p>
                <p>
                  <strong className="font-bold">Analytics &amp; Logging:</strong> SSRS, Power BI, Tableau, Splunk Telemetry, Anomaly Detection, Financial &amp; Operational KPI Modeling.
                </p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="mb-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-2">
                Professional Experience
              </h2>

              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.id} className="space-y-1">
                    <div className="flex justify-between items-baseline text-[11px]">
                      <span className="font-bold text-slate-900">
                        {exp.role} — <span className="font-semibold text-slate-800">{exp.company}</span>
                      </span>
                      <span className="font-mono text-[10px] text-slate-600">
                        {exp.period} | {exp.location}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-700 italic">
                      {exp.overview}
                    </p>
                    <ul className="list-disc pl-4 text-[10px] space-y-0.5 text-slate-800 leading-normal">
                      {exp.highlights.slice(0, 4).map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Military, Education & Certifications Footer */}
            <div className="pt-3 border-t border-slate-300 text-[10px] grid grid-cols-2 gap-4 text-slate-800">
              <div>
                <h3 className="font-bold uppercase tracking-wider text-slate-900 mb-0.5">
                  Military Service
                </h3>
                <p className="font-semibold">United States Navy — Hospital Corpsman (Veteran)</p>
                <p className="text-slate-600 text-[9.5px]">DD-214 available upon request · Calm under high operational pressure.</p>
              </div>
              <div>
                <h3 className="font-bold uppercase tracking-wider text-slate-900 mb-0.5">
                  Education &amp; Credentials
                </h3>
                <p className="font-semibold">AS, Business Administration &amp; Management</p>
                <p className="text-slate-600 text-[9.5px]">PCEP Python Programmer · Salesforce Data 360 Trailhead Explorer</p>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-slate-950 px-4 sm:px-6 py-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span>Formatted for Letter / A4 portrait print</span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded transition-colors"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
