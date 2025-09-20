import Link from "next/link";

function CoreTechGrid() {
  const TECH = [
    {
      key: "vsi",
      href: "/vsi",
      title: "VSI (Visual Shock Integration™)",
      sub: "Reset. Optimize. Expand.",
      desc: "시각 몰입 기반 감정 리셋 솔루션. 불필요한 감정을 빠르게 초기화하고 새로운 생산성을 부여합니다.",
    },
    {
      key: "esd",
      href: "/esd",
      title: "ESD (Emotion Surveillance & Domination™)",
      sub: "Know Your Mind, Control Your Future.",
      desc: "실시간 감정 데이터 수집·분석·예측, 개인 맞춤형 안정성을 보장합니다.",
    },
    {
      key: "szs",
      href: "/szs",
      title: "SZS (Safe Zone System™)",
      sub: "Your Safe Space, Anytime, Anywhere.",
      desc: "개인 맞춤형 Safe Zone 구축. 극한 상황에서도 완전한 보호와 휴식을 제공합니다.",
    },
    {
      key: "scc",
      href: "/scc",
      title: "SCC (SafeCoin Contribution™)",
      sub: "Giving that Grows.",
      desc: "블록체인 기반 기부/후원으로 감정적 안정과 사회적 가치를 동시에 실현합니다.",
    },
    {
      key: "smf",
      href: "/smf",
      title: "SMF (Safe Mindset Futures™)",
      sub: "Hope is Service.",
      desc: "데이터 기반 마인드 설계. 불안 대신 예측 가능한 안정을 제공합니다.",
    },
  ];

  return (
    <section className="mx-auto max-w-screen-xl px-5">
      <h2 className="text-center text-2xl font-semibold mb-6">CTS Core Technologies™</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TECH.map((t) => (
          <Link
            key={t.key}
            href={t.href}
            className="group block rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <h3 className="text-lg font-semibold">{t.title}</h3>
            <p className="mt-1 text-sm text-blue-300">{t.sub}</p>
            <p className="mt-2 text-sm text-white/80">{t.desc}</p>

            <span className="mt-4 inline-flex items-center gap-1 text-sm text-white/70 group-hover:text-white">
              Enter
              <svg viewBox="0 0 20 20" className="h-4 w-4">
                <path d="M7 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-white">
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#57a6ff] rounded-lg" />
            <span className="font-semibold tracking-wide text-lg">
              CTS — CatastroTech Solutions™
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Securing Emotions,<br/>Shaping Futures.
          </h1>
          <p className="text-white/70 max-w-2xl">
            위기 속에서도 감정은 안전해야 합니다. CTS는 감정 리셋·감시·보호·기부·미래 설계를
            통합 제공하는 글로벌 감정 솔루션 기업입니다.
          </p>
          <a href="#tech" className="bg-[#57a6ff] text-black font-medium px-6 py-3 rounded-xl">
            Explore Our Technologies
          </a>
        </div>
      </section>

      <section id="tech" className="py-16">
        <CoreTechGrid />
      </section>

      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-white/60 text-center">
          © {new Date().getFullYear()} CatastroTech Solutions™ — Engineering Safe Emotions for a Safer World.
        </div>
      </footer>
    </div>
  );
}
