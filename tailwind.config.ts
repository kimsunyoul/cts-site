import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/components/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 커스텀 팔레트 (이 키들이 바로 bg-cts-bg, bg-cts-card, bg-cts-accent)
        "cts-bg": "#0B0D12",
        "cts-card": "#161A23",
        "cts-accent": "#E0FF66",
      },
      boxShadow: {
        // shadow-soft 클래스
        soft: "0 12px 30px -12px rgba(0,0,0,0.45)",
      },
      borderRadius: {
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
