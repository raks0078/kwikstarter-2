import GRASSHOPPERIcon from "../../images/FINAL-ROCKETS-01.svg";
import FALCONONEIcon from "../../images/FINAL-ROCKETS-02.svg";
import DRAGONIcon from "../../images/FINAL-ROCKETS-03.svg";
import FALCONHEAVYIcon from "../../images/FINAL-ROCKETS-04.svg";
import STARSHIPIcon from "../../images/FINAL-ROCKETS-05.svg";
import MOONBaseIcon from "../../images/FINAL-ROCKETS-06.svg";

interface IPlans {
  [name: string]: {
    planName: string;
    neededStakeAmount: number;
    planSrc: string;
    poolWeight: number;
    isWhiteListed: boolean;
  };
}

export const plans: IPlans = {
  GRASSHOPPER: {
    planName: "GRASSHOPPER",
    neededStakeAmount: 1000,
    planSrc: GRASSHOPPERIcon,
    poolWeight: 10,
    isWhiteListed: true,
  },
  FALCONONE: {
    planName: "FALCON ONE",
    neededStakeAmount: 2000,
    planSrc: FALCONONEIcon,
    poolWeight: 30,
    isWhiteListed: true,
  },
  DRAGON: {
    planName: "DRAGON",
    neededStakeAmount: 5000,
    planSrc: DRAGONIcon,
    poolWeight: 60,
    isWhiteListed: false,
  },
  FALCONHEAVY: {
    planName: "FALCON HEAVY",
    neededStakeAmount: 10000,
    planSrc: FALCONHEAVYIcon,
    poolWeight: 130,
    isWhiteListed: false,
  },
  STARSHIP: {
    planName: "STARSHIP",
    neededStakeAmount: 20000,
    planSrc: STARSHIPIcon,
    poolWeight: 400,
    isWhiteListed: false,
  },
  MOONBASE: {
    planName: "MOON BASE",
    neededStakeAmount: 0,
    planSrc: MOONBaseIcon,
    poolWeight: 0,
    isWhiteListed: false,
  },
};
