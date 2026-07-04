import { Nav, Reveal, Counter, BagShowcase, FAQ } from "@/components/Interactive";

const features = [
  {
    icon: "🌱",
    title: "100% Bio-Baumwolle",
    text: "GOTS-zertifiziert, ohne Pestizide. Angebaut mit Respekt vor Boden und Wasser.",
    span: "lg:col-span-2",
  },
  {
    icon: "♻️",
    title: "700+ Tüten ersetzt",
    text: "Eine Nymo Bag spart über ihr Leben hunderte Einweg-Plastiktüten ein.",
    span: "",
  },
  {
    icon: "🚫",
    title: "Plastikfrei",
    text: "Vom Produkt bis zur Verpackung – kein Gramm Einwegplastik.",
    span: "",
  },
  {
    icon: "🤝",
    title: "Fair produziert",
    text: "Faire Löhne und sichere Arbeitsbedingungen in jeder Manufaktur.",
    span: "",
  },
  {
    icon: "🌍",
    title: "Klimaneutraler Versand",
    text: "Jede Bestellung wird CO₂-kompensiert über zertifizierte Projekte verschickt.",
    span: "lg:col-span-2",
  },
];

const steps = [
  { number: "01", title: "Anbau", text: "Bio-Baumwolle wächst ohne Kunstdünger, ressourcenschonend." },
  { number: "02", title: "Fertigung", text: "Faire Manufakturen nähen jede Tasche langlebig und sorgfältig." },
  { number: "03", title: "Nutzung", text: "Jahrelanger Begleiter – Einkauf, Uni, Strand oder Alltag." },
  { number: "04", title: "Kreislauf", text: "Am Lebensende ist die Bag zu 100% biologisch abbaubar." },
];

const testimonials = [
  { name: "Lena M.", role: "Studentin", text: "Endlich eine Tasche, die hält und richtig gut aussieht. Nutze sie täglich!", stars: 5 },
  { name: "Jonas K.", role: "Fahrradkurier", text: "Robust genug für schwere Einkäufe und komplett plastikfrei. Top.", stars: 5 },
  { name: "Aylin S.", role: "Lehrerin", text: "Weicher Stoff, tolle Farbe, faire Produktion – genau mein Ding.", stars: 5 },
];

const marquee = [
  "Bio-Baumwolle",
  "Plastikfrei",
  "Fair produziert",
  "Klimaneutral",
  "Waschbar",
  "Langlebig",
  "Vegan",
  "GOTS-zertifiziert",
];

export default function Home() {
  return (
    <div id="top" className="flex flex-col flex-1 bg-background text-ink">
      <Nav />

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40">
        {/* soft gradient backdrop */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-moss-light/40 blur-3xl" />
          <div className="absolute -right-24 top-40 h-96 w-96 rounded-full bg-moss/20 blur-3xl" />
        </div>

        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-moss/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-moss backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-moss" />
                Nachhaltig. Fair. Zeitlos.
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                Die Tote Bag, die die <span className="text-gradient">Umwelt liebt</span>.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="max-w-md text-lg leading-relaxed text-ink/70">
                Die <strong className="text-ink">Nymo Bag</strong> ist deine plastikfreie
                Begleiterin aus 100% Bio-Baumwolle. Robust, waschbar und designt für ein
                Leben lang.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#kaufen"
                  className="group flex items-center justify-center gap-2 rounded-full bg-moss px-7 py-3.5 font-semibold text-white shadow-lg shadow-moss/30 transition-all hover:-translate-y-0.5 hover:bg-moss-dark hover:shadow-xl"
                >
                  Jetzt bestellen – 19,90 €
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="#vorteile"
                  className="flex items-center justify-center rounded-full border border-ink/15 bg-white/50 px-7 py-3.5 font-semibold text-ink backdrop-blur transition-colors hover:bg-white"
                >
                  Mehr erfahren
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-4 flex gap-8">
                {[
                  { n: "700+", l: "Tüten ersetzt" },
                  { n: "100%", l: "Bio-Baumwolle" },
                  { n: "0 g", l: "Einwegplastik" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="text-2xl font-bold text-ink">{s.n}</p>
                    <p className="text-sm text-ink/60">{s.l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <BagShowcase />
          </Reveal>
        </div>
      </section>

      {/* ---------- MARQUEE ---------- */}
      <section className="border-y border-black/5 bg-ink py-5 text-cream">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i} className="flex items-center gap-10 whitespace-nowrap text-lg font-medium">
                {m} <span className="text-moss-light">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- VORTEILE (bento) ---------- */}
      <section id="vorteile" className="py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-moss">Warum Nymo</p>
            <h2 className="text-3xl font-bold sm:text-5xl">Gut für dich. Gut für den Planeten.</h2>
          </Reveal>
          <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 70} className={f.span}>
                <div className="group h-full rounded-3xl border border-black/5 bg-cream p-8 transition-all hover:-translate-y-1 hover:border-moss/30 hover:shadow-xl hover:shadow-moss/5">
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-moss/10 text-3xl transition-transform group-hover:scale-110">
                    {f.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{f.title}</h3>
                  <p className="text-ink/65">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROZESS ---------- */}
      <section id="prozess" className="bg-cream py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-moss">Nachhaltigkeit</p>
            <h2 className="text-3xl font-bold sm:text-5xl">Vom Feld in den Kreislauf</h2>
          </Reveal>
          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.number} delay={i * 90}>
                <div className="relative h-full rounded-3xl bg-white p-8 shadow-sm">
                  <p className="text-5xl font-bold text-moss/25">{s.number}</p>
                  <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-ink/65">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- IMPACT (counters) ---------- */}
      <section className="relative overflow-hidden bg-ink py-24 text-cream">
        <div className="pointer-events-none absolute inset-0 -z-0 opacity-30">
          <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-moss blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-moss-light blur-3xl" />
        </div>
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 text-center sm:grid-cols-3">
          {[
            { to: 12000, suffix: "+", label: "verkaufte Nymo Bags" },
            { to: 8, suffix: " Mio.", label: "eingesparte Plastiktüten" },
            { to: 5000, suffix: "", label: "gepflanzte Bäume" },
          ].map((s) => (
            <Reveal key={s.label}>
              <p className="text-5xl font-bold text-moss-light sm:text-6xl">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-cream/70">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section id="stimmen" className="py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-moss">Stimmen</p>
            <h2 className="text-3xl font-bold sm:text-5xl">Von der Community geliebt</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="flex h-full flex-col rounded-3xl border border-black/5 bg-cream p-8">
                  <div className="mb-4 text-moss">{"★".repeat(t.stars)}</div>
                  <blockquote className="flex-1 text-lg leading-relaxed text-ink/80">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-moss/15 font-semibold text-moss">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-ink/55">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="bg-cream py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-moss">Fragen & Antworten</p>
            <h2 className="text-3xl font-bold sm:text-5xl">Alles, was du wissen willst</h2>
          </Reveal>
          <Reveal>
            <FAQ />
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section id="kaufen" className="py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-moss px-8 py-16 text-center text-white shadow-2xl shadow-moss/30 sm:px-16">
              <div className="pointer-events-none absolute inset-0 opacity-20">
                <div className="absolute -left-10 -top-10 h-52 w-52 rounded-full bg-white blur-2xl" />
                <div className="absolute -bottom-10 -right-10 h-52 w-52 rounded-full bg-moss-light blur-2xl" />
              </div>
              <div className="relative">
                <h2 className="text-3xl font-bold sm:text-5xl">Mach den Wechsel. Heute.</h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
                  Sichere dir deine Nymo Bag und werde Teil einer Bewegung für weniger
                  Plastik und mehr Verantwortung.
                </p>
                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-9 py-4 text-lg font-semibold text-moss-dark shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  Jetzt bestellen – 19,90 € →
                </a>
                <p className="mt-4 text-sm text-white/70">
                  Klimaneutraler Versand ab 39 € · 30 Tage Rückgaberecht
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-black/5 bg-cream py-14">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-xl font-bold">🌿 Nymo<span className="text-moss">Bag</span></p>
            <p className="mt-3 max-w-xs text-ink/60">
              Nachhaltig durch den Alltag. Eine Tasche, die den Unterschied macht.
            </p>
          </div>
          <div>
            <p className="mb-3 font-semibold">Produkt</p>
            <ul className="space-y-2 text-ink/60">
              <li><a href="#vorteile" className="hover:text-moss">Vorteile</a></li>
              <li><a href="#prozess" className="hover:text-moss">Nachhaltigkeit</a></li>
              <li><a href="#faq" className="hover:text-moss">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold">Kontakt</p>
            <ul className="space-y-2 text-ink/60">
              <li><a href="#" className="hover:text-moss">Instagram</a></li>
              <li><a href="#" className="hover:text-moss">E-Mail</a></li>
              <li><a href="#" className="hover:text-moss">Newsletter</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 w-full max-w-6xl px-6 text-sm text-ink/50">
          © {new Date().getFullYear()} Nymo Bag · Mit 🌱 gemacht.
        </div>
      </footer>
    </div>
  );
}
