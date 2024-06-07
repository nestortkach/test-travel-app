import BedIcon from "../../assets/Icons/BedIcon";
import MagicIcon from "../../assets/Icons/MagicIcon";
import MoreIcon from "../../assets/Icons/MoreIcon";
import { IRegionInfoSwiper } from "../../interfaces";
import Button from "../Buttons/Button";
import Swiper from "../Swipers/Swiper";

const RegionInfoSwiper = ({
  label,
  data,
  button,
  showDivider,
}: IRegionInfoSwiper) => {
  return (
    <div className="relative space-x-8">
      {showDivider ? (
        <div className="h-full border bg-gray-400 z-10 top-8 absolute">
          <div className="w-6 h-6  bg-gray-400 absolute rounded-full left-[-12px] top-[-4%] flex items-center z-10 justify-center text-white ">
            <MagicIcon />
          </div>

          <div className="w-6 h-6 bg-gray-400  absolute rounded-full left-[-12px] bottom-[-2%] z-10  flex items-center justify-center text-white">
            <BedIcon />
          </div>
        </div>
      ) : (
        <div />
      )}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{label}</h3>
        {button}
      </div>
      <div className="mt-4">
        <Swiper data={data} />
      </div>
    </div>
  );
};

export default RegionInfoSwiper;
