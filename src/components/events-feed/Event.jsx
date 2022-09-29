import React from 'react'
import Swiper from "./Swiper";
import { SearchOutline } from 'react-ionicons'
import kanye from '../../imgref/kanyewest.jpeg'
import profile1 from '../../imgref/profile1.jpeg'
import profile2 from '../../imgref/profile2.jpeg'
import profile3 from '../../imgref/profile3.jpeg'



const Event = () => {
  return (
    <div className="">
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
        <div className=" bg-[#341931] ml-6 mr-6  mt-12 rounded-3xl">
          <div><img src={kanye} alt=""  className="rounded-3xl" /></div>
          <div className="ml-6 mr-6  mt-12 rounded-3xl">
            <div className="flex gap-2">
              <h3 className="text-headlineSix text-primary">#spotify</h3>
              <h3 className="text-headlineSix text-primary">#KanyeWest</h3>
              <h3 className="text-headlineSix text-primary">#Legendey</h3>
              <h3 className="text-headlineSix text-primary">#spotify</h3>
            </div>
            <div className="flex mt-4">
              <div><img src={profile1} alt="" className="rounded-full h-8 w-8"/> </div>
              <div><img src={profile2} alt="" className="rounded-full h-8 w-8 "/> </div>
              <div><img src={profile3} alt="" className="rounded-full h-8 w-8"/> </div>
              <div className="numbers justify-center text-center">
                <p> <span className="font-extrabold">3,123 </span> are talking about this</p>
              </div>
            </div>
            <div className="pt-3 pb-3 text-headlineFour font-extrabold">
              <h1>oachella 2019 Day Three <br /> Highlights</h1>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Event