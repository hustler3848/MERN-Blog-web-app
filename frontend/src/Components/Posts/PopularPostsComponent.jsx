import React from 'react'

function PopularPostsComponent() {
  return (
    <div className='PopularPosts'>
        <div className="header flex flex-row items-center justify-start w-full">
              <h2 className="uppercase w-fit inline-block dark:text-white bg-zinc-200 text-black dark:bg-gray-800 pl-4 py-1 pr-5 dmSans rounded-sm font-bold text-xs">
                Popular Posts
              </h2>
              <hr className="h-[2px] flex-grow  bg-rose-500 " />
        </div>
        
    </div>
  )
}

export default PopularPostsComponent