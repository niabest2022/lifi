// src/app/(home)/LifiClient.ts

"use client";

import React from "react";
import {
  LiFiWidget,
  WidgetSkeleton,
  type WidgetConfig,
  ChainId,
  HiddenUI,
} from "@lifi/widget";

import { WagmiProvider, createConfig, http } from "wagmi";
import { injected } from "wagmi/connectors";
import { bsc } from "wagmi/chains";

// ✅ BSC만 EVM 지갑 체인으로 제공
const wagmiConfig = createConfig({
  chains: [bsc],
  connectors: [injected()],
  transports: {
    [bsc.id]: http(),
  },
  ssr: false,
});

// ✅ BSC USDT 컨트랙트(일반적으로 가장 널리 쓰이는 BSC USDT)
// CoinGecko/BscScan에 같은 주소로 안내됨
const USDT_BSC = "0x55d398326f99059fF775485246999027B3197955" as const; // :contentReference[oaicite:2]{index=2}

// ✅ GHD는 실제 BSC 컨트랙트 주소로 반드시 교체
const GHD_BSC = "0x69e855cD0c7777bf1c1CaFAeA9bb5F883a5d6c89" as const;

// ✅ 위젯 초기값 + BSC만 노출
const config: Partial<WidgetConfig> = {
  appearance: "light",
  theme: {
    container: {
      borderRadius: "16px",
      boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.08)",
    },
  },

  // 🔒 체인 필터
  chains: {
    allow: [ChainId.BSC],
  },

  // ✅ 'Powered by LI.FI' 숨김
  hiddenUI: [HiddenUI.PoweredBy],

  // ⭐ 초기 화면에서 From/To 체인 & 토큰 고정 세팅
  fromChain: ChainId.BSC,
  toChain: ChainId.BSC,
  fromToken: USDT_BSC,
  toToken: GHD_BSC,

  // (선택) 커스텀 토큰이 리스트에 없을 때를 대비해 메타 주입
  // GHD의 symbol/decimals/name/logoURI는 실제 값으로 교체하세요.
  // tokens: {
  //   include: [
  //     {
  //       address: GHD_BSC,
  //       chainId: ChainId.BSC,
  //       symbol: "GHD",
  //       decimals: 18,
  //       name: "GlobalHive Dollar",
  //       logoURI: "https://YOUR_CDN_OR_ASSET/GHD.png",
  //     },
  //   ],
  //   // 원하면 featured로 올려 맨 위에 노출 가능
  //   featured: [
  //     {
  //       address: GHD_BSC,
  //       chainId: ChainId.BSC,
  //       symbol: "GHD",
  //       decimals: 18,
  //       name: "GlobalHive Dollar",
  //       logoURI: "https://YOUR_CDN_OR_ASSET/GHD.png",
  //     },
  //   ],
  // },
};

export function LifiClient() {
  return React.createElement(
    WagmiProvider,
    { config: wagmiConfig },
    React.createElement(LiFiWidget, {
      config,
      integrator: "globalhive",
    })
  );
}

export function LifiSkeleton() {
  return React.createElement(WidgetSkeleton, { config });
}
