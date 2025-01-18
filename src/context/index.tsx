"use client";

import { mantleSepoliaTestnet, polygon } from "@reown/appkit/networks";
import { createAppKit } from "@reown/appkit/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { type ReactNode } from "react";
import { cookieToInitialState, WagmiProvider, type Config } from "wagmi";
import { projectId, wagmiAdapter } from "../config/index";

// Set up queryClient
const queryClient = new QueryClient();

if (!projectId) {
  throw new Error("Project ID is not defined");
}

// Set up metadata
const metadata = {
  name: "apt casino",
  description: "apt casino website",
  url: "https://apt-casino.vercel.app", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// Create the modal
const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mantleSepoliaTestnet, polygon],
  defaultNetwork: mantleSepoliaTestnet,
  metadata: metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    email: true, // default to true
    emailShowWallets: true, // default to true
    socials: [
      "google",
      "x",
      "github",
      "discord",
      "apple",
      "facebook",
      "farcaster",
    ],
  },
});

function ContextProvider({
  children,
  cookies,
}: {
  children: ReactNode;
  cookies: string | null;
}) {
  const initialState = cookieToInitialState(
    wagmiAdapter.wagmiConfig as Config,
    cookies
  );

  return (
    <WagmiProvider
      config={wagmiAdapter.wagmiConfig as Config}
      initialState={initialState}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

export default ContextProvider;
