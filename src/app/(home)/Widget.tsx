// src/app/(home)/Widget.tsx
"use client";

import dynamic from "next/dynamic";
import { LifiSkeleton } from "./LifiClient";

const LifiClient = dynamic(
  () => import("./LifiClient").then((m) => m.LifiClient),
  {
    ssr: false,
    loading: () => <LifiSkeleton />,
  }
);

export function GlobalHiveSwapWidget() {
  return <LifiClient />;
}
