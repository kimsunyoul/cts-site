"use client";

import { useEffect, useMemo, useState } from "react";

type RateResp = {
  ok: boolean;
  coinId: string;
  token: string;
  timestamp: number;
  palette: "navy-ESD" | "orange-SZS" | "teal-VSI" | "gray-SCC";
  ssc: number;
  components: { D: number; E: number; S: number; R: number; base: number };
};

export default function SCCLanding({ coinId, token }: { coinId: string; token: string }) {
  const [data, setData] = useState<RateResp | null>(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string>("");

  const theme = useMemo(() => {
    switch (data?.palette) {
      case "navy-ESD":
        return { bg: "bg-slate-900", fg: "text-white", acc: "text-blue-300", pill: "bg-blue-600/20 text-blue-200" };
      case "orange-SZS":
        return { bg: "bg-stone-900", fg: "text-white", acc: "text-amber-300", pill: "bg-amber-600/20 text-amber-200" };
      case "teal-VSI":
        return { bg: "bg-slate-900", fg: "text-white", acc: "text-teal-300", pill: "bg-teal-600/20 text-teal-200" };
      default:
        return { bg: "bg-neutral-950", fg: "text-white", acc: "text-neutral-300", pill: "bg-neutral-700/30 text-neutral-200" };
    }
  }, [data?.palette]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`/api/scc?coinId=${encodeURIComponent(coinId)}&t=${encodeURIComponent(token)}`, { cache: "no-store" });
      const json = await res.json();
      if (json.ok) setData(json as RateResp);
    };
    load();
    const id = setInterval(load, 15_000); // 15초마다 갱신(목업)
    return () => clearInterval(id);
  }, [coinId, token]);

  const act = async (action: "redeem" | "donate") => {
    setBusy(true);
    setMsg("");
    try {
      const res = await fetch("/api/scc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ coinId, action, t: token }),
      });
      const json = await res.json();
      setMsg(json.ok ? (json.message || "Done.") : (json.error || "Error."));
    } catch {
      setMsg("Network error.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className={`${theme.bg} ${theme.fg} min-h-dvh relative overflow-hidden`}>
      {/* 배경 비디오: 없으면 404만 나고 페이지는 정상 동작 */}
      <div className="absolute inset-0 -z-10 opacity-50 pointer-events-none">
        <video className="w-full h-full object-cover" src="/video/cts_promo.mp4" autoPlay loop muted playsInline preload="metadata" />
      </div>
      <div className="absolute inset-0 -z-10 mix-blend-screen opacity-50 pointer-events-none">
        <video className="w-full h-full object-cover" src="/video/cts_alert.mp4" autoPlay loop muted playsInline preload="metadata" />
      </div>

      <div className="mx-auto max-w-screen-sm px-5 py-10">
        <header className="mb-6">
          <div className="text-xs uppercase tracking-widest opacity-75">CatastroTech Solutions · SCC</div>
          <h1 className="text-2xl mt-1 font-semibold">Convert the crisis into stability.</h1>
          <p className="text-sm opacity-80">Today's rate is linked to disaster, affect, and participation data.</p>
        </header>

        {/* 환율 카드 */}
        <section className="rounded-2xl border border-white/10 p-4 mb-4 backdrop-blur-sm bg-black/25">
          <div className="flex items-baseline justify-between">
            <div className="text-sm opacity-80">Coin</div>
            <div className="text-xs opacity-70">#{coinId}</div>
          </div>
          <div className="mt-2 text-4xl font-bold">
            {data ? (
              <>
                1&nbsp;<span className="text-base align-middle">Safe&nbsp;Coin</span>
                <span className="mx-2 text-base font-medium opacity-60">→</span>
                <span className={`${theme.acc}`}>{data.ssc.toLocaleString()}</span>&nbsp;SSC
              </>
            ) : (
              <span className="opacity-60 animate-pulse">Loading…</span>
            )}
          </div>
          {data && (
            <div className="mt-3 grid grid-cols-4 gap-2 text-center text-xs">
              <div className={`rounded-full py-1 ${theme.pill}`}>D {data.components.D}</div>
              <div className={`rounded-full py-1 ${theme.pill}`}>E {data.components.E}</div>
              <div className={`rounded-full py-1 ${theme.pill}`}>S {data.components.S}</div>
              <div className={`rounded-full py-1 ${theme.pill}`}>R {data.components.R}</div>
            </div>
          )}
          <div className="mt-2 text-[11px] opacity-70">* Rates update periodically. Experimental visualization of how your choice is valorized.</div>
        </section>

        {/* 액션 */}
        <section className="grid grid-cols-1 gap-3">
          <button onClick={() => act("redeem")} className="cts-btn-primary disabled:opacity-50" disabled={busy}>
            환전하기 · Redeem
          </button>
          <button onClick={() => act("donate")} className="cts-btn-ghost disabled:opacity-50" disabled={busy}>
            기부로 전환 · Donate Instead
          </button>
          <details className="rounded-xl p-3 border border-white/10">
            <summary className="cursor-pointer">진위 확인 · Verify</summary>
            <div className="mt-2 text-sm opacity-80">
              Coin ID <span className="font-mono">{coinId}</span>, token <span className="font-mono">{token}</span>.
              <br />Data is simulated for exhibition; no personal data collected.
            </div>
          </details>
          {msg && <div className="text-sm mt-1 opacity-90">{msg}</div>}
        </section>

        <footer className="mt-8 text-[11px] opacity-70 leading-relaxed">
          데이터 사용: 스캔 시간과 코인 ID만 기록. 위치·얼굴 정보는 수집하지 않습니다.
          환율은 재난·정동·참여 지표에 연동됩니다.
        </footer>
      </div>
    </div>
  );
}