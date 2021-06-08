import { createAction } from "@reduxjs/toolkit";
import { IStake } from "./reducer";

export const setUserStaking = createAction<IStake>("stake/setUserStaking");
