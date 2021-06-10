import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import getLibrary from "../utils/getLibrary";
import { LedgerConnector } from "@web3-react/ledger-connector";
import { TrezorConnector } from "@web3-react/trezor-connector";
import { NetworkConnector } from "./NetworkConnector";
import { BscConnector } from "@binance-chain/bsc-connector";
import KWIK_APP_URI from "../assests/images/kwikstarter-transparent.png";

const WALLETCONNECT_BRIDGE_URL = "https://bridge.walletconnect.org";

const NETWORK_URLS: {
  [chainId: number]: string;
} = {
  [56]: `https://bsc-dataseed.binance.org/`,
  [97]: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
};

const SUPPORTED_CHAIN_IDS = [56];

export const network = new NetworkConnector({
  urls: NETWORK_URLS,
  defaultChainId: 56,
});

let networkLibrary: Web3Provider | undefined;

export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary = networkLibrary ?? getLibrary(network.provider));
}

export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
});

export const trustwallet = new WalletConnectConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
  infuraId: NETWORK_URLS[56],
  bridge: WALLETCONNECT_BRIDGE_URL,
  qrcode: true,
  pollingInterval: 15000,
});

export const binanceWallet = new BscConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
});

export const ledger = new LedgerConnector({
  chainId: 56,
  url: NETWORK_URLS[56],
});

export const trezor = new TrezorConnector({
  chainId: 56,
  url: NETWORK_URLS[56],
  manifestEmail: "admin@kwikstater,org",
  manifestAppUrl: KWIK_APP_URI,
});
