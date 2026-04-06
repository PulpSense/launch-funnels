'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

/* ── Types ── */

export type FormStep = ContactStep | QualifyStep | EmbedStep;

type ContactStep = {
  type: 'contact';
  fields: ContactField[];
};

type ContactField = {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
} & (
  | { inputType: 'text' | 'email' | 'tel' }
  | { inputType: 'phone' }
);

type QualifyStep = {
  type: 'qualify';
  fields: QualifyField[];
};

type QualifyField = {
  name: string;
  label: string;
  required?: boolean;
} & (
  | { inputType: 'select'; options: string[] }
  | { inputType: 'multi-select'; options: string[] }
);

type EmbedStep = {
  type: 'embed';
  html: string;
};

type QualificationRule = {
  field: string;
  disqualifyValues: string[];
};

export type MultiStepFormConfig = {
  steps: FormStep[];
  /** Fires after step 1 (contact info) */
  webhookUrl?: string;
  /** Fires after step 2 (full form complete) */
  webhookUrlComplete?: string;
  qualificationRules?: QualificationRule[];
  qualifiedRedirect: string;
  unqualifiedRedirect: string;
  onStepComplete?: (step: number, data: Record<string, string | string[]>) => void;
};

/* ── Phone: countries + formatting ── */

import { COUNTRIES } from './phoneCountries';
import type { Country } from './phoneCountries';

const DEFAULT_COUNTRY = COUNTRIES[0]!; // US

function stripToDigits(raw: string, maxLen: number): string {
  return raw.replace(/\D/g, '').slice(0, maxLen);
}

/** Format US/CA numbers as (XXX) XXX-XXXX, others just group in threes */
function formatPhone(digits: string, country: Country): string {
  if (!digits) return '';
  if (country.code === '+1' && country.maxDigits === 10) {
    if (digits.length <= 3) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  return digits.replace(/(\d{3})(?=\d)/g, '$1 ').trim();
}

function isValidPhone(raw: string, country: Country): boolean {
  const digits = raw.replace(/\D/g, '');
  return digits.length >= country.minDigits && digits.length <= country.maxDigits;
}

/* ── Country picker (custom dropdown: flag only when closed, full name when open) ── */

function CountryPicker({ value, onChange, hasError }: {
  value: Country;
  onChange: (c: Country) => void;
  hasError: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handle = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [open]);

  // Focus search when opened
  useEffect(() => {
    if (open) searchRef.current?.focus();
  }, [open]);

  const filtered = search
    ? COUNTRIES.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.code.includes(search)
      )
    : COUNTRIES;

  return (
    <div className="msf-country-picker" ref={containerRef}>
      <button
        type="button"
        className={`msf-country-toggle ${hasError ? 'msf-input-error' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Select country"
      >
        <span className="msf-country-flag">{value.flag}</span>
        <span className="msf-country-dial">{value.code}</span>
        <span className="msf-country-caret">▾</span>
      </button>
      {open && (
        <div className="msf-country-dropdown">
          <input
            ref={searchRef}
            type="text"
            className="msf-country-search"
            placeholder="Search…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="msf-country-list">
            {filtered.map((c, i) => (
              <button
                key={`${c.code}-${c.name}-${i}`}
                type="button"
                className={`msf-country-option ${c.name === value.name && c.code === value.code ? 'msf-country-option-active' : ''}`}
                onClick={() => {
                  onChange(c);
                  setOpen(false);
                  setSearch('');
                }}
              >
                <span className="msf-country-flag">{c.flag}</span>
                <span className="msf-country-name">{c.name}</span>
                <span className="msf-country-code">{c.code}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Component ── */

export function MultiStepForm({ config, className }: { config: MultiStepFormConfig; className?: string }) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string | string[]>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [isQualified, setIsQualified] = useState(true);
  const [phoneCountry, setPhoneCountry] = useState<Country>(DEFAULT_COUNTRY);

  const step = config.steps[currentStep]!;
  const totalSteps = config.steps.length;

  const updateField = useCallback((name: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }, []);

  const handlePhoneChange = useCallback((name: string, raw: string) => {
    const digits = stripToDigits(raw, phoneCountry.maxDigits);
    const formatted = formatPhone(digits, phoneCountry);
    updateField(name, formatted);
  }, [updateField, phoneCountry]);

  const handleCountryChange = useCallback((name: string, country: Country) => {
    setPhoneCountry(country);
    const currentVal = (formData[name] as string) ?? '';
    const digits = stripToDigits(currentVal, country.maxDigits);
    updateField(name, formatPhone(digits, country));
  }, [formData, updateField]);

  const toggleMultiSelect = useCallback((name: string, option: string) => {
    setFormData((prev) => {
      const current = (prev[name] as string[] | undefined) ?? [];
      const next = current.includes(option)
        ? current.filter((v) => v !== option)
        : [...current, option];
      return { ...prev, [name]: next };
    });
    setErrors((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }, []);

  const validate = useCallback((): boolean => {
    const errs: Record<string, string> = {};
    if (step.type === 'contact') {
      for (const field of step.fields) {
        const val = (formData[field.name] as string) ?? '';
        if (field.required && !val.trim()) {
          errs[field.name] = 'Required';
        } else if (field.inputType === 'email' && val && !/^[a-zA-Z0-9._%+-]+@(?!(?:gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|live\.com|msn\.com|icloud\.com|me\.com|mac\.com|aol\.com|proton\.me|protonmail\.com|pm\.me|gmx\.com|mail\.com|zoho\.com|yandex\.com)$)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val)) {
          errs[field.name] = 'Please use your business email';
        } else if (field.inputType === 'phone' && val && !isValidPhone(val, phoneCountry)) {
          errs[field.name] = phoneCountry.minDigits === phoneCountry.maxDigits
            ? `Enter a valid ${phoneCountry.minDigits}-digit phone number`
            : `Enter a valid phone number (${phoneCountry.minDigits}–${phoneCountry.maxDigits} digits)`;
        }
      }
    }
    if (step.type === 'qualify') {
      for (const field of step.fields) {
        const val = formData[field.name];
        if (field.required) {
          if (field.inputType === 'multi-select') {
            if (!val || (val as string[]).length === 0) errs[field.name] = 'Select at least one';
          } else {
            if (!val || !(val as string).trim()) errs[field.name] = 'Required';
          }
        }
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }, [step, formData, phoneCountry]);

  const checkQualification = useCallback((): boolean => {
    if (!config.qualificationRules) return true;
    for (const rule of config.qualificationRules) {
      const val = formData[rule.field];
      if (typeof val === 'string' && rule.disqualifyValues.includes(val)) return false;
      if (Array.isArray(val) && val.some((v) => rule.disqualifyValues.includes(v))) return false;
    }
    return true;
  }, [config.qualificationRules, formData]);

  const sendWebhook = useCallback(async (url: string | undefined, event: string) => {
    if (!url) return;
    // Enrich phone with country code for the webhook payload
    const phoneVal = formData.phone as string | undefined;
    const enriched = {
      ...formData,
      ...(phoneVal ? { phone: `${phoneCountry.code} ${phoneVal}` } : {}),
    };
    try {
      await fetch('/api/form-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          webhookUrl: url,
          event,
          data: enriched,
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch {
      // Silently fail — don't block the user
    }
  }, [formData, phoneCountry]);

  const handleNext = useCallback(async () => {
    if (!validate()) return;
    setSubmitting(true);

    // After step 1 (contact), fire partial webhook
    if (currentStep === 0) {
      await sendWebhook(config.webhookUrl, 'contact_submitted');
    }

    // After step 2 (qualify), check qualification
    if (step.type === 'qualify') {
      const qualified = checkQualification();
      setIsQualified(qualified);
    }

    config.onStepComplete?.(currentStep, formData);

    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    }
    setSubmitting(false);
  }, [validate, currentStep, step, totalSteps, sendWebhook, checkQualification, config, formData]);

  const handleBack = useCallback(() => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  }, [currentStep]);

  // Refs so the postMessage listener always sees current values
  const formDataRef = useRef(formData);
  const isQualifiedRef = useRef(isQualified);
  useEffect(() => { formDataRef.current = formData; }, [formData]);
  useEffect(() => { isQualifiedRef.current = isQualified; }, [isQualified]);

  // Listen for Cal.com booking confirmation on the embed step
  useEffect(() => {
    if (step.type !== 'embed') return;

    const handleMessage = async (event: MessageEvent) => {
      // Cal.com embed posts messages with a specific shape
      const d = event.data;
      if (!d || typeof d !== 'object') return;

      // Cal.com v2 embed fires: { type: "CAL:bookingSuccessful", data: { ... } }
      const type = d.type ?? d.action;
      if (type !== 'CAL:bookingSuccessful' && type !== ':cal:bookingSuccessful') return;

      const booking = d.data ?? {};
      const enrichedData = {
        ...formDataRef.current,
        bookingDate: booking.date ?? booking.startTime ?? '',
        bookingTitle: booking.title ?? booking.eventTitle ?? '',
      };

      // Fire the complete webhook with booking info
      if (config.webhookUrlComplete) {
        try {
          await fetch('/api/form-submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              webhookUrl: config.webhookUrlComplete,
              event: 'booking_completed',
              data: enrichedData,
              submittedAt: new Date().toISOString(),
            }),
          });
        } catch {
          // Silently fail
        }
      }

      // Auto-redirect after booking
      if (isQualifiedRef.current) {
        router.push(config.qualifiedRedirect);
      } else {
        router.push(config.unqualifiedRedirect);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [step.type, config, router]);

  return (
    <div className={className}>
      {/* Progress bar */}
      <div className="msf-progress">
        <div
          className="msf-progress-bar"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        />
      </div>

      {/* Step content */}
      <div className="msf-body">
        {step.type === 'contact' && (
          <div className="msf-fields-grid">
            {step.fields.map((field) => (
              <div key={field.name} className="msf-field">
                <label htmlFor={field.name}>
                  {field.label}
                  {field.required && <span className="msf-required">*</span>}
                </label>
                {field.inputType === 'phone' ? (
                  <div className="msf-phone-row">
                    <CountryPicker
                      value={phoneCountry}
                      onChange={(c) => handleCountryChange(field.name, c)}
                      hasError={!!errors[field.name]}
                    />
                    <input
                      id={field.name}
                      type="tel"
                      placeholder={phoneCountry.code === '+1' ? '(555) 123-4567' : '123 456 789'}
                      value={(formData[field.name] as string) ?? ''}
                      onChange={(e) => handlePhoneChange(field.name, e.target.value)}
                      className={errors[field.name] ? 'msf-input-error' : ''}
                      autoComplete="tel"
                    />
                  </div>
                ) : (
                  <input
                    id={field.name}
                    type={field.inputType}
                    placeholder={field.placeholder}
                    value={(formData[field.name] as string) ?? ''}
                    onChange={(e) => updateField(field.name, e.target.value)}
                    className={errors[field.name] ? 'msf-input-error' : ''}
                    autoComplete={
                      field.inputType === 'email' ? 'email' :
                      field.name.includes('first') ? 'given-name' :
                      field.name.includes('last') ? 'family-name' :
                      'off'
                    }
                  />
                )}
                {errors[field.name] && <span className="msf-error">{errors[field.name]}</span>}
              </div>
            ))}
          </div>
        )}

        {step.type === 'qualify' && (
          <div className="msf-fields-stack">
            {step.fields.map((field) => (
              <div key={field.name} className="msf-field">
                <label htmlFor={field.name}>
                  {field.label}
                  {field.required && <span className="msf-required">*</span>}
                </label>

                {field.inputType === 'select' && (
                  <select
                    id={field.name}
                    value={(formData[field.name] as string) ?? ''}
                    onChange={(e) => updateField(field.name, e.target.value)}
                    className={errors[field.name] ? 'msf-input-error' : ''}
                  >
                    <option value="">Select one</option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                )}

                {field.inputType === 'multi-select' && (
                  <div className="msf-chips">
                    {field.options.map((opt) => {
                      const selected = ((formData[field.name] as string[] | undefined) ?? []).includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          className={`msf-chip ${selected ? 'msf-chip-selected' : ''}`}
                          onClick={() => toggleMultiSelect(field.name, opt)}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                )}

                {errors[field.name] && <span className="msf-error">{errors[field.name]}</span>}
              </div>
            ))}
          </div>
        )}

        {step.type === 'embed' && (
          <div>
            <div
              className="msf-embed"
              dangerouslySetInnerHTML={{ __html: step.html }}
            />
            <p className="msf-embed-hint">You&apos;ll be redirected after booking.</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      {step.type !== 'embed' && (
        <div className="msf-nav">
          {currentStep > 0 && (
            <button type="button" className="msf-btn msf-btn-back" onClick={handleBack}>
              ← Back
            </button>
          )}
          <button
            type="button"
            className="msf-btn msf-btn-primary"
            onClick={handleNext}
            disabled={submitting}
          >
            {submitting ? 'Submitting…' : 'Next →'}
          </button>
        </div>
      )}
    </div>
  );
}
