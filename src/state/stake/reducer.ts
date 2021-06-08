import { createReducer } from "@reduxjs/toolkit";
import { setUserStaking } from "./action";

export interface IStake {
  stakeAmount: number;
  activePlanName: string | undefined;
  poolWeight: number;
  poolSrc: string | undefined;
}

const initialStake: IStake = {
  stakeAmount: 0,
  activePlanName: undefined,
  poolWeight: 0,
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
