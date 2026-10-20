import { useState } from 'react';
import { Check, Send, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 800);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold">Message sent!</h3>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          Thanks for reaching out, {form.name || 'there'}. We'll get back to you shortly.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
          className="mt-6 text-sm font-semibold text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputCls = 'flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="space-y-5">
        <label className="block space-y-1.5">
          <span className="text-sm font-medium text-foreground">Full name <span className="text-destructive">*</span></span>
          <input required value={form.name} onChange={(e) => update('name', e.target.value)} className={inputCls} placeholder="Jane Doe" />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm font-medium text-foreground">Email <span className="text-destructive">*</span></span>
          <input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className={inputCls} placeholder="jane@company.com" />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm font-medium text-foreground">Subject</span>
          <input value={form.subject} onChange={(e) => update('subject', e.target.value)} className={inputCls} placeholder="How can we help?" />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm font-medium text-foreground">Message <span className="text-destructive">*</span></span>
          <textarea required value={form.message} onChange={(e) => update('message', e.target.value)} rows={6} className={inputCls} placeholder="Write your message..." />
        </label>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 disabled:opacity-70"
      >
        {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : <>Send message <Send className="h-4 w-4" /></>}
      </button>
    </form>
  );
}
