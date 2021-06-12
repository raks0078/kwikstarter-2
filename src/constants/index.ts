import { AbstractConnector } from "@web3-react/abstract-connector";
import INJECTED_ICON_URL from "../assests/connectors/metamask-logo.png";
import TREZOR_ICON_URL from "../assests/connectors/trezor.png";
import LEDGER_ICON_URL from "../assests/connectors/ledger.png";
import BINANCE_ICON_URL from "../assests/connectors/binance-wallet.png";
import METAMASK_ICON_URL from "../assests/connectors/metamask-logo.png";
import TRUSTWALLET_ICON_URL from "../assests/connectors/trustwallet.png";

import {
  injected,
  trustwallet,
  binanceWallet,
  ledger,
  trezor,
} from "../connectors";

export interface WalletInfo {
  connector?: AbstractConnector;
  name: string;
  iconURL: string;
  description: string;
  href: string | null;
  color: string;
  primary?: true;
  mobile?: true;
  mobileOnly?: true;
}

export const NetworkContextName = "NETWORK";

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  METAMASK: {
    connector: injected,
    name: "MetaMask",
    iconURL: METAMASK_ICON_URL,
    description: "Metamask Browser Extension Trusted by 10 million users.",
    href: null,
    color: "#E8831D",
  },
  TRUST_WALLET: {
    connector: trustwallet,
    name: "Trust Wallet",
    iconURL: TRUSTWALLET_ICON_URL,
    description: "Connect to Trust Wallet",
    href: null,
    color: "#4196FC",
    mobile: true,
  },
  BINANCE_WALLET: {
    connector: binanceWallet,
    name: "BSC Wallet",
    iconURL: BINANCE_ICON_URL,
    description: "Using BSC Wallet",
    href: null,
    color: "#315CF5",
  },
  TREZOR: {
    connector: trezor,
    name: "Trezor",
    iconURL: TREZOR_ICON_URL,
    description: "Safe & Secure Hardware Wallet",
    href: null,
    color: "#315CF5",
  },
  LEDGER: {
    connector: ledger,
    name: "Ledger",
    iconURL: LEDGER_ICON_URL,
    description: "Safe & Secure Hardware Wallet",
    href: null,
    color: "#315CF5",
  },
};
