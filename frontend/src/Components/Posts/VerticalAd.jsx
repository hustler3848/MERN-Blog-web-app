import React from 'react'

function VerticalAd() {
  return (
    <div className="AdvertisementComponent h-[100vh] w-full sm:w-auto flex flex-col">
            <div className="advertisementHeader flex flex-row items-center justify-start w-full">
              <h2 className="uppercase inline-block dark:text-white bg-zinc-200 text-black dark:bg-gray-800 pl-4 py-1 pr-5 dmSans rounded-sm font-bold text-xs">
                AD
              </h2>
              <hr className="h-[2px] flex-grow bg-rose-500 " />
            </div>
            <div className="advertisement h-full text-xs dmSans flex items-center justify-center border border-neutral-300 rounded-md my-4">
              Responsive Advertisement here
            </div>
          </div>
  )
}

export default VerticalAd