export default function Home() {
  const details = [
    { label: "Business", value: "The Invisible Hand" },
    { label: "Name", value: "Sandy Corso" },
    { label: "Phone", value: "1.708.932.8860" },
    { label: "Website", value: "toomeyreporting.com" },
  ];

  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Corso;Sandy;;;",
    "FN:Sandy Corso",
    "ORG:The Invisible Hand",
    "TEL;TYPE=CELL:+1-708-932-8860",
    "URL:https://toomeyreporting.com",
    "NOTE:First thing is - we give food cards.",
    "END:VCARD",
  ].join("\n");

  const contactHref = `data:text/vcard;charset=utf-8,${encodeURIComponent(vcard)}`;

  return (
    <div className="page-shell flex min-h-screen items-center justify-center px-4 py-10">
      <div className="business-card w-full max-w-md space-y-8 rounded-[32px] border border-white/5 bg-gradient-to-br from-[#2f363b] via-[#262b30] to-[#1b2024] p-8 text-white">
        <div className="flex items-center gap-3">
          <span className="accent-dot" aria-hidden="true" />
          <p className="accent-text text-[0.75rem] font-semibold uppercase tracking-[0.4em]">
            First thing is - we give food cards.
          </p>
        </div>

        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">
            The Invisible Hand
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">Sandy Corso</h1>
          <p className="text-base text-white/75">Food Card Strategist</p>
        </header>

        <section className="space-y-4">
          <dl className="space-y-3">
            {details.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm shadow-inner-card"
              >
                <dt className="text-white/55">{item.label}</dt>
                <dd className="font-medium text-white">{item.value}</dd>
              </div>
            ))}
          </dl>
          <p className="accent-text text-center text-xs uppercase tracking-[0.3em]">
            Powered by Toomey Reporting
          </p>
        </section>

        <a
          className="jiggle-button accent-button flex w-full items-center justify-center rounded-lg px-6 py-4 text-base font-semibold transition"
          download="Sandy-Corso-The-Invisible-Hand.vcf"
          href={contactHref}
        >
          Save Contact
        </a>
      </div>
    </div>
  );
}
