import { useWeb3React } from "@web3-react/core";
import { STAKING_POOL } from "constants/Addresses";
import { useCallback, useState } from "react";
import { useUserPlan } from "state/stake/hooks";
import { useKwik, useKwikStake } from "./useSC";

export const useApprove = () => {
  const kwik = useKwik();
  const { stakeAmount } = useUserPlan();
  const [isApproved, setApproved] = useState<boolean>(false);
  const { library } = useWeb3React();
  const approvalCallback = useCallback(async () => {
    if (!kwik || !library) return null;
    kwik
      .connect(library.getSigner())
      .approve(STAKING_POOL, stakeAmount)
      .then((tx) => {
        setApproved(true);
      });
  }, [kwik, stakeAmount, library]);
  return {
    approvalCallback,
    isApproved,
  };
};

export const useStake = () => {
  const staking = useKwikStake();
  const { stakeAmount } = useUserPlan();
  const [isStaked, Staked] = useState<boolean>(false);

  const { library } = useWeb3React();

  const stakeCallback = useCallback(async () => {
    if (!staking || !library) return null;
    staking
      .connect(library.getSigner())
      .depositTokens(stakeAmount)
      .then((tx) => {
        Staked(true);
      });
  }, [staking, stakeAmount, library]);
  return {
    stakeCallback,
    isStaked,
  };
};
