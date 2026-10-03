import React, { useState, useEffect, useId } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  IconMail,
  IconPhone,
  IconCopy,
  IconCheckCircle,
  IconExternalLink,
} from './Icons';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillSubject?: string;
  prefillMessage?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  prefillSubject = '',
  prefillMessage = '',
}) => {
  const { personal } = portfolioData;
  const nameFieldId = useId();
  const emailFieldId = useId();
  const scopeFieldId = useId();
  const messageFieldId = useId();

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleScope: 'Executive Virtual Assistance',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefillMessage) {
      setFormData((prev) => ({ ...prev, message: prefillMessage }));
    }
  }, [prefillMessage]);

  if (!isOpen) return null;

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const subjectText = prefillSubject || `Operations Inquiry from ${formData.name || 'Prospective Client'}`;
  const fullMessageBody = `Hi Wenelove,

Name: ${formData.name}
Email: ${formData.email}
Support Focus: ${formData.roleScope}

Message:
${formData.message}

---
Sent from your portfolio website`;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(fullMessageBody)}`;
  const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(fullMessageBody)}`;
  const whatsappUrl = `https://wa.me/639076637135?text=${encodeURIComponent(`Hi Wenelove, I am reaching out from your portfolio. Name: ${formData.name || 'Client'}. Focus: ${formData.roleScope}. Message: ${formData.message}`)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      window.location.href = mailtoUrl;
    } catch {
      // Fallback handled by screen
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(12, 35, 23, 0.65)',
        backdropFilter: 'blur(8px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderRadius: '1.75rem',
          maxWidth: '680px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--border-medium)',
          padding: '2.5rem',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Contact Dialog"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-warm-tint)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
          }}
        >
          ✕
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.75rem' }}>
          <span className="sub-caption" style={{ marginBottom: '0.4rem' }}>
            Direct Contact & Hiring
          </span>
          <h2 style={{ fontSize: '1.75rem', color: 'var(--text-heading)', marginBottom: '0.35rem' }}>
            Connect with {personal.name}
          </h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
            Available for remote full-time, part-time, or specialized L2 systems consulting contracts worldwide.
          </p>
        </div>

        {/* Quick Contact Buttons Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0.85rem',
            marginBottom: '2rem',
            paddingBottom: '1.75rem',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          {/* Email Copy */}
          <div
            style={{
              padding: '0.85rem 1rem',
              borderRadius: '12px',
              backgroundColor: 'var(--bg-warm-tint)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', overflow: 'hidden' }}>
              <IconMail size={16} style={{ color: 'var(--green-800)', flexShrink: 0 }} />
              <div style={{ fontSize: '0.82rem', color: 'var(--text-heading)', fontWeight: 600, textOverflow: 'ellipsis', overflow: 'hidden' }}>
                {personal.email}
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(personal.email, 'email')}
              title="Copy Email Address"
              style={{
                background: 'none',
                border: 'none',
                color: copiedField === 'email' ? 'var(--green-700)' : 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.2rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                flexShrink: 0,
              }}
            >
              {copiedField === 'email' ? <IconCheckCircle size={14} /> : <IconCopy size={14} />}
              <span>{copiedField === 'email' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Phone Copy */}
          <div
            style={{
              padding: '0.85rem 1rem',
              borderRadius: '12px',
              backgroundColor: 'var(--bg-warm-tint)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
              <IconPhone size={16} style={{ color: 'var(--green-800)', flexShrink: 0 }} />
              <div style={{ fontSize: '0.82rem', color: 'var(--text-heading)', fontWeight: 600 }}>
                {personal.phoneFormatted}
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(personal.phone, 'phone')}
              title="Copy Phone Number"
              style={{
                background: 'none',
                border: 'none',
                color: copiedField === 'phone' ? 'var(--green-700)' : 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.2rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                flexShrink: 0,
              }}
            >
              {copiedField === 'phone' ? <IconCheckCircle size={14} /> : <IconCopy size={14} />}
              <span>{copiedField === 'phone' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Form or Submitted Confirmation */}
        {submitted ? (
          <div
            style={{
              textAlign: 'center',
              padding: '2.5rem 1.5rem',
              backgroundColor: 'var(--green-50)',
              borderRadius: '1.25rem',
              border: '1px solid var(--green-border)',
            }}
          >
            <IconCheckCircle size={44} style={{ color: 'var(--green-700)', margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontSize: '1.4rem', color: 'var(--green-950)', marginBottom: '0.5rem' }}>
              Thank You, {formData.name || 'Valued Partner'}!
            </h3>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', maxWidth: '440px', margin: '0 auto 1.5rem auto' }}>
              Your inquiry has been compiled. If your email client did not automatically launch, you can send it directly
              via Gmail or WhatsApp below:
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: '0.88rem', padding: '0.65rem 1.25rem' }}
              >
                <span>Open in Gmail</span>
                <IconExternalLink size={15} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ fontSize: '0.88rem', padding: '0.65rem 1.25rem' }}
              >
                <span>Message on WhatsApp</span>
                <IconExternalLink size={15} />
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Name */}
            <div>
              <label htmlFor={nameFieldId} style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.35rem' }}>
                Your Name & Company *
              </label>
              <input
                id={nameFieldId}
                type="text"
                required
                placeholder="e.g. Sarah Jenkins (Acme Financial)"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid var(--border-medium)',
                  backgroundColor: 'var(--bg-canvas)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor={emailFieldId} style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.35rem' }}>
                Your Email Address *
              </label>
              <input
                id={emailFieldId}
                type="email"
                required
                placeholder="e.g. sjenkins@acme.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid var(--border-medium)',
                  backgroundColor: 'var(--bg-canvas)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
              />
            </div>

            {/* Scope / Role */}
            <div>
              <label htmlFor={scopeFieldId} style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.35rem' }}>
                Support Focus / Engagement Type
              </label>
              <select
                id={scopeFieldId}
                value={formData.roleScope}
                onChange={(e) => setFormData({ ...formData, roleScope: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid var(--border-medium)',
                  backgroundColor: 'var(--bg-canvas)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
              >
                <option value="Executive Virtual Assistance">Executive Virtual Assistance & Administration</option>
                <option value="L2 Banking Systems Support">L2 Banking Systems Support (CreditLens, LoanIQ)</option>
                <option value="Customer Support Specialist">Omnichannel Customer Support & Help Desk</option>
                <option value="IT Service Desk Leadership">IT Service Desk Leadership & QA Operations</option>
                <option value="Custom Project Scope">Custom Scope / General Consultation</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor={messageFieldId} style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.35rem' }}>
                Scope & Requirements *
              </label>
              <textarea
                id={messageFieldId}
                required
                rows={4}
                placeholder="Briefly describe your team's operational requirements, expected shift hours, and target start date..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid var(--border-medium)',
                  backgroundColor: 'var(--bg-canvas)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
            </div>

            {/* Submit & External Actions */}
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ flex: 1, padding: '0.85rem 1.5rem', fontSize: '0.92rem' }}
                id="contact-submit-inquiry"
              >
                <IconMail size={16} />
                <span>Send via Default Email</span>
              </button>
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.85rem 1.5rem', fontSize: '0.92rem' }}
              >
                <span>Send via Gmail</span>
                <IconExternalLink size={15} />
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
