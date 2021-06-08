import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AppDispatch, AppState } from "state";
import { setUserStaking } from "./action";

export const useUserPlan = () => {
  return useSelector((state: AppState) => state.stake);
};

export const useUpgradeUserPlan = () => {
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();

  return useCallback(
    (stakeAmount, poolWeight, poolSrc, planNName) => {
      dispatch(
        setUserStaking({
          stakeAmount,
          activePlanName: planNName,
          poolWeight,
          poolSrc,
        })
      );

      // redirect to /staking page
      history.push("/staking");
    },
    [dispatch, history]
  );
};
