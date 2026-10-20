import { useState } from 'react';
import { Check, Send, Loader2 } from 'lucide-react';
import { services } from '@/lib/data';

const budgets = ['Under $5,000', '$5,000 – $15,000', '$15,000 – $50,000', '$50,000+'];
const timelines = ['ASAP', '1–3 months', '3–6 months', 'Just exploring'];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold">Thank you, {form.name || 'there'}!</h3>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          Your request has been received. A BenignBit specialist will review your project and get back to you within 24 hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', phone: '', service: '', budget: '', timeline: '', message: '' }); }}
          className="mt-6 text-sm font-semibold text-primary hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required>
          <input required value={form.name} onChange={(e) => update('name', e.target.value)} className={inputCls} placeholder="Jane Doe" />
        </Field>
        <Field label="Email" required>
          <input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className={inputCls} placeholder="jane@company.com" />
        </Field>
        <Field label="Company">
          <input value={form.company} onChange={(e) => update('company', e.target.value)} className={inputCls} placeholder="Company name" />
        </Field>
        <Field label="Phone">
          <input value={form.phone} onChange={(e) => update('phone', e.target.value)} className={inputCls} placeholder="+1 555 000 0000" />
        </Field>
        <Field label="Service needed" required>
          <select required value={form.service} onChange={(e) => update('service', e.target.value)} className={inputCls}>
            <option value="">Select a service</option>
            {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
            <option value="Other">Other / Not sure</option>
          </select>
        </Field>
        <Field label="Estimated budget">
          <select value={form.budget} onChange={(e) => update('budget', e.target.value)} className={inputCls}>
            <option value="">Select a range</option>
            {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </Field>
        <Field label="Timeline">
          <select value={form.timeline} onChange={(e) => update('timeline', e.target.value)} className={inputCls}>
            <option value="">Select a timeline</option>
            {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Project details" required>
            <textarea required value={form.message} onChange={(e) => update('message', e.target.value)} rows={5} className={inputCls} placeholder="Tell us about your goals, scope and any specifics we should know." />
          </Field>
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 disabled:opacity-70"
      >
        {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : <>Get my free quote <Send className="h-4 w-4" /></>}
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">No spam, no obligation. We reply within 24 hours.</p>
    </form>
  );
}

const inputCls =
  'flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-medium text-foreground">{label} {required && <span className="text-destructive">*</span>}</span>
      {children}
    </label>
  );
}
