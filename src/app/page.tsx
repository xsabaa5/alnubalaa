import type { ReactNode, SVGProps } from "react";
import Image from "next/image";
import ContactForm from "./_components/ContactForm";

/* ─────────────────────────────────────────────────────────────
   Inline SVG brand & decorative art (no external assets needed)
   ───────────────────────────────────────────────────────────── */

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      role="img"
      aria-label="مؤسسة النبلاء الاهلية"
    >
      <defs>
        <linearGradient id="bm-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2f7a60" />
          <stop offset="100%" stopColor="#0e3b2c" />
        </linearGradient>
        <linearGradient id="bm-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8d6a8" />
          <stop offset="100%" stopColor="#a78538" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill="url(#bm-g)" />
      <circle
        cx="40"
        cy="40"
        r="34"
        fill="none"
        stroke="url(#bm-gold)"
        strokeWidth="0.6"
      />
      {/* open book */}
      <path
        d="M20 48 C 28 42, 36 42, 40 46 C 44 42, 52 42, 60 48 L 60 56 C 52 50, 44 50, 40 54 C 36 50, 28 50, 20 56 Z"
        fill="#fbf8f2"
        opacity="0.96"
      />
      <path d="M40 46 L 40 54" stroke="#0e3b2c" strokeWidth="0.6" />
      {/* leaves growing from book */}
      <path
        d="M40 46 C 42 38, 48 32, 56 30 C 54 38, 50 44, 42 46 Z"
        fill="#e8d6a8"
      />
      <path
        d="M40 46 C 38 40, 34 36, 28 35 C 30 41, 34 45, 40 46 Z"
        fill="#c9a961"
      />
      <circle cx="40" cy="46" r="1.2" fill="#0e3b2c" />
    </svg>
  );
}

function Leaf({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden>
      <path
        d="M10 80 C 20 30, 60 10, 90 20 C 80 60, 50 90, 10 80 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M14 78 C 30 60, 60 40, 86 26"
        fill="none"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 2 L13.6 9.4 L21 11 L13.6 12.6 L12 20 L10.4 12.6 L3 11 L10.4 9.4 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* Tiny line icons used in feature blocks */
const Icon = {
  Heart: (p: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  Compass: (p: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  ),
  Sun: (p: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  ),
  Shield: (p: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  Pencil: (p: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
    </svg>
  ),
  Leaf: (p: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M11 20A7 7 0 0 1 4 13V5h7a8 8 0 0 1 8 8v.5A6.5 6.5 0 0 1 12.5 20H11z" />
      <path d="M2 22c1-7 5-11 12-12" />
    </svg>
  ),
  Phone: (p: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Mail: (p: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  Pin: (p: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Clock: (p: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  Facebook: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    </svg>
  ),
  Arrow: (p: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  ),
  Star: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
};

/* ─────────────────────────────────────────────────────────────
   Data — lifted from the school's Facebook page
   ───────────────────────────────────────────────────────────── */

const PROGRAMS = [
  {
    ar: "الحضانة",
    en: "Nursery",
    age: "٠٫٥ – ٢ سنة",
    desc: "بيئة دافئة آمنة، رعاية تنموية متكاملة وأغانٍ تعليمية بريئة.",
    accent: "from-[#2f7a60] to-[#0e3b2c]",
    icon: Icon.Heart,
  },
  {
    ar: "التحضيري",
    en: "Preparatory",
    age: "٢ – ٣ سنوات",
    desc: "خطوة الاكتشاف الأولى — حواس، حركة، ولعب يبني الثقة.",
    accent: "from-[#3b8a6f] to-[#1f5f4a]",
    icon: Icon.Sun,
  },
  {
    ar: "الروضة",
    en: "Kindergarten",
    age: "٣ – ٤ سنوات",
    desc: "حروف، أرقام، فنون وقصص — تعلم لعِب يضحك له القلب.",
    accent: "from-[#c9a961] to-[#a78538]",
    icon: Icon.Leaf,
  },
  {
    ar: "التمهيدي",
    en: "Pre-school",
    age: "٤ – ٥ سنوات",
    desc: "تأسيس متين بالعربية والإنجليزية والرياضيات قبل الابتدائية.",
    accent: "from-[#3b8a6f] to-[#0e3b2c]",
    icon: Icon.Pencil,
  },
  {
    ar: "الابتدائية",
    en: "Primary",
    age: "٦ – ١٢ سنة",
    desc: "منهج نموذجي يصقل العقل والشخصية ويوقد شغف المعرفة.",
    accent: "from-[#1f5f4a] to-[#0e3b2c]",
    icon: Icon.Compass,
  },
];

const FEATURES = [
  {
    icon: Icon.Shield,
    title: "بيئة آمنة ومراقَبة",
    en: "Safe & Supervised",
    body: "مرافق حديثة، فِرَق مدرّبة، ومتابعة يومية لكل طفل بحب وصبر.",
  },
  {
    icon: Icon.Sun,
    title: "تعلّم باللعب",
    en: "Play-Based Learning",
    body: "أنشطة فنية وحركية تُغذّي الفضول وتُنمّي المهارات بسلاسة.",
  },
  {
    icon: Icon.Pencil,
    title: "منهج نموذجي",
    en: "Model Curriculum",
    body: "تأسيس قوي بثلاث لغات، رياضيات، علوم، وقِيَم تربوية أصيلة.",
  },
  {
    icon: Icon.Heart,
    title: "اهتمام شخصي",
    en: "Personal Care",
    body: "صفوف بأعداد متوازنة لنرى كل طفل ونحتفي بتفرده.",
  },
];

const STATS = [
  { value: "٢١K+", label: "متابع على فيسبوك", en: "Followers" },
  { value: "٥", label: "مراحل دراسية", en: "Programs" },
  { value: "٢٤/٧", label: "تواصل مفتوح", en: "Always Open" },
  { value: "١٠٠%", label: "اهتمام بكل طفل", en: "Care" },
];

/* Real photos sourced from alnubala.school.blog — saved in /public/images.
   Visually distinct mix: playground, school trip, class portrait,
   amusement park, outdoor activity, kindergarten. */
const GALLERY: { src: string; label: string }[] = [
  { src: "/images/activity-1.jpg", label: "رحلة جماعية" },
  { src: "/images/kindergarten-1.jpg", label: "لحظات اللعب" },
  { src: "/images/kindergarten-2.jpg", label: "حضانة المرح" },
  { src: "/images/activity-2.jpg", label: "المدينة الترفيهية" },
  { src: "/images/trip-2.jpg", label: "رحلة السندباد" },
  { src: "/images/grade-3.jpg", label: "صفوفنا" },
];

/* ─────────────────────────────────────────────────────────────
   Page
   ───────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative w-full overflow-hidden">
        <Hero />
        <Programs />
        <About />
        <Features />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

/* ───── Navigation ───── */

function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="absolute inset-0 -z-10 bg-cream/70 backdrop-blur-xl border-b border-emerald/10" />
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <a href="#" className="flex items-center gap-3">
          <BrandMark className="h-11 w-11" />
          <span className="flex flex-col leading-tight">
            <span className="font-arabic text-base font-bold text-emerald-deep">
              مؤسسة النبلاء الاهلية
            </span>
            <span className="font-serif text-[11px] tracking-[0.22em] text-gold-deep">
              Al-Nubalaa Private School
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {[
            { href: "#programs", ar: "المراحل", en: "Programs" },
            { href: "#about", ar: "عن المدرسة", en: "About" },
            { href: "#features", ar: "لماذا نحن", en: "Why us" },
            { href: "#gallery", ar: "معرض", en: "Gallery" },
            { href: "#contact", ar: "تواصل", en: "Contact" },
          ].map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm font-semibold text-ink-soft transition-colors hover:text-emerald-deep"
              >
                {l.ar}
                <span className="absolute -bottom-2 right-0 block h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="tel:+9647719099000"
            className="hidden items-center gap-2 text-sm font-semibold text-emerald-deep md:flex"
          >
            <Icon.Phone className="h-4 w-4 text-gold-deep" />
            <span className="numeric" dir="ltr">
              0771 909 9000
            </span>
          </a>
          <a href="#contact" className="btn-primary text-sm">
            <span>سجّل طفلك</span>
            <Icon.Arrow className="h-4 w-4 rtl:rotate-180" />
          </a>
        </div>
      </nav>
    </header>
  );
}

/* ───── Hero ───── */

function Hero() {
  return (
    <section className="grain relative isolate overflow-hidden">
      {/* deep emerald → cream gradient field */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 80% 0%, rgba(201,169,97,0.18), transparent 55%)," +
              "radial-gradient(ellipse at 0% 30%, rgba(31,95,74,0.12), transparent 60%)",
          }}
        />
      </div>

      {/* floating leaves decor */}
      <Leaf
        className="animate-float absolute -top-10 left-[8%] h-40 w-40 text-emerald/15"
        style={{ ["--r" as string]: "-12deg" }}
      />
      <Leaf
        className="animate-float absolute right-[10%] top-24 h-24 w-24 text-gold/40"
        style={{ ["--r" as string]: "20deg", animationDelay: "1.2s" }}
      />
      <Leaf
        className="animate-float absolute bottom-12 left-[18%] h-28 w-28 text-emerald-soft/30"
        style={{ ["--r" as string]: "60deg", animationDelay: "2.4s" }}
      />

      <div className="mx-auto grid max-w-7xl gap-14 px-6 pt-20 pb-28 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pt-28 lg:pb-36">
        {/* Copy */}
        <div className="lg:col-span-7">
          <p className="divider-luxe mb-6">
            <Sparkle className="h-3 w-3 text-gold" />
            <span>Private School · Baghdad · Karrada</span>
            <Sparkle className="h-3 w-3 text-gold" />
          </p>

          <h1 className="font-arabic text-[clamp(2.6rem,6vw,5.2rem)] font-extrabold leading-[1.05] text-emerald-deep">
            مؤسسة النبلاء الاهلية
            <br />
            <span className="font-serif text-[clamp(1.4rem,3vw,2.4rem)] font-medium italic text-ink-soft">
              للطفولة النموذجية
            </span>
          </h1>

          <p className="mt-6 max-w-xl font-arabic text-lg leading-loose text-ink-soft md:text-xl">
            لحظات مليانة فرح، تعلّم وضحكات بريئة — مدرسةٌ تُربّي العقل، تَصْقل
            الذوق، وتفتح للطفل بابًا واسعًا نحو عالمٍ أرقى.
          </p>

          <p className="mt-3 max-w-xl font-serif text-base italic text-ink-mute">
            “Al-Nubalaa Private School”
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#programs" className="btn-primary">
              <span>اكتشف مراحلنا</span>
              <Icon.Arrow className="h-4 w-4 rtl:rotate-180" />
            </a>
            <a href="#contact" className="btn-ghost">
              <Icon.Phone className="h-4 w-4" />
              <span>احجز جولة</span>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex -space-x-2 -space-x-reverse">
              {["#1f5f4a", "#c9a961", "#3b8a6f", "#a78538"].map((c, i) => (
                <span
                  key={i}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-cream-soft text-xs font-bold text-cream-soft shadow-sm"
                  style={{ background: c }}
                >
                  {["م", "ن", "ي", "ر"][i]}
                </span>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon.Star key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="text-sm text-ink-soft">
                ثقة{" "}
                <span className="font-bold text-emerald-deep">
                  أكثر من ٢١ ألف
                </span>{" "}
                ولي أمر يتابعوننا
              </p>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-4/5 w-full max-w-md">
      {/* gold ornamental ring */}
      <div className="absolute inset-0 rounded-[2.5rem] border border-gold/40 mask-[linear-gradient(180deg,black,transparent)]" />
      {/* main card */}
      <div className="absolute inset-3 overflow-hidden rounded-4xl shadow-(--shadow-luxe)">
        {/* real photo of the school */}
        <Image
          src="/images/grade-1.jpg"
          alt="طلاب مؤسسة النبلاء الاهلية — الصف الأول"
          fill
          sizes="(min-width: 1024px) 32rem, 90vw"
          className="object-cover"
          priority
        />
        {/* warm emerald gradient overlay for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,59,44,0.05) 0%, rgba(14,59,44,0.0) 35%, rgba(14,59,44,0.55) 85%, rgba(14,59,44,0.75) 100%)",
          }}
        />

        {/* bottom caption */}
        <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-cream-soft/95 p-4 backdrop-blur-md">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <BrandMark className="h-10 w-10" />
              <div className="leading-tight">
                <p className="font-arabic text-sm font-bold text-emerald-deep">
                  منذ سنوات في خدمة أطفالكم
                </p>
                <p className="font-serif text-[11px] tracking-[0.18em] text-gold-deep">
                  Al-Nubalaa Private School
                </p>
              </div>
            </div>
            <span className="rounded-full bg-emerald/10 px-3 py-1 font-arabic text-[11px] font-bold text-emerald-deep">
              قبول مفتوح
            </span>
          </div>
        </div>
      </div>

      {/* floating mini-cards */}
      <div className="absolute -left-6 top-12 hidden -rotate-6 rounded-2xl glass p-3 shadow-(--shadow-soft) md:block">
        <div className="flex items-center gap-2">
          <Icon.Heart className="h-4 w-4 text-emerald" />
          <span className="font-arabic text-xs font-bold text-emerald-deep">
            رعاية بحب
          </span>
        </div>
      </div>
      <div className="absolute -right-4 bottom-24 hidden rotate-6 rounded-2xl glass p-3 shadow-(--shadow-soft) md:block">
        <div className="flex items-center gap-2">
          <Icon.Star className="h-4 w-4 text-gold-deep" />
          <span className="font-arabic text-xs font-bold text-emerald-deep">
            منهج نموذجي
          </span>
        </div>
      </div>
    </div>
  );
}

/* ───── Programs ───── */

function Programs() {
  return (
    <section id="programs" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHead
          eyebrow="Al-Nubalaa Private School"
          title="رحلةٌ تربوية متكاملة من الحضانة حتى الابتدائية"
          subtitle="خمس مراحل مصممة بعناية، تنمو مع طفلك خطوة بخطوة، بحب ومنهجية وذوق رفيع."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <ProgramCard key={p.en} index={i} program={p} />
          ))}
          <CallCard />
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  program,
  index,
}: {
  program: (typeof PROGRAMS)[number];
  index: number;
}) {
  const Ico = program.icon;
  return (
    <article className="program-card relative overflow-hidden rounded-3xl border border-emerald/10 bg-cream-soft p-7">
      <div className="flex items-start justify-between">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${program.accent} text-cream-soft shadow-(--shadow-soft)`}
        >
          <Ico className="h-7 w-7" />
        </div>
        <span className="numeric text-5xl font-light text-gold/60">
          0{index + 1}
        </span>
      </div>

      <h3 className="mt-6 font-arabic text-2xl font-bold text-emerald-deep">
        {program.ar}
      </h3>
      <p className="mt-1 font-serif text-sm tracking-[0.2em] text-gold-deep">
        {program.en.toUpperCase()}
      </p>

      <p className="mt-5 font-arabic leading-loose text-ink-soft">
        {program.desc}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-emerald/10 pt-4">
        <span className="flex items-center gap-2 text-sm text-ink-mute">
          <Icon.Clock className="h-4 w-4 text-gold-deep" />
          <span className="numeric">{program.age}</span>
        </span>
        <a
          href="#contact"
          className="inline-flex items-center gap-1 text-sm font-bold text-emerald transition-colors hover:text-emerald-deep"
        >
          سجّل الآن
          <Icon.Arrow className="h-4 w-4 rtl:rotate-180" />
        </a>
      </div>
    </article>
  );
}

function CallCard() {
  return (
    <article className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-deep via-emerald to-emerald-soft p-7 text-cream-soft">
      <Leaf className="absolute -right-6 -top-6 h-32 w-32 text-cream-soft/10" />
      <Leaf
        className="absolute -bottom-8 -left-6 h-28 w-28 text-gold/30"
        style={{ ["--r" as string]: "180deg" }}
      />
      <p className="font-serif text-xs tracking-[0.22em] text-gold-soft">
        Al-Nubalaa Private School
      </p>
      <h3 className="mt-3 font-arabic text-2xl font-bold leading-snug">
        التسجيل مفتوح للعام الدراسي القادم
      </h3>
      <p className="mt-3 font-arabic leading-loose text-cream-soft/85">
        تواصلوا معنا اليوم لحجز مقعد طفلكم في إحدى مراحلنا — الأماكن محدودة.
      </p>
      <div className="mt-6 flex flex-col gap-2 text-sm">
        <a
          href="tel:+9647719099000"
          className="flex items-center gap-2 hover:text-gold-soft"
        >
          <Icon.Phone className="h-4 w-4" />
          <span className="numeric" dir="ltr">
            0771 909 9000
          </span>
          <span className="text-xs opacity-70">المدرسة</span>
        </a>
        <a
          href="tel:+9647719100091"
          className="flex items-center gap-2 hover:text-gold-soft"
        >
          <Icon.Phone className="h-4 w-4" />
          <span className="numeric" dir="ltr">
            0771 910 0091
          </span>
          <span className="text-xs opacity-70">الروضة</span>
        </a>
      </div>
      <a
        href="#contact"
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-cream-soft px-5 py-3 text-sm font-bold text-emerald-deep shadow-md transition-transform hover:-translate-y-0.5"
      >
        احجز جولة
        <Icon.Arrow className="h-4 w-4 rtl:rotate-180" />
      </a>
    </article>
  );
}

/* ───── About ───── */

function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-72 opacity-60"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, rgba(31,95,74,0.10), transparent 70%)",
        }}
      />
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <div className="lg:col-span-5">
          <AboutVisual />
        </div>
        <div className="lg:col-span-7">
          <p className="divider-luxe mb-6">
            <span>Al-Nubalaa Private School</span>
          </p>
          <h2 className="font-arabic text-4xl font-extrabold leading-tight text-emerald-deep md:text-5xl">
            <span className="gold-shine">مؤسسة النبلاء الاهلية</span>
            <br />
            للطفولة النموذجية
          </h2>
          <p className="mt-6 font-arabic text-lg leading-loose text-ink-soft">
            في قلب الكرادة الشرقية ببغداد، تقف{" "}
            <strong className="text-emerald-deep">مؤسسة النبلاء الاهلية</strong>{" "}
            صرحًا تربويًا أنيقًا، يجمع بين دفء البيت وانضباط المدرسة الراقية.
            نُعِدّ أطفالكم منذ الحضانة وحتى الابتدائية بمنهجٍ نموذجيّ، يصقل
            الموهبة، يبني القِيَم، ويفتح آفاق العقل.
          </p>
          <p className="mt-4 font-arabic text-lg leading-loose text-ink-soft">
            نؤمن أن الطفولة مرحلةٌ مقدّسة — لذلك نصمّم كل يومٍ ليكون مليئًا
            بالفرح، التعلّم، والضحكات البريئة.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.en}
                className="rounded-2xl border border-emerald/10 bg-cream-soft p-5 text-center shadow-sm"
              >
                <p className="numeric text-3xl font-bold text-emerald-deep">
                  {s.value}
                </p>
                <p className="mt-1 font-arabic text-xs text-ink-mute">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#features"
            className="mt-10 inline-flex items-center gap-2 font-bold text-emerald transition-colors hover:text-emerald-deep"
          >
            <span>لماذا تختارنا العائلات</span>
            <Icon.Arrow className="h-4 w-4 rtl:rotate-180" />
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutVisual() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-4xl border border-gold/30" />
      <div className="overflow-hidden rounded-4xl shadow-(--shadow-luxe)">
        <div className="relative aspect-4/5">
          <Image
            src="/images/trip-1.jpg"
            alt="رحلة مدرسية لطلاب مؤسسة النبلاء الاهلية"
            fill
            sizes="(min-width: 1024px) 28rem, 80vw"
            className="object-cover"
          />
          {/* gentle bottom shade for the floating badge */}
          <div
            className="absolute inset-x-0 bottom-0 h-1/3"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(14,59,44,0.55) 100%)",
            }}
          />
          {/* tagline ribbon, kept */}
          <div className="absolute inset-x-6 bottom-6 rounded-full bg-emerald-deep/95 px-5 py-2 text-center font-serif text-xs tracking-[0.4em] text-gold-soft">
            Al-Nubalaa Private School
          </div>
        </div>
      </div>

      {/* badge */}
      <div className="absolute -bottom-6 right-6 flex items-center gap-3 rounded-2xl bg-cream-soft px-4 py-3 shadow-(--shadow-luxe)">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/20">
          <Icon.Star className="h-5 w-5 text-gold-deep" />
        </div>
        <div className="leading-tight">
          <p className="font-arabic text-sm font-bold text-emerald-deep">
            تقييم عائلي عالٍ
          </p>
          <p className="font-serif text-[11px] tracking-widest text-gold-deep">
            Al-Nubalaa Private School
          </p>
        </div>
      </div>
    </div>
  );
}

/* ───── Why Us / Features ───── */

function Features() {
  return (
    <section
      id="features"
      className="relative isolate overflow-hidden bg-emerald-deep py-24 text-cream-soft lg:py-32"
    >
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 20%, rgba(201,169,97,0.25), transparent 60%)," +
            "radial-gradient(50% 60% at 0% 80%, rgba(59,138,111,0.45), transparent 60%)",
        }}
      />
      <Leaf
        className="absolute right-0 top-10 h-56 w-56 text-cream-soft/5"
        style={{ ["--r" as string]: "30deg" }}
      />
      <Leaf
        className="absolute -left-10 bottom-10 h-72 w-72 text-gold/10"
        style={{ ["--r" as string]: "150deg" }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="divider-luxe mb-6 text-gold-soft!">
              <span>Al-Nubalaa Private School</span>
            </p>
            <h2 className="font-arabic text-4xl font-extrabold leading-tight md:text-5xl">
              تربيةٌ راقية، بيئةٌ آمنة،
              <br />
              <span className="gold-shine">ونتائج تفخر بها العائلة.</span>
            </h2>
          </div>
          <p className="font-arabic text-lg leading-loose text-cream-soft/80 lg:col-span-5">
            ما يميّزنا ليس فقط ما نُعلّمه — بل كيف نُعلّمه، وبأي ذوقٍ نقدّمه
            لأطفالكم كل يوم.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-cream-soft/10 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => {
            const Ico = f.icon;
            return (
              <div
                key={f.en}
                className="group relative bg-emerald-deep p-8 transition-colors hover:bg-emerald"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold-soft transition-colors group-hover:bg-gold/25">
                  <Ico className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-arabic text-xl font-bold">
                  {f.title}
                </h3>
                <p className="mt-1 font-serif text-xs tracking-[0.18em] text-gold-soft/80">
                  {f.en.toUpperCase()}
                </p>
                <p className="mt-4 font-arabic leading-loose text-cream-soft/75">
                  {f.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───── Gallery ───── */

function Gallery() {
  return (
    <section id="gallery" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="divider-luxe mb-6">
              <span>Al-Nubalaa Private School</span>
            </p>
            <h2 className="font-arabic text-4xl font-extrabold leading-tight text-emerald-deep md:text-5xl">
              لحظاتٌ صغيرة، أثرٌ يدوم.
            </h2>
            <p className="mt-4 font-arabic text-lg text-ink-soft">
              من الفصول إلى الفناء — هذه قطفٌ من حياتنا اليومية.
            </p>
          </div>
          <a
            href="https://www.facebook.com/AlNublaa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-sm"
          >
            <Icon.Facebook className="h-4 w-4 text-emerald" />
            <span>شاهد أكثر على فيسبوك</span>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 lg:auto-rows-[140px]">
          {GALLERY.map((g, i) => (
            <a
              key={g.label}
              href="https://www.facebook.com/AlNublaa"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl shadow-(--shadow-soft) transition-transform hover:-translate-y-1 ${
                [
                  "col-span-2 row-span-2",
                  "col-span-1 row-span-1",
                  "col-span-1 row-span-2",
                  "col-span-2 row-span-1",
                  "col-span-1 row-span-1",
                  "col-span-2 row-span-1",
                ][i]
              }`}
              style={{
                minHeight: i === 0 ? 280 : undefined,
              }}
            >
              <Image
                src={g.src}
                alt={g.label}
                fill
                sizes="(min-width: 1024px) 16rem, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 via-black/30 to-transparent p-3">
                <span className="font-arabic text-sm font-bold text-cream-soft">
                  {g.label}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Contact ───── */

function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="overflow-hidden rounded-[2.5rem] border border-emerald/10 bg-linear-to-br from-cream-soft to-cream shadow-(--shadow-luxe)">
          <div className="grid lg:grid-cols-12">
            {/* Left: info */}
            <div className="relative bg-emerald-deep p-10 text-cream-soft lg:col-span-5">
              <Leaf
                className="absolute -right-6 -top-6 h-40 w-40 text-cream-soft/5"
                style={{ ["--r" as string]: "30deg" }}
              />
              <p className="divider-luxe text-gold-soft!">
                <span>Al-Nubalaa Private School</span>
              </p>
              <h2 className="mt-6 font-arabic text-3xl font-extrabold leading-snug">
                نحن سعداء بلقائكم.
              </h2>
              <p className="mt-3 font-arabic leading-loose text-cream-soft/80">
                تفضّلوا بزيارة المدرسة، أو تواصلوا معنا في أي وقت — نحن متواجدون
                دائمًا لاستقبالكم.
              </p>

              <ul className="mt-8 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-1 grid h-9 w-9 place-items-center rounded-xl bg-gold/15">
                    <Icon.Pin className="h-4 w-4 text-gold-soft" />
                  </span>
                  <div>
                    <p className="font-arabic font-bold">عنواننا</p>
                    <p className="mt-1 font-arabic leading-relaxed text-cream-soft/80">
                      الكرادة الشرقية، ساحة الواثق، شارع ٤٢ — قرب مطعم دايت فود
                      <br />
                      بغداد، العراق
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 grid h-9 w-9 place-items-center rounded-xl bg-gold/15">
                    <Icon.Phone className="h-4 w-4 text-gold-soft" />
                  </span>
                  <div>
                    <p className="font-arabic font-bold">اتصلوا بنا</p>
                    <p className="mt-1 numeric text-cream-soft/85" dir="ltr">
                      0771 909 9000 · المدرسة
                    </p>
                    <p className="numeric text-cream-soft/85" dir="ltr">
                      0771 910 0091 · الروضة
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 grid h-9 w-9 place-items-center rounded-xl bg-gold/15">
                    <Icon.Mail className="h-4 w-4 text-gold-soft" />
                  </span>
                  <div>
                    <p className="font-arabic font-bold">البريد الإلكتروني</p>
                    <a
                      href="mailto:alnubala.school@gmail.com"
                      className="mt-1 block text-cream-soft/85 hover:text-gold-soft"
                      dir="ltr"
                    >
                      alnubala.school@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 grid h-9 w-9 place-items-center rounded-xl bg-gold/15">
                    <Icon.Clock className="h-4 w-4 text-gold-soft" />
                  </span>
                  <div>
                    <p className="font-arabic font-bold">أوقات الدوام</p>
                    <p className="mt-1 font-arabic text-cream-soft/85">
                      متواجدون دائمًا للتواصل · الأحد – الخميس ٧:٣٠ ص – ٢:٣٠ م
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 flex items-center gap-3">
                <a
                  href="https://www.facebook.com/AlNublaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full bg-cream-soft/10 transition-colors hover:bg-gold/20"
                  aria-label="Facebook"
                >
                  <Icon.Facebook className="h-4 w-4 text-cream-soft" />
                </a>
                <a
                  href="https://alnubala.school.blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream-soft/80 hover:text-gold-soft"
                >
                  alnubala.school.blog
                </a>
              </div>
            </div>

            {/* Right: form (client component) */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Section header helper ───── */

function SectionHead({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="divider-luxe mx-auto">
        <span>{eyebrow}</span>
      </p>
      <h2 className="mt-6 font-arabic text-4xl font-extrabold leading-tight text-emerald-deep md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 font-arabic text-lg leading-loose text-ink-soft">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ───── Footer ───── */

function Footer() {
  return (
    <footer className="relative mt-10 bg-cream-deep/60 pt-16 pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <BrandMark className="h-12 w-12" />
            <div className="leading-tight">
              <p className="font-arabic text-lg font-bold text-emerald-deep">
                مؤسسة النبلاء الاهلية
              </p>
              <p className="font-serif text-[11px] tracking-[0.22em] text-gold-deep">
                Al-Nubalaa Private School
              </p>
            </div>
          </div>
          <p className="mt-5 font-arabic leading-loose text-ink-soft">
            مدرسةٌ خاصة في قلب الكرادة ببغداد، نُربّي جيلًا من النبلاء بحبٍ
            ومنهجٍ راقٍ.
          </p>
        </div>

        <div className="lg:col-span-2">
          <p className="font-serif text-xs tracking-[0.2em] text-gold-deep">
            QUICK LINKS
          </p>
          <ul className="mt-4 space-y-2 font-arabic text-ink-soft">
            <li>
              <a className="hover:text-emerald-deep" href="#programs">
                المراحل
              </a>
            </li>
            <li>
              <a className="hover:text-emerald-deep" href="#about">
                عن المدرسة
              </a>
            </li>
            <li>
              <a className="hover:text-emerald-deep" href="#features">
                لماذا نحن
              </a>
            </li>
            <li>
              <a className="hover:text-emerald-deep" href="#gallery">
                المعرض
              </a>
            </li>
            <li>
              <a className="hover:text-emerald-deep" href="#contact">
                تواصل
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="font-serif text-xs tracking-[0.2em] text-gold-deep">
            CONTACT
          </p>
          <ul className="mt-4 space-y-3 font-arabic text-ink-soft">
            <li className="flex items-start gap-2">
              <Icon.Pin className="mt-1 h-4 w-4 text-gold-deep" />
              <span>الكرادة الشرقية، شارع ٤٢ · بغداد</span>
            </li>
            <li className="flex items-center gap-2">
              <Icon.Phone className="h-4 w-4 text-gold-deep" />
              <span className="numeric" dir="ltr">
                0771 909 9000
              </span>
            </li>
            <li className="flex items-center gap-2" dir="ltr">
              <Icon.Mail className="h-4 w-4 text-gold-deep" />
              <span>alnubala.school@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="font-serif text-xs tracking-[0.2em] text-gold-deep">
            FOLLOW
          </p>
          <a
            href="https://www.facebook.com/AlNublaa"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-3 rounded-2xl border border-emerald/15 bg-cream-soft px-4 py-3 transition-colors hover:border-emerald/30"
          >
            <Icon.Facebook className="h-5 w-5 text-emerald-deep" />
            <div className="leading-tight">
              <p className="font-arabic text-sm font-bold text-emerald-deep">
                @AlNublaa
              </p>
              <p className="text-xs text-ink-mute">٢١K+ متابع</p>
            </div>
          </a>
          <a
            href="https://alnubala.school.blog"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-sm text-ink-soft hover:text-emerald-deep"
            dir="ltr"
          >
            alnubala.school.blog
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-emerald/10 px-6 pt-6 text-xs text-ink-mute md:flex-row lg:px-10">
        <p>
          © {new Date().getFullYear()} Alnubalaa Private School · All rights
          reserved.
        </p>
        <p className="font-arabic">صُنع بحبٍ في بغداد ❤︎</p>
      </div>
    </footer>
  );
}
