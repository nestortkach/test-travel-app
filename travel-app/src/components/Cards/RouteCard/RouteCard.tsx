import { useState } from "react";

import AirplaneIcon from "../../../assets/Icons/AirplaneIcon";
import MyDatePicker from "../../DatePicker/DatePicker";
import CustomInput from "../../Inputs/CustomInput";
import HumanIcon from "../../../assets/Icons/HumanIcon";

const RouteCard = () => {
  const [countryFrom, setCountryFrom] = useState("Reykjavík, KEF");
  const [countryTo, setCountryTo] = useState("San Francisco, SFO");
  const [startDate, setStartDate] = useState(new Date(Date.now()));
  const [endDate, setEndDate] = useState(new Date(Date.now()));
  const [personCount, setPersonCount] = useState(2);

  return (
    <div className="space-y-8">
      <h1 className="font-semibold text-2xl">Iceland itinerary</h1>
      <div className="p-6 border bg-tealBlue rounded-3xl">
        <form className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 w-full">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 flex-grow w-6/12 min-w-56">
            <CustomInput
              type="text"
              value={countryFrom}
              onChange={(e) => setCountryFrom(e.target.value)}
              placeholder="Enter country from"
            />
            <div>
              <AirplaneIcon />
            </div>
            <CustomInput
              type="text"
              value={countryTo}
              onChange={(e) => setCountryTo(e.target.value)}
              placeholder="Enter country to"
            />
          </div>

          <div className="w-3/12 min-w-56">
            <MyDatePicker
              startDate={startDate}
              endDate={endDate}
              setEndDate={setEndDate}
              setStartDate={setStartDate}
            />
          </div>

          <div className="w-2/12 min-w-28">
            <CustomInput
              startIcon={<HumanIcon />}
              type="number"
              min={1}
              value={personCount}
              onChange={(e) => setPersonCount(+e.target.value)}
              placeholder="Enter person count"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RouteCard;
