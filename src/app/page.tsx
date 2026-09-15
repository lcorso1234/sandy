'use client';

export default function Home() {
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
    <>
      {/* Mobile Design */}
      <div className="page-shell flex min-h-screen items-center justify-center px-4 py-10 md:hidden">
        <div className="business-card w-full max-w-md space-y-8 rounded-[32px] border border-white/5 bg-gradient-to-br from-[#2f363b] via-[#262b30] to-[#1b2024] p-8 text-white">
          <div className="flex items-center gap-3">
            <span className="accent-dot" aria-hidden="true" />
            <p className="accent-text text-[0.75rem] font-semibold uppercase tracking-[0.4em]">
              First thing is - we give food cards.
            </p>
          </div>

          <header className="space-y-2 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              The Invisible Hand
            </p>
            <h1 className="text-4xl font-semibold tracking-tight">Sandy Corso</h1>
            <p className="text-base text-white/75">Food Card Strategist</p>
          </header>

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
            <p className="text-center text-xs text-white/60">
              Powered by{" "}
              <a
                href="https://toomeyreporting.com"
                className="text-white underline underline-offset-4 hover:text-white/80"
              >
                Toomey Reporting
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Design */}
      <div className="hidden min-h-screen items-center justify-center bg-gray-50 px-8 py-12 md:flex">
        <div className="w-full max-w-2xl rounded-2xl bg-white p-12 text-center shadow-xl border border-gray-100">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 tracking-tight">Toomey Reporting, Inc.</h1>
          
          <div className="space-y-4 text-lg text-gray-600">
            <p>
              Please contact Sandy Toomey for Court Reporting Services at:
            </p>
            
            <div className="flex flex-col items-center justify-center gap-2 pt-4">
              <a 
                href="tel:3128530648" 
                className="text-2xl font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                (312) 853-0648
              </a>
              <span className="text-gray-400">or</span>
              <a 
                href="mailto:toomeyrep@sbcglobal.net" 
                className="text-xl font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                toomeyrep@sbcglobal.net
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
