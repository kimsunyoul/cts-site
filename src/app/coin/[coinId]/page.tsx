import type { Metadata } from "next";
import SCCLanding from "@/components/SCCLanding";

export const dynamic = "force-dynamic";

type Props = {
  params: { coinId: string };
  searchParams: { t?: string; v?: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Safe Coin | ${params.coinId}`,
    description: "Convert the crisis into stability.",
  };
}

export default function Page({ params, searchParams }: Props) {
  const token = searchParams?.t ?? "dev"; // 일단 dev 토큰
  return <SCCLanding coinId={params.coinId} token={token} />;
}
