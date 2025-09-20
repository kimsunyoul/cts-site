import Link from "next/link";

function TechCard({
  title,
  tagline,
  desc,
}: {
  title: string;
  tagline: string;
  desc: string;
}) {
  return (
    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-[#57a6ff] font-medium">{tagline}</p>
      <p className="text-sm text-white/70 mt-2">{desc}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0b1220] text-white">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-[#0b1220]/70 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-lg bg-[#57a6ff]" />
            <span className="font-semibold tracking-wide">CTS — CatastroTech Solutions™</span>
          </div>
          <nav className="flex items-center gap-4 text-sm opacity-90">
            <a href="#tech" className="hover:opacity-100 opacity-80">Technologies</a>
            <Link href="/scc" className="hover:opacity-100 opacity-80">SCC</Link>
          </nav>
        </div>
      </header>

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

      <section id="tech" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">CTS Core Technologies™</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TechCard title="VSI (Visual Shock Integration™)" tagline="Reset. Optimize. Expand."
            desc="시각 몰입 기반 감정 리셋 솔루션. 불필요한 감정을 빠르게 초기화하고 새로운 생산성을 부여합니다." />
          <TechCard title="ESD (Emotion Surveillance & Domination™)" tagline="Know Your Mind, Control Your Future."
            desc="실시간 감정 데이터 수집·분석·예측. 개인 맞춤형 안정성을 보장합니다." />
          <TechCard title="SZS (Safe Zone System™)" tagline="Your Safe Space, Anytime, Anywhere."
            desc="개인 맞춤형 Safe Zone 구축. 극한 상황에서도 완전한 보호와 휴식을 제공합니다." />
          <TechCard title="SCC (SafeCoin Contribution™)" tagline="Giving that Grows."
            desc="블록체인 기반 기부/후원으로 감정적 안정과 사회적 가치를 동시에 실현합니다." />
          <TechCard title="SMF (Safe Mindset Futures™)" tagline="Hope is Service."
            desc="데이터 기반 미래 설계. 불안 대신 예측 가능한 안정을 제공합니다." />
        </div>
      </section>

      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-white/60 text-center">
          © {new Date().getFullYear()} CatastroTech Solutions™ — Engineering Safe Emotions for a Safer World.
        </div>
      </footer>
    </main>
  );
}
