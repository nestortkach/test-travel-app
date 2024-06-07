import React from "react";
import { IDailyPlan, IDailyPlanPlace } from "../../interfaces";
import Button from "../Buttons/Button";
import StrangeArrowIcon from "../../assets/Icons/StrangeArrowIcon";
import ThreeDotsIcon from "../../assets/Icons/ThreeDotsIcon";
import TwoLinesIcon from "../../assets/Icons/TwoLinesIcon";

interface IProps {
  plan: IDailyPlan;
}

const DailyPlan = ({ plan }: IProps) => {
  return (
    <div className="space-y-4 mt-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{plan.title}</h3>
        <div className="flex items-center gap-2 cursor-pointer">
          <StrangeArrowIcon />
          <span className="text-gray-500">{plan.time}</span>
          <ThreeDotsIcon />
        </div>
      </div>

      <div className="space-y-4">
        {plan.places.map((place: IDailyPlanPlace, idx: number) => (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="w-[96px] h-[132px] object-cover rounded-xl overflow-hidden">
                <img src={place.image} className="w-full h-full" />
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">{place.name}</h3>
                {place.curator && (
                  <div className="p-2 bg-gray-200 text-gray-500 rounded-lg text-sm w-fit">
                    Curator’s pick
                  </div>
                )}
                <h4 className="text-gray-500 text-sm">
                  {place.additionalInfo}
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <TwoLinesIcon />
              <ThreeDotsIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyPlan;
