import RegionShortInfo from "./RegionShortInfo";
import RegionInfoSwiper from "./RegionInfoSwiper";
import Button from "../Buttons/Button";
import MoreIcon from "../../assets/Icons/MoreIcon";
import RegionOverviewStepper from "./RegionOverviewStepper";
import { IDailyPlan, IRegion } from "../../interfaces";
import { useState } from "react";
import MagicIcon from "../../assets/Icons/MagicIcon";
import MagicBlackIcon from "../../assets/Icons/MagicBlackIcon";
import DailyPlan from "../DailyPlan/DailyPlan";
import DailyPlanContainer from "../DailyPlan/DailyPlanContainer";

interface IProps {
  region: IRegion;
}

const RegionOverview = ({ region }: IProps) => {
  const [showDailyPlan, setShowDailyPlan] = useState<boolean>(false);
  return (
    <div className="space-y-4 space-x-8">
      {/* <RegionOverviewStepper /> */}

      <div>
        <RegionShortInfo
          name={region.name}
          points={region.points}
          description={region.description}
        />
        <div className="pt-4 space-y-8">
          {showDailyPlan ? (
            <DailyPlanContainer
              setShowDailyPlan={setShowDailyPlan}
              region={region}
            />
          ) : (
            <RegionInfoSwiper
              showDivider={true}
              label="Region highlights"
              data={region.higlights}
              button={
                <Button
                  onClick={() => setShowDailyPlan(true)}
                  label="Show daily plan"
                  startIcon={<MoreIcon />}
                />
              }
            />
          )}
        </div>
        <div className="pt-4">
          <RegionInfoSwiper label="Where to stay" data={region.stopPlaces} />
        </div>
      </div>
    </div>
  );
};

export default RegionOverview;
