import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "POLOKWANE",
    },
    {
      id: 2,
      title: "PRETORIA",
    },
    {
      id: 3,
      title: "FREE STATE",
    },
    {
      id: 4,
      title: "DURBAN",
    },
    {
      id: 5,
      title: "CAPE TOWN",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          { console.log({ q: city.title })}
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
