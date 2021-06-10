import { createReducer } from "@reduxjs/toolkit";
import { setUserStaking } from "./action";

export interface IStake {
  stakeAmount: number;
  activePlanName: string | undefined;
  poolWeight: number;
  poolSrc: string | undefined;
}

const initialStake: IStake = {
  stakeAmount: 1000,
  activePlanName: undefined,
  poolWeight: 30,
  poolSrc: undefined,
};

const stake = createReducer<IStake>(initialStake, (builder) => {
  builder.addCase(
    setUserStaking,
    (
      state,
      { payload: { stakeAmount, activePlanName, poolWeight, poolSrc } }
    ) => {
      return {
        ...state,
        stakeAmount,
        activePlanName,
        poolWeight,
        poolSrc,
      };
    }
  );
});

export default stake;
