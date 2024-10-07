import React, { useState } from 'react';
import { UilSearchAlt, UilMapPinAlt } from '@iconscout/react-unicons';

function Inputs({ setQuery, units, setUnits }) {
  const [input, setInput] = useState('');

  return (
    <div className='flex flex-col items-center my-6'>
      <div className='bg-gray-800 bg-opacity-80 rounded-lg shadow-lg p-6 w-3/4 flex flex-row items-center justify-between'>
        <div className='flex flex-row w-full items-center justify-between'>
          <input
            type="text"
            placeholder='Search...'
            className='bg-white text-xl font-light p-2 w-full shadow-md focus:outline-none capitalize placeholder:lowercase rounded-l-lg'
            onChange={(e) => setInput(e.target.value)}
          />
          <UilSearchAlt 
            size={25} 
            className="cursor-pointer transition ease-out hover:scale-110" 
            onClick={() => { setQuery({ q: input }); }} 
          />
          <UilMapPinAlt 
            size={25} 
            className="cursor-pointer transition ease-out hover:scale-110" 
          />
        </div>
      </div>

      <div className='flex flex-row w-1/4 items-center justify-center mt-4'>
        <button 
          name="metric" 
          className='text-xl text-white font-bold bg-blue-500 rounded-lg py-1 px-3 hover:bg-blue-600 transition duration-200'
          onClick={() => setUnits('metric')}
        >
          °C
        </button>
        <p className='text-2xl text-white mx-1'>|</p>
        <button 
          name="imperial" 
          className='text-xl text-white font-bold bg-blue-500 rounded-lg py-1 px-3 hover:bg-blue-600 transition duration-200'
          onClick={() => setUnits('imperial')}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
