import React, { useRef } from "react";
import Layout from "./layout/Layout";
import PhotoColage from "./components/Cards/PhotoColage/PhotoColage";
import TripInfoCardBlock from "./components/Cards/TripInfoCardBlock/TripInfoCardBlock";
import CommentCard from "./components/Cards/Comments/CommentCard";
import RouteCard from "./components/Cards/RouteCard/RouteCard";
import RegionOverview from "./components/RegionOverviev/RegionOverview";
import { IRegion } from "./interfaces";
import { regions } from "./MockedRegions";

const App: React.FC = () => {
  const regionRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleScroll = () => {
    if (regionRefs.current[0]) {
      regionRefs.current[0].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <PhotoColage />
      <TripInfoCardBlock onViewItinerary={handleScroll} />

      <div className="pt-8">
        <CommentCard />
      </div>

      <div className="pt-8">
        <RouteCard />
      </div>

      {regions.map((region: IRegion, idx) => (
        <div
          key={idx}
          ref={(el) => (regionRefs.current[idx] = el)}
          className="pt-2"
        >
          <RegionOverview region={region} />
        </div>
      ))}
    </Layout>
  );
};

export default App;
