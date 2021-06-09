import { useWeb3React } from "@web3-react/core";
import { STAKING_POOL } from "constants/Addresses";
import { useCallback, useState } from "react";
import { useUserPlan } from "state/stake/hooks";
import { toWei } from "web3-utils";
import { useKwik, useKwikStake } from "./useSC";

export const useApprove = () => {
  const kwik = useKwik();
  const { stakeAmount } = useUserPlan();
  const parsedStakedAmount = toWei(String(stakeAmount));
  const [isApproved, setApproved] = useState<boolean>(false);
  const { library } = useWeb3React();
  const approvalCallback = useCallback(async () => {
    if (!kwik || !library) return null;
    kwik
      .connect(library.getSigner())
      .approve(STAKING_POOL, parsedStakedAmount)
      .then((tx) => {
        setApproved(true);
      });
  }, [kwik, parsedStakedAmount, library]);
  return {
    approvalCallback,
    isApproved,
  };
};

export const useStake = () => {
  const staking = useKwikStake();
  const { stakeAmount } = useUserPlan();
  const [isStaked, Staked] = useState<boolean>(false);
  const parsedStakedAmount = toWei(String(stakeAmount));
  const { library } = useWeb3React();

  const stakeCallback = useCallback(async () => {
    if (!staking || !library) return null;
    staking
      .connect(library.getSigner())
      .depositTokens(parsedStakedAmount)
      .then((tx) => {
        Staked(true);
      });
  }, [staking, library, parsedStakedAmount]);
  return {
    stakeCallback,
    isStaked,
  };
};
