'use client';

import { useMemo, useState } from 'react';

import { FunnelCta } from '@/components/funnel';

import s from './AIOs.module.css';

type RoiCalculatorProps = {
  ctaHref: string;
  ctaText: string;
};

const formatCurrency = (n: number) => {
  if (n >= 1_000_000) return '$' + (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1000) return '$' + Math.round(n).toLocaleString();
  return '$' + Math.round(n);
};

export function RoiCalculator({ ctaHref, ctaText }: RoiCalculatorProps) {
  const [revenue, setRevenue] = useState(50000);
  const [adminHours, setAdminHours] = useState(15);

  const calc = useMemo(() => {
    const hoursPerWeek = 40;
    const opsHireMonthly = 6000;
    const setupFee = 5000;
    const monthlyRunning = 150;

    const monthlyHours = hoursPerWeek * 4.33;
    const rate = revenue / monthlyHours;
    const monthlyAdmin = adminHours * 4.33 * rate;
    const annualAdmin = monthlyAdmin * 12;
    const annualOps = opsHireMonthly * 12;
    const annualClaw = setupFee + monthlyRunning * 12;
    const roi = annualAdmin > 0 ? annualAdmin / annualClaw : 0;

    const monthlySavingsCalc = monthlyAdmin - monthlyRunning;
    const paybackDays =
      monthlySavingsCalc > 0
        ? Math.ceil((setupFee / monthlySavingsCalc) * 30)
        : 0;

    const maxVal = Math.max(annualAdmin, annualOps, annualClaw, 1);
    const selfPct = Math.min((annualAdmin / maxVal) * 100, 100);
    const hirePct = Math.min((annualOps / maxVal) * 100, 100);
    const clawPct = Math.max((annualClaw / maxVal) * 100, 5);

    const paybackLabel =
      monthlySavingsCalc <= 0 || paybackDays <= 0
        ? '--'
        : paybackDays + ' days';
    const paybackSub =
      monthlySavingsCalc <= 0 || paybackDays <= 0
        ? 'Enter your numbers above.'
        : paybackDays <= 30
          ? 'Pays for itself in under a month.'
          : paybackDays <= 60
            ? 'Pays for itself in under 2 months.'
            : paybackDays <= 90
              ? 'Pays for itself in under 3 months.'
              : `Pays for itself in ${Math.ceil(paybackDays / 30)} months.`;

    return {
      annualAdmin,
      annualClaw,
      annualOps,
      clawPct,
      hirePct,
      monthlyAdmin,
      paybackLabel,
      paybackSub,
      rate,
      roi,
      selfPct,
    };
  }, [revenue, adminHours]);

  const revMin = 25000;
  const revMax = 1000000;
  const revPct = ((revenue - revMin) / (revMax - revMin)) * 100;
  const revLabel = revenue >= 1000000 ? '$1M' : `$${revenue / 1000}K`;
  const revBg = `linear-gradient(to right, #f97316 0%, #f97316 ${revPct}%, #27272a ${revPct}%, #27272a 100%)`;
  const hrMin = 1;
  const hrMax = 40;
  const hrPct = ((adminHours - hrMin) / (hrMax - hrMin)) * 100;
  const hrBg = `linear-gradient(to right, #f97316 0%, #f97316 ${hrPct}%, #27272a ${hrPct}%, #27272a 100%)`;

  return (
    <section className={s.calcSection}>
      <div className={s.calcWrap}>
        <h2 className={s.calcH2}>How much is admin costing you?</h2>
        <p className={s.calcSubtitle}>
          Plug in your numbers. See what you&apos;d save. Takes 30 seconds.
        </p>

        <div className={s.calculator}>
          <div className={s.calcInputs}>
            <div className={s.calcRow}>
              <label htmlFor="calc-revenue" className={s.calcLabelText}>
                Monthly revenue
              </label>
              <div className={s.sliderWithValue}>
                <input
                  id="calc-revenue"
                  type="range"
                  min={revMin}
                  max={revMax}
                  step={25000}
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className={s.calcSlider}
                  style={{ background: revBg }}
                />
                <span className={s.calcLabelValue}>{revLabel}</span>
              </div>
            </div>

            <div className={s.calcRow}>
              <label htmlFor="calc-admin-hours" className={s.calcLabelText}>
                Admin hours per week
              </label>
              <div className={s.sliderWithValue}>
                <input
                  id="calc-admin-hours"
                  type="range"
                  min={hrMin}
                  max={hrMax}
                  step={1}
                  value={adminHours}
                  onChange={(e) => setAdminHours(Number(e.target.value))}
                  className={s.calcSlider}
                  style={{ background: hrBg }}
                />
                <span className={s.calcLabelValue}>{adminHours} hrs</span>
              </div>
            </div>
          </div>

          <div className={s.calcResults}>
            <div className={s.resultsTitle}>Your numbers</div>
            <div className={s.resultRows}>
              <div className={s.resultRow}>
                <span className={s.resultRowLabel}>Effective hourly rate</span>
                <span className={`${s.resultRowVal} ${s.accentText}`}>
                  {formatCurrency(calc.rate)}/hr
                </span>
              </div>
              <div className={s.resultRow}>
                <span className={s.resultRowLabel}>Monthly cost of admin</span>
                <span className={`${s.resultRowVal} ${s.greenText}`}>
                  {formatCurrency(calc.monthlyAdmin)}/mo
                </span>
              </div>
              <div className={s.resultRow}>
                <span className={s.resultRowLabel}>Annual cost of admin</span>
                <span className={`${s.resultRowVal} ${s.blueText}`}>
                  {formatCurrency(calc.annualAdmin)}/yr
                </span>
              </div>
            </div>

            <div className={s.barChart}>
              <div className={s.barSectionTitle}>Annual cost comparison</div>
              <ResultBar
                label="Doing it yourself"
                value={`${formatCurrency(calc.annualAdmin)}/yr`}
                pct={calc.selfPct}
                fillClassName={s.redBar}
                amountClassName={s.redText}
              />
              <ResultBar
                label="Full-time ops hire"
                value={`${formatCurrency(calc.annualOps)}/yr`}
                pct={calc.hirePct}
                fillClassName={s.accentBar}
                amountClassName={s.accentText}
              />
              <ResultBar
                label="The Operator Launchpad (year 1)"
                value={`${formatCurrency(calc.annualClaw)}/yr`}
                pct={calc.clawPct}
                fillClassName={s.greenBar}
                amountClassName={s.greenText}
              />
            </div>

            <div className={s.resultHighlights}>
              <div className={s.resultPayback}>
                <div className={s.resultPaybackVal}>{calc.paybackLabel}</div>
                <div className={s.resultPaybackLabel}>Payback period</div>
                <div className={s.resultPaybackSub}>{calc.paybackSub}</div>
              </div>
              <div className={s.resultBig}>
                <div className={s.resultBigVal}>{calc.roi.toFixed(1)}x</div>
                <div className={s.resultBigLabel}>First-year ROI</div>
              </div>
            </div>

            <div className={s.ctaCenterSm}>
              <FunnelCta href={ctaHref} className={s.ctaBtnSmall}>
                {ctaText} &rarr;
              </FunnelCta>
            </div>
          </div>

          <div className={s.calcNote}>
            <span>
              Note: This only measures admin time costs. It doesn&apos;t include
              the extra revenue from redirecting freed hours into revenue
              generating activities. The true ROI is significantly higher.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

type ResultBarProps = {
  label: string;
  value: string;
  pct: number;
  fillClassName?: string;
  amountClassName?: string;
};

function ResultBar({
  label,
  value,
  pct,
  fillClassName,
  amountClassName,
}: ResultBarProps) {
  return (
    <div className={s.resultBar}>
      <div className={s.resultBarLabel}>{label}</div>
      <div className={s.resultBarRow}>
        <div className={s.resultBarTrack}>
          <div
            className={`${s.resultBarFill} ${fillClassName}`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className={`${s.resultBarAmount} ${amountClassName}`}>{value}</div>
      </div>
    </div>
  );
}
