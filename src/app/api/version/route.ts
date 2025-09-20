import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const commitHash = process.env.VERCEL_GIT_COMMIT_SHA || "local-dev";
  const commitMessage = process.env.VERCEL_GIT_COMMIT_MESSAGE || "local development";
  const deployTime = process.env.VERCEL_GIT_COMMIT_REF || new Date().toISOString();
  
  return NextResponse.json({
    ok: true,
    commit: commitHash,
    message: commitMessage,
    branch: deployTime,
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
}
