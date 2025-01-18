import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mantleSepoliaTestnet, polygon } from "@reown/appkit/networks";
import { cookieStorage, createStorage, http } from "@wagmi/core";

// Get projectId from https://cloud.reown.com
// export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
export const projectId = "92a187f1e8182a6e4e0314b941f4b380";

if (!projectId) {
  throw new Error("Project ID is not defined in env file");
}

export const networks = [mantleSepoliaTestnet, polygon];

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
