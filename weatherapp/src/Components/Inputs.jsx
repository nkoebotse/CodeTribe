import React, { useState } from 'react'
import { UilSearchAlt, UilMapPinAlt  } from '@iconscout/react-unicons'


function Inputs({ setQuery, units, setUnits }) {
  const [input, setInput] = useState('');

  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input
        type="text"
        placeholder='Search...'
        className='bg-white text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
        onChange={(e) => setInput(e.target.value)}
        />
        <UilSearchAlt size={25} className="cursor-pointer transition ease-out hover:scale-x-125"
          onClick={() => { setQuery({q: input}) }}/>
        <UilMapPinAlt size={25} className="cursor-pointer transition ease-out hover:scale-x-125"/>
        </div>

        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name="metric" className='text-xl text-black  font-bold'>°C</button>
            <p className='text-2xl text-black mx-1'>|</p>
            <button name="imperial" className='text-xl text-black font-bold '>°F </button>
        </div>
    </div>
  )
}

export default Inputs