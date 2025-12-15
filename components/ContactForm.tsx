'use client';

import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  phone?: string;
  business?: string;
  message: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  business: '',
  message: ''
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string>('');

  const handleChange = (key: keyof FormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus('submitting');
    setError('');

    const isValidEmail = /\S+@\S+\.\S+/.test(form.email);
    if (!form.name || !isValidEmail || !form.message) {
      setError('Please provide your name, a valid email, and a short message.');
      setStatus('idle');
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      setStatus('success');
      setForm(initialState);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setError('Something went wrong. Please try again or reach out via email.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-4">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-white">Tell us about your goals</h2>
        <p className="text-sm text-silver/80">
          We respond within two business days. Sharing context helps us prepare before we meet.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1 text-sm">
          <span className="text-silver/80">Name *</span>
          <input
            type="text"
            value={form.name}
            onChange={handleChange('name')}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-indigo focus:outline-none"
            required
          />
        </label>
        <label className="space-y-1 text-sm">
          <span className="text-silver/80">Email *</span>
          <input
            type="email"
            value={form.email}
            onChange={handleChange('email')}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-indigo focus:outline-none"
            required
          />
        </label>
        <label className="space-y-1 text-sm">
          <span className="text-silver/80">Phone (optional)</span>
          <input
            type="tel"
            value={form.phone}
            onChange={handleChange('phone')}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-indigo focus:outline-none"
          />
        </label>
        <label className="space-y-1 text-sm">
          <span className="text-silver/80">Business name (optional)</span>
          <input
            type="text"
            value={form.business}
            onChange={handleChange('business')}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-indigo focus:outline-none"
          />
        </label>
      </div>
      <label className="space-y-1 text-sm">
        <span className="text-silver/80">How can we help? *</span>
        <textarea
          value={form.message}
          onChange={handleChange('message')}
          rows={4}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-indigo focus:outline-none"
          required
        />
      </label>
      {error && <p className="text-sm text-red-300">{error}</p>}
      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="btn-primary"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </button>
        {status === 'success' && <span className="text-sm text-silver/80">Thanks for reaching out. We will reply soon.</span>}
        {status === 'error' && <span className="text-sm text-red-300">{error}</span>}
      </div>
      <p className="text-xs text-silver/60">
        This form is for planning purposes. Submitting does not guarantee funding or credit outcomes. We respect your privacy
        and do not sell personal data.
      </p>
    </form>
  );
}
