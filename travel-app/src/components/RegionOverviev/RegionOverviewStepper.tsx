import MagicIcon from "../../assets/Icons/MagicIcon";
import BedIcon from "../../assets/Icons/BedIcon";

const RegionOverviewStepper = () => {
  return (
    <div className="absolute h-full w-[15px]">
      <div className="w-6 h-6 bg-purple absolute rounded-full left-[-10px] top-[0.5%] flex items-center z-10 justify-center text-white ">
        A
      </div>
      <div className="w-6 h-6 bg-gray-400 absolute rounded-full left-[-10px] top-[18.5%] z-10  flex items-center justify-center text-white">
        <MagicIcon />
      </div>
      <div className="w-6 h-6 bg-gray-400 absolute rounded-full left-[-10px] bottom-[38%] flex items-center justify-center z-10 text-white">
        <BedIcon />
      </div>

      <div className="w-[2px] h-[57%] border absolute top-8" />
    </div>
  );
};

export default RegionOverviewStepper;
