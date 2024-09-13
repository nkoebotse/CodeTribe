import React from 'react';
import { TERipple } from 'tw-elements-react';
import natureImageUrl from '../assets/living-room-1835923_1280.jpg'
import roomsImageUrl from '../assets/living-room-581073_1280.jpg'
export default function CardWithRippleExample() {
  return (<>
    <div className="flex justify-center items-center gap-4 ">
      {[1, 2, 3].map((card) => (
        <div key={card} className="flex-1 max-w-xs">
          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <TERipple>
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="rounded-t-lg"
                   src={natureImageUrl}
                  alt="Nature"
                />
                <a href="#!">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
            </TERipple>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Double Suite Rooms {card}
              </h5>
                              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  $30/per night
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z "></path>
                    </svg>
                  
                </p>
              <TERipple>
                <button
                  type="button"
                  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text- shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Book Now
                </button>
              </TERipple>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="side-hotel flex ">
      <div className="side-image">
      <img
                  className="rounded-t-lg h-72 w-72 pt-11 ml-56"
                   src={roomsImageUrl}
                  alt="room"
                />
      </div>
      <div className="hotel-in-city p-9">
      <p className='text-3xl'>LUXURY BEST HOTEL IN CITY</p>
      <p className='text-3xl'>CALIFORNTA,  USA</p>
      <p>Hotels offer a temporary escape from daily life, transforming a <br />simple room into a sanctuary of comfort and relaxation. They are <br />spaces where time slows down, dreams come alive, and travelers <br />find solace. A well-chosen hotel makes every journey memorable,<br /> turning an ordinary stay into a special experience.</p>
      <p className='text-4xl'>250</p>
      </div>
    </div>
    </>
  );
 
}
