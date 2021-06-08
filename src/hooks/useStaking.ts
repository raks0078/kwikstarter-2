import { useEffect, useState } from "react";
import { fromWei } from "web3-utils";
import { useKwikStake } from "./useSC";

export const useStaking = () => {
  const [aggregateStakings, setAggregatedStakings] = useState<number>();
  const staking = useKwikStake();

  useEffect(() => {
    async function fetchTotalStaked() {
      if (staking) {
        const totalStaked = await staking.totalStaked();
        setAggregatedStakings(Number(fromWei(String(totalStaked))));
      }
    }
    fetchTotalStaked();
  }, [staking]);

  return aggregateStakings;
};
