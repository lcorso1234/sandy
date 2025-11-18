'use client';

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
  const smsNumber = "+17089328860";
  const textMessage =
    "Hi Sandy! As the owner of Toomey Reporting and a food card strategist helping the homeless, when could we connect this week?";
  const textHref = `sms:${smsNumber}?body=${encodeURIComponent(textMessage)}`;

  const handleSaveAndMessage = () => {
    if (typeof document === "undefined") {
      return;
    }

    const link = document.createElement("a");
    link.href = contactHref;
    link.download = "Sandy-Corso-The-Invisible-Hand.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (typeof window !== "undefined") {
      window.setTimeout(() => {
        window.location.href = textHref;
      }, 400);
    }
  };

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

        <div className="space-y-3">
          <button
            type="button"
            className="jiggle-button accent-button flex w-full flex-col items-center justify-center rounded-lg px-6 py-4 text-base font-semibold transition"
            onClick={handleSaveAndMessage}
          >
            <span>Save Contact</span>
            <span className="text-xs font-normal text-black/70">
              and open a pre-filled text to schedule
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
