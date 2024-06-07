import React, { SetStateAction } from "react";
import Button from "../Buttons/Button";
import MagicBlackIcon from "../../assets/Icons/MagicBlackIcon";
import { IDailyPlan, IRegion } from "../../interfaces";
import DailyPlan from "./DailyPlan";
import MagicIcon from "../../assets/Icons/MagicIcon";
import BedIcon from "../../assets/Icons/BedIcon";

interface IProps {
  region: IRegion;
  setShowDailyPlan: React.Dispatch<SetStateAction<boolean>>;
}

const DailyPlanContainer = ({ region, setShowDailyPlan }: IProps) => {
  return (
    <div className="relative space-x-8">
      <div className="h-full border bg-gray-400 z-10 top-8 absolute">
        <div className="w-6 h-6  bg-gray-400 absolute rounded-full left-[-12px] top-[-3%] flex items-center z-10 justify-center text-white ">
          <MagicIcon />
        </div>

        <div className="w-6 h-6 bg-gray-400  absolute rounded-full left-[-12px] bottom-[-2%] z-10  flex items-center justify-center text-white">
          <BedIcon />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="font-semibold">2 days plan</h1>
        <Button
          onClick={() => setShowDailyPlan(false)}
          label="Show highlights"
          startIcon={<MagicBlackIcon />}
        />
      </div>

      {region.dailyPlans.map((plan: IDailyPlan, idx: number) => (
        <DailyPlan key={idx} plan={plan} />
      ))}
    </div>
  );
};

export default DailyPlanContainer;
