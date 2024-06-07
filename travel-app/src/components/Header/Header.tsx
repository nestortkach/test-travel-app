import React, { useState } from "react";
import ArrowOpenerIcon from "../../assets/Icons/ArrowOpenerIcon";

const Header: React.FC = () => {
  const [showDaysSelector, setShowDaysSelector] = useState(false);
  const [selectedDays, setSelectedDays] = useState<number | null>(null);

  const handleChangeDays = (days: number) => {
    setSelectedDays(days);
    setShowDaysSelector(false);
  };

  return (
    <header className="flex items-center justify-between bg-white p-8">
      <div className="flex space-x-4 items-center border px-4 rounded-3xl font-semibold">
        <button className="p-2 border-r pr-4">Trips</button>
        <button className="p-2 border-r pr-4">Iceland</button>
        <div className="flex relative">
          <button
            className="p-2 pr-4 flex items-center gap-2"
            onClick={() => setShowDaysSelector(!showDaysSelector)}
          >
            {selectedDays ? `${selectedDays} days` : "Days"}
            <ArrowOpenerIcon />
          </button>
          {showDaysSelector && (
            <div className="absolute top-full left-0 bg-white border rounded-lg shadow-lg py-2">
              {[5, 6, 7, 8, 9, 10].map((day) => (
                <button
                  key={day}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  onClick={() => handleChangeDays(day)}
                >
                  {day} days
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="border p-2 px-4 rounded-3xl space-x-4">
        <button className="font-semibold">+ Create</button>
      </div>
    </header>
  );
};

export default Header;
