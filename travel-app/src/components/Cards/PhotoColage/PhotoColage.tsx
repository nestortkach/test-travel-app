import React from "react";
import AuroraImage from "../../../assets/Images/Aurora.png";
import WaterfallImage from "../../../assets/Images/Waterfall.png";
import RiverImage from "../../../assets/Images/River.png";
import HousesImage from "../../../assets/Images/Houses.png";
import IceImage from "../../../assets/Images/Ice.png";
import ColageIcon from "../../../assets/Icons/ColageIcon";

const PhotoColage: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-4 grid-rows-2 gap-4 rounded-3xl overflow-hidden">
      <img
        className="col-span-2 row-span-2 w-full h-full object-cover"
        src={AuroraImage}
        alt="Aurora"
      />

      <img
        className="col-span-1 row-span-1 object-cover"
        src={WaterfallImage}
        alt="Waterfall"
      />

      <img
        className="col-span-1 row-span-1 object-cover"
        src={RiverImage}
        alt="River"
      />

      <img
        className="col-span-1 row-span-1 object-cover"
        src={HousesImage}
        alt="Houses"
      />

      <div className="relative">
        <img
          className="col-span-1 row-span-1 object-contain"
          src={IceImage}
          alt="Ice"
        />

        <button className="absolute bottom-2 right-2 bg-sky-800 bg-opacity-90 rounded-3xl text-white text-md px-1 flex items-center">
          <ColageIcon />
          All photos
        </button>
      </div>
    </div>
  );
};

export default PhotoColage;
