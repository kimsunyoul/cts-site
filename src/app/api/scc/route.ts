import { NextResponse } from "next/server";
import { computeRate } from "@/lib/scc";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const coinId = searchParams.get("coinId") || "";
  const t = searchParams.get("t") || "";

  if (!coinId) {
    return NextResponse.json({ ok: false, error: "coinId missing" }, { status: 400 });
  }

  // TODO: 실제 운영 시 t 서명 검증 추가
  const rate = computeRate(coinId);

  return NextResponse.json({
    ok: true,
    coinId,
    token: t ? "ok" : "dev",
    timestamp: Date.now(),
    ...rate,
  });
}

/**
 * 전시장 데모용 목업 API
 * 실제 운영: DB(KV) 연동, 1회성 처리, 서명 검증(HMAC/JWT) 필요
 */
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { coinId, action = "redeem", t = "dev" } = body || {};
  if (!coinId) return NextResponse.json({ ok: false, error: "coinId missing" }, { status: 400 });

  const message =
    action === "donate"
      ? "Coin converted to donation points (mock)."
      : "Coin redeemed to SSC (mock).";

  return NextResponse.json({
    ok: true,
    coinId,
    action,
    token: t ? "ok" : "dev",
    message,
  });
}
