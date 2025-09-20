"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SCCIndexPage() {
  const [coinId, setCoinId] = useState("");
  const router = useRouter();

  const openCoin = () => {
    if (!coinId.trim()) return;
    router.push(`/scc/${encodeURIComponent(coinId.trim())}?t=dev`);
  };

  return (
    <div className="mx-auto max-w-screen-md px-6 py-10">
      <h1 className="text-3xl font-semibold">Safe Coin Center (SCC)</h1>
      <p className="mt-2 text-sm opacity-80">
        코인 ID를 입력해 환전/기부 페이지로 이동합니다. 실제 전시에서는 QR에 포함된 URL로 바로 연결됩니다.
      </p>

      <div className="mt-6 flex gap-2">
        <input
          value={coinId}
          onChange={(e) => setCoinId(e.target.value)}
          placeholder="예: 0001 / blue123"
          className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 outline-none focus:border-white/40"
        />
        <button onClick={openCoin} className="rounded-xl px-5 py-3 font-semibold bg-white text-black hover:opacity-90">
          열기
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 text-sm">
        {["0001", "blue123", "alpha7", "scc-42"].map((id) => (
          <a key={id} href={`/scc/${id}?t=dev`} className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 hover:bg-white/10">
            /scc/{id}
          </a>
        ))}
      </div>
    </div>
  );
}
