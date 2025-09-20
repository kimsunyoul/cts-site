"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SCCIndexPage() {
  const [coinId, setCoinId] = useState("");
  const router = useRouter();

  const openCoin = () => {
    if (!coinId.trim()) return;
    const id = coinId.trim();
    router.push(`/scc/${encodeURIComponent(id)}?t=dev`);
  };

  return (
    <main className="min-h-dvh bg-neutral-950 text-white">
      <div className="mx-auto max-w-screen-md px-6 py-10">
        {/* 헤더 */}
        <header className="mb-8">
          <div className="text-xs uppercase tracking-widest opacity-70">CatastroTech Solutions</div>
          <h1 className="mt-1 text-3xl font-semibold">Safe Coin Center (SCC)</h1>
          <p className="mt-2 text-sm opacity-80">
            스캔한 코인 ID로 환전/기부 페이지에 진입합니다. 전시 중에는 QR에 포함된 URL이 자동으로 연결됩니다.
          </p>
        </header>

        {/* 입력 폼 */}
        <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
          <label htmlFor="coin" className="block text-sm mb-2 opacity-90">
            Coin ID
          </label>
          <div className="flex gap-2">
            <input
              id="coin"
              value={coinId}
              onChange={(e) => setCoinId(e.target.value)}
              placeholder="예: 0001 또는 blue123"
              className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/40"
            />
            <button
              onClick={openCoin}
              className="rounded-xl px-5 py-3 font-semibold bg-white text-black hover:opacity-90"
            >
              열기
            </button>
          </div>
          <p className="mt-2 text-xs opacity-70">
            팁: 전사지에 인코딩할 스캔용 주소 형식은{" "}
            <code className="px-1 py-0.5 rounded bg-black/40">https://cts-site.vercel.app/scc/&lt;coinId&gt;?t=dev</code>{" "}
            입니다. 전시 오픈 시 <code>t=dev</code>를 서명 토큰으로 교체하세요.
          </p>
        </section>

        {/* 빠른 테스트 */}
        <section className="mt-8">
          <h2 className="text-sm uppercase tracking-wide opacity-80 mb-2">Quick Test</h2>
          <div className="flex flex-wrap gap-2">
            {["0001", "blue123", "alpha7", "scc-42"].map((id) => (
              <a
                key={id}
                href={`/scc/${encodeURIComponent(id)}?t=dev`}
                className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
              >
                /scc/{id}
              </a>
            ))}
          </div>
        </section>

        {/* 가이드 */}
        <section className="mt-10 text-sm leading-relaxed opacity-85">
          <h3 className="font-medium mb-2">제작 가이드(요약)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>QR 버전1(21×21), Quiet zone 4모듈 포함, 모듈 ≥ 0.5–0.6mm 권장.</li>
            <li>전사지 인쇄 600–1200dpi, 전사 후 미스트 → 세미글로스 탑코트.</li>
            <li>URL 패턴: <code className="px-1 py-0.5 rounded bg-black/40">/scc/&lt;coinId&gt;?t=dev</code> (배포 시 <code>t</code>는 서명 토큰으로 변경).</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
