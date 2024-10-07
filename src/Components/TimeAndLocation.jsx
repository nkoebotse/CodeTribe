import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div className="bg-gray-800 bg-opacity-80 rounded-lg shadow-lg p-4 my-6 max-w-md mx-auto"> {/* Card Style */}
      <div className="flex items-center justify-center">
        <p className="text-white text-xl font-light">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-bold">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
