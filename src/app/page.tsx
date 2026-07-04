const features = [
  {
    icon: "🌱",
    title: "100% Bio-Baumwolle",
    text: "Aus zertifiziert biologischem Anbau – ganz ohne Pestizide und schädliche Chemikalien.",
  },
  {
    icon: "♻️",
    title: "Wiederverwendbar",
    text: "Eine Nymo Bag ersetzt über 700 Plastiktüten in ihrem Leben. Waschbar und langlebig.",
  },
  {
    icon: "🚫",
    title: "Plastikfrei",
    text: "Vom Produkt bis zur Verpackung – bei uns kommt kein Gramm Einwegplastik zum Einsatz.",
  },
  {
    icon: "🤝",
    title: "Fair produziert",
    text: "Hergestellt unter fairen Arbeitsbedingungen mit gerechter Bezahlung.",
  },
  {
    icon: "🌍",
    title: "CO₂-neutraler Versand",
    text: "Jede Bestellung wird klimaneutral versendet – kompensiert über zertifizierte Projekte.",
  },
  {
    icon: "🎨",
    title: "Zeitloses Design",
    text: "Schlicht, robust und alltagstauglich – passt zu jedem Outfit und jeder Gelegenheit.",
  },
];

const steps = [
  {
    number: "01",
    title: "Anbau",
    text: "Bio-Baumwolle wird ressourcenschonend und ohne Kunstdünger angebaut.",
  },
  {
    number: "02",
    title: "Fertigung",
    text: "Faire Manufakturen nähen jede Tasche sorgfältig und langlebig.",
  },
  {
    number: "03",
    title: "Nutzung",
    text: "Du nutzt sie jahrelang – für Einkauf, Uni, Strand oder Alltag.",
  },
  {
    number: "04",
    title: "Kreislauf",
    text: "Am Lebensende ist die Bag zu 100% biologisch abbaubar.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-[#f7f5ef] text-[#1e2b22]">
      {/* Navigation */}
      <header className="sticky top-0 z-20 border-b border-[#e3ddcf] bg-[#f7f5ef]/80 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-semibold tracking-tight">
            🌿 Nymo<span className="text-[#4a7c59]">Bag</span>
          </a>
          <div className="hidden gap-8 text-sm font-medium text-[#3d5245] sm:flex">
            <a href="#vorteile" className="hover:text-[#4a7c59]">Vorteile</a>
            <a href="#prozess" className="hover:text-[#4a7c59]">Nachhaltigkeit</a>
            <a href="#impact" className="hover:text-[#4a7c59]">Impact</a>
          </div>
          <a
            href="#kaufen"
            className="rounded-full bg-[#4a7c59] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#3d6449]"
          >
            Jetzt kaufen
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="flex flex-col gap-6">
          <span className="w-fit rounded-full bg-[#e4ecdf] px-4 py-1 text-sm font-medium text-[#4a7c59]">
            🌍 Nachhaltig einkaufen
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Die Tote Bag, die die Umwelt liebt.
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-[#4c5a50]">
            Die <strong>Nymo Bag</strong> ist deine plastikfreie Begleiterin aus
            100% Bio-Baumwolle. Robust, waschbar und designt für ein Leben lang –
            damit weniger Plastik in unseren Ozeanen landet.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#kaufen"
              className="flex items-center justify-center rounded-full bg-[#4a7c59] px-7 py-3 font-semibold text-white transition-colors hover:bg-[#3d6449]"
            >
              Jetzt bestellen – 19,90 €
            </a>
            <a
              href="#vorteile"
              className="flex items-center justify-center rounded-full border border-[#c9c1ac] px-7 py-3 font-semibold text-[#3d5245] transition-colors hover:bg-[#efeadd]"
            >
              Mehr erfahren
            </a>
          </div>
          <div className="mt-2 flex gap-8 text-sm text-[#4c5a50]">
            <div>
              <p className="text-2xl font-bold text-[#1e2b22]">700+</p>
              <p>Plastiktüten ersetzt</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#1e2b22]">100%</p>
              <p>Bio-Baumwolle</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#1e2b22]">0 g</p>
              <p>Einwegplastik</p>
            </div>
          </div>
        </div>

        {/* Illustrated bag */}
        <div className="relative flex items-center justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-[#dbe7d4] blur-2xl sm:h-96 sm:w-96" />
          <svg
            viewBox="0 0 220 260"
            className="relative w-64 drop-shadow-xl sm:w-80"
            role="img"
            aria-label="Nymo Bag Tote Bag"
          >
            <path
              d="M40 70 h140 l14 170 a10 10 0 0 1 -10 11 H36 a10 10 0 0 1 -10 -11 Z"
              fill="#eae3d2"
              stroke="#4a7c59"
              strokeWidth="4"
            />
            <path
              d="M70 72 v-14 a40 40 0 0 1 80 0 v14"
              fill="none"
              stroke="#4a7c59"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <text
              x="110"
              y="165"
              textAnchor="middle"
              fontSize="26"
              fontWeight="700"
              fill="#4a7c59"
              fontFamily="sans-serif"
            >
              NYMO
            </text>
            <text x="110" y="192" textAnchor="middle" fontSize="34">🌿</text>
          </svg>
        </div>
      </section>

      {/* Vorteile */}
      <section id="vorteile" className="bg-white py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Warum die Nymo Bag?
            </h2>
            <p className="mt-4 text-lg text-[#4c5a50]">
              Gut für dich, gut für den Planeten. Jedes Detail ist auf
              Nachhaltigkeit ausgelegt.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[#eceadf] bg-[#f9f8f3] p-7 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 text-3xl">{f.icon}</div>
                <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
                <p className="text-[#4c5a50]">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prozess */}
      <section id="prozess" className="py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Vom Feld in den Kreislauf
            </h2>
            <p className="mt-4 text-lg text-[#4c5a50]">
              Nachhaltigkeit über den gesamten Lebenszyklus.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.number} className="rounded-2xl bg-[#e8efe2] p-7">
                <p className="text-4xl font-bold text-[#4a7c59]">{s.number}</p>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-[#4c5a50]">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="bg-[#1e2b22] py-20 text-[#eef2ea]">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 text-center sm:grid-cols-3">
          <div>
            <p className="text-5xl font-bold text-[#8dbf9c]">12.000+</p>
            <p className="mt-2 text-[#c3d1c7]">verkaufte Nymo Bags</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-[#8dbf9c]">8 Mio.</p>
            <p className="mt-2 text-[#c3d1c7]">eingesparte Plastiktüten</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-[#8dbf9c]">5.000</p>
            <p className="mt-2 text-[#c3d1c7]">gepflanzte Bäume</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kaufen" className="py-20">
        <div className="mx-auto w-full max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Mach den Wechsel. Heute.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[#4c5a50]">
            Sichere dir jetzt deine Nymo Bag und werde Teil einer Bewegung für
            weniger Plastik und mehr Verantwortung.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#4a7c59] px-9 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#3d6449]"
          >
            Jetzt bestellen – 19,90 €
          </a>
          <p className="mt-4 text-sm text-[#6a7a6f]">
            Kostenloser klimaneutraler Versand ab 39 € · 30 Tage Rückgaberecht
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e3ddcf] py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-[#6a7a6f] sm:flex-row">
          <p>🌿 Nymo Bag — nachhaltig durch den Alltag.</p>
          <p>© {new Date().getFullYear()} Nymo Bag. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
