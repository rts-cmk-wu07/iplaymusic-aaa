import React from 'react'
import {FiRadio} from 'react-icons/fi'
import {BsHeartFill} from 'react-icons/bs'
import {BsMusicNote} from 'react-icons/bs'


function Walkthrough() {
  return (
    <div>
      <div className="flex justify-center	justify-evenly">
        <div className="border-2 rounded-full"><BsHeartFill className="text-7xl"/></div>
        <div><FiRadio/></div>
        <div><BsMusicNote/></div>
      </div>
    </div>
  )
}

export default Walkthrough