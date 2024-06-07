import React from "react";
import { IHiglight, IStopPlace } from "../../../interfaces";
import ArrowRiseIcon from "../../../assets/Icons/ArrowRiseIcon";
import GrayMarkIcon from "../../../assets/Icons/GrayMarkIcon";

interface IProps {
  card: IStopPlace | IHiglight;
}

const ProductCard: React.FC<IProps> = ({ card }) => {
  return (
    <div className="w-[220px] space-y-2 relative">
      {card.curator && (
        <div className="bg-gray-300 bg-opacity-80 left-3 top-3 rounded-xl text-gray-500 text-sm px-2 py-1 absolute">
          Curator’s pick
        </div>
      )}

      <div className="absolute top-3 right-5 cursor-pointer">
        <GrayMarkIcon />
      </div>
      <img
        className="object-fill w-full h-[300px] rounded-2xl"
        src={card.image}
        alt="aurora"
      />

      <div>
        <h2 className="font-semibold">{card.title}</h2>
        {card.rate && (
          <div className="text-sm font-semibold flex items-center gap-2">
            <ArrowRiseIcon />
            <span>{card.rate}/10</span>
          </div>
        )}
        <span className="text-sm text-gray-400">{card.additionalInfo}</span>
      </div>
    </div>
  );
};

export default ProductCard;
