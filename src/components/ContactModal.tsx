import React, { useState } from 'react';
import { X, Mail, Linkedin, Check, Send, Copy } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { profile } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Portfolio Inquiry from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        window.location.href = `mailto:${profile.email}?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
        setSubmitted(true);
      }
    } catch (err) {
      window.location.href = `mailto:${profile.email}?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/90 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Header & Close Button */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-sky-400 font-semibold">DIRECT INQUIRY</span>
            <h3 id="contact-modal-title" className="text-xl font-bold text-white tracking-tight">
              Connect with Joseph Bodden Jr.
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Available for Data Engineering, Integration Architecture, and Advisory roles.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close contact dialog"
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-750 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Contact Direct Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3.5 bg-slate-800/80 border border-slate-700 rounded-xl space-y-1">
            <span className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5 font-medium">
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>Direct Email</span>
            </span>
            <div className="flex items-center justify-between">
              <a
                href={`mailto:${profile.email}`}
                className="text-xs font-semibold text-slate-100 hover:text-sky-300 truncate"
              >
                {profile.email}
              </a>
              <button
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                aria-label="Copy email address"
                className="p-1 text-slate-400 hover:text-white cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="p-3.5 bg-slate-800/80 border border-slate-700 rounded-xl space-y-1">
            <span className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5 font-medium">
              <Linkedin className="w-3.5 h-3.5 text-sky-400" />
              <span>LinkedIn Message</span>
            </span>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-sky-400 hover:text-sky-300 block truncate"
            >
              linkedin.com/in/joe-bodden
            </a>
          </div>
        </div>

        {/* Contact Form */}
        {submitted ? (
          <div className="p-6 bg-emerald-950/40 border border-emerald-800/80 rounded-xl text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">Message Transmitted!</h4>
            <p className="text-xs sm:text-sm text-slate-200">
              Thank you for reaching out. Joseph has received your message and will follow up promptly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', phone: '', message: '' });
                onClose();
              }}
              className="mt-2 px-4 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              Close Dialog
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-200">
                Your Name <span className="text-rose-400">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Doe or Organization"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-200">
                  Email Address <span className="text-rose-400">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@company.com"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-200">
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 000-0000"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-200">
                Inquiry / Role Details <span className="text-rose-400">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share project scope, role opportunity, or question..."
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-2 text-xs font-medium text-slate-400 hover:text-white cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors disabled:opacity-50 cursor-pointer shadow-sm"
              >
                {submitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
