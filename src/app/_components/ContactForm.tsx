"use client";

import { useState } from "react";

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 rtl:rotate-180"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  ltr,
  className = "",
}: {
  label: string;
  placeholder?: string;
  type?: string;
  ltr?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block font-arabic text-sm font-semibold text-ink-soft">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        dir={ltr ? "ltr" : undefined}
        className="w-full rounded-2xl border border-emerald/15 bg-cream-soft px-4 py-3 font-arabic text-ink outline-none transition focus:border-emerald focus:ring-4 focus:ring-emerald/10"
      />
    </div>
  );
}

function SelectField({
  label,
  options,
  className = "",
}: {
  label: string;
  options: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block font-arabic text-sm font-semibold text-ink-soft">
        {label}
      </label>
      <select
        className="w-full appearance-none rounded-2xl border border-emerald/15 bg-cream-soft px-4 py-3 font-arabic text-ink outline-none transition focus:border-emerald focus:ring-4 focus:ring-emerald/10"
        defaultValue=""
      >
        <option value="" disabled>
          اختر المرحلة
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="space-y-5 p-10 lg:col-span-7"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 4000);
      }}
    >
      <h3 className="font-arabic text-2xl font-bold text-emerald-deep">
        احجز جولة أو استفسار
      </h3>
      <p className="font-arabic text-ink-soft">
        املأ النموذج وسنتواصل معكم خلال يوم عمل واحد.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="اسم ولي الأمر" placeholder="مثال: أحمد محمد" />
        <Field label="رقم الهاتف" type="tel" placeholder="0771 000 0000" ltr />
        <Field
          label="اسم الطفل"
          placeholder="مثال: نور"
          className="md:col-span-2"
        />
        <SelectField
          label="المرحلة المطلوبة"
          options={["الحضانة", "التحضيري", "الروضة", "التمهيدي", "الابتدائية"]}
          className="md:col-span-2"
        />
        <div className="md:col-span-2">
          <label className="mb-2 block font-arabic text-sm font-semibold text-ink-soft">
            ملاحظة (اختياري)
          </label>
          <textarea
            rows={4}
            placeholder="أخبرنا بأي تفاصيل تودّون مشاركتها معنا"
            className="w-full rounded-2xl border border-emerald/15 bg-cream-soft px-4 py-3 font-arabic text-ink outline-none transition focus:border-emerald focus:ring-4 focus:ring-emerald/10"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <p className="text-xs text-ink-mute">
          {sent
            ? "✦ شكرًا لكم — سنتواصل معكم قريبًا."
            : "بإرسالك هذا النموذج توافق على أن نتواصل معك بشأن استفسارك."}
        </p>
        <button type="submit" className="btn-primary">
          <span>{sent ? "تم الإرسال" : "أرسل الطلب"}</span>
          <Arrow />
        </button>
      </div>
    </form>
  );
}
