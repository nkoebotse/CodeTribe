import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    { id: 1, title: "POLOKWANE" },
    { id: 2, title: "PRETORIA" },
    { id: 3, title: "MPUMALANGA" },
    { id: 4, title: "DURBAN" },
    
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="bg-gray-700 text-white text-lg font-medium py-2 px-4 rounded-lg transition duration-300 hover:bg-gray-600"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
