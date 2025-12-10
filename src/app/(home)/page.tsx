// src/app/(home)/page.tsx
"use client";

import { GlobalHiveSwapWidget } from "./Widget";

export default function Home() {
  return (
    <div className="max-w-[520px] mx-auto p-6">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Global Hive Swap
        </h1>
        <p className="text-sm text-muted-foreground">
          Swap &amp; bridge on BSC
        </p>
      </div>

      <GlobalHiveSwapWidget />
    </div>
  );
}
