import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import getLibrary from "../utils/getLibrary";
import { LedgerConnector } from "@web3-react/ledger-connector";
import { TrezorConnector } from "@web3-react/trezor-connector";
import { NetworkConnector } from "./NetworkConnector";
import { BscConnector } from "@binance-chain/bsc-connector";
import KWIK_APP_URI from "../assests/images/kwikstarter-transparent.png";

const INFURA_KEY = process.env.REACT_APP_INFURA_KEY;
const WALLETCONNECT_BRIDGE_URL = process.env.REACT_APP_WALLETCONNECT_BRIDGE_URL;

if (typeof INFURA_KEY === "undefined") {
  throw new Error(
    `REACT_APP_INFURA_KEY must be a defined environment variable`
  );
}

const NETWORK_URLS: {
  [chainId: number]: string;
} = {
  [56]: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  [97]: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
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
  infuraId: INFURA_KEY,
  bridge: WALLETCONNECT_BRIDGE_URL,
  qrcode: true,
  pollingInterval: 15000,
});

export const binanceWallet = new BscConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
});

export const ledger = new LedgerConnector({
  chainId: 1,
  url: NETWORK_URLS[56],
});

export const trezor = new TrezorConnector({
  chainId: 56,
  url: NETWORK_URLS[56],
  manifestEmail: "admin@kwikstater,org",
  manifestAppUrl: KWIK_APP_URI,
});
