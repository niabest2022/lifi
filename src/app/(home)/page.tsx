// src/app/(home)/page.tsx
"use client";

import { useCallback } from "react";
import { GlobalHiveSwapWidget } from "./Widget";

export default function Home() {
  const handleClose = useCallback((): void => {
    if (typeof window === "undefined") return;
    window.close();
  }, []);

  return (
    <div className="max-w-[520px] mx-auto p-6">
      <div className="mb-6 text-center">
        <div className="mb-3 flex justify-center">
          <button
            type="button"
            onClick={handleClose}
            className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            거래소로 돌아가기
          </button>
        </div>

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
