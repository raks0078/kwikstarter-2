import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { fromWei } from "web3-utils";
import { useKwik } from "./useSC";

export const useBalance = () => {
  const [balance, setBalance] = useState<number | null>();
  const { account, active, library } = useWeb3React();
  useEffect(() => {
    if (account && library)
      library.getBalance(account).then((balance: any) => {
        const parsed = Number(fromWei(String(balance)));
        setBalance(parsed);
      });
  }, [account, active, library]);

  return balance;
};

export const useKwikBalance = () => {
  const [balance, setBalance] = useState<number | null>();
  const { account, active } = useWeb3React();
  const kwik = useKwik();
  useEffect(() => {
    if (account && kwik) {
      kwik.balanceOf(account).then((balance) => {
        const parsed = Number(fromWei(String(balance)));
        setBalance(parsed);
      });
    }
  }, [account, active, kwik]);

  return balance;
};
