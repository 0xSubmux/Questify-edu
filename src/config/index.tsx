import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mantleSepoliaTestnet, polygon } from "@reown/appkit/networks";
import { cookieStorage, createStorage } from "@wagmi/core";

// Get projectId from https://cloud.reown.com
export const projectId = "92a187f1e8182a6e4e0314b941f4b380";

export const metadata = {
  name: "Questify",
  description:
    "Questify is a blockchain-based community platform where users can ask and answer questions in various science and technology categories. The platform incentivize knowledge sharing by rewarding users with tokens for receiving likes on their answers.",
  url: "https://questify-edu.vercel.app/", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

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
