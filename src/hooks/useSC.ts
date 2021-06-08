import { useWeb3React } from "@web3-react/core";
import STAKINGPOOLABI from "../constants/ABIS/StakingPool.json";
import KWIKABI from "../constants/ABIS/Kwik.json";
import { KWIKAddress, STAKING_POOL } from "constants/Addresses";
import { Contract, ContractInterface } from "ethers";

export const useSC = (ABI: ContractInterface, cAddress: string) => {
  const { library } = useWeb3React();
  if (!library) return null;
  return new Contract(cAddress, ABI, library);
};

export const useKwik = () => {
  return useSC(KWIKABI, KWIKAddress);
};

export const useKwikStake = () => {
  return useSC(STAKINGPOOLABI, STAKING_POOL);
};
