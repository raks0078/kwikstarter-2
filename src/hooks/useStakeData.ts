import { Contract } from "@ethersproject/contracts";
import { useEffect, useState } from "react";
import { useKwik, useKwikStake } from "./useSC";
import _ from "lodash";
import { useWeb3React } from "@web3-react/core";
import { fromWei } from "web3-utils";

interface StakeData {
  stakedAmount: number;
  unStakedAmount: number;
  reward: number;
  startDate: number;
}

export const getAllStakes = async (
  instance: Contract | null,
  userStakeIds: number[]
) => {
  if (!instance || _.isEmpty(userStakeIds)) return null;
  const promises: any[] = [];
  for (let k = 0; k < userStakeIds.length; k++) {
    const stakes = await instance.stakes(userStakeIds[k]);
    promises.push(stakes);
  }

  const stake = await Promise.all(promises).then((items) => items);
  if (_.isEmpty(stake)) return null;

  const results = stake.map((items) => {
    return {
      user: items.user,
      amount: Number(fromWei(String(items.amount))),
      startDate: String(items.timestamp),
      unlockingTime: String(items.unlockingTime),
      isWithdrawn: items.isWithdrawn,
    };
  });

  return results;
};

export const getStakeIds = async (
  instance: Contract | null,
  account: string | null | undefined
) => {
  if (!instance || !account) return null;
  const userStakeIds = await instance.getUserStakeIds(account);
  return userStakeIds.map((items) => {
    return Number(String(items));
  });
};

export const useStakeData = () => {
  const [stakingDetails, setStakingDetails] = useState<StakeData | null>(null);
  const stakingInstance = useKwikStake();

  const { account } = useWeb3React();

  useEffect(() => {
    const fetchStakingDetails = async () => {
      if (!stakingInstance) return null;
      const userStakeIds = await getStakeIds(stakingInstance, account);
      const stakes = await getAllStakes(stakingInstance, userStakeIds);

      const amounts = stakes?.map((values) => {
        return values.amount;
      });

      const totalStakedEver = _.sum(amounts);
    };
    fetchStakingDetails();
  }, [stakingInstance, account]);
};
