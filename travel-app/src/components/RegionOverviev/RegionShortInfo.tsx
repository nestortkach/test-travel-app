import { IRegionShortInfo } from "../../interfaces";

const RegionShortInfo = ({ name, description, points }: IRegionShortInfo) => {
  return (
    <div className="relative space-x-8">
      <div className="h-full border bg-gray-400 z-10 top-8 absolute">
        <div className="w-6 h-6 bg-purple absolute rounded-full left-[-12px] top-[-11%] lg:top-[-16%] flex items-center z-10 justify-center text-white ">
          A
        </div>
      </div>
      <div>
        <div>
          <h1 className="font-semibold text-2xl">{name}</h1>
          <div className="flex gap-4 text-sm text-gray-400">
            {points.map((point, idx) => (
              <div key={idx}>
                <span key={idx}>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <span className="text-sm text-gray-500">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default RegionShortInfo;
