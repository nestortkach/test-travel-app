import React from "react";

const info = [
  { label: "Trip  duration", value: "7 days" },
  { label: "Exploration", value: "4 regions" },
  { label: "Flight", value: "7h 20m from SFO" },
];

interface IProps {
  onViewItinerary: () => void;
}

const TripInfoCardBlock: React.FC<IProps> = ({ onViewItinerary }) => {
  return (
    <div className="flex justify-between p-6 border rounded-3xl items-center">
      {info.map((infoBlock, idx) => (
        <div key={idx}>
          <h4 className="text-sm text-gray-400">{infoBlock.label}</h4>
          <span className="text-sm font-semibold">{infoBlock.value}</span>
        </div>
      ))}
      <button className="text-purple text-sm" onClick={onViewItinerary}>
        View itinerary
      </button>
    </div>
  );
};

export default TripInfoCardBlock;
