import React from 'react'
import Swiper from "./Swiper";
import { SearchOutline } from 'react-ionicons'



const Event = () => {
  return (
    <div>
        <header>
            <div className="flex justify-end pt-7 pr-8 ">
            <SearchOutline
              color={'#00000'} 
              height="28px"
              width="28px"
            />
            </div>
        </header>
        <h1 className="text-headlineTwo text-primary font-black ml-6">Events Feed</h1>
        <div className="mt-12">
          <Swiper/>
        </div>

        
    </div>
  )
}

export default Event