import React from 'react'
import { PulseOutline, MicOutline, RadioOutline, ContrastOutline, SettingsOutline } from 'react-ionicons'
const Navbar = () => {
  return (
    <div>
    <footer className=' fixed bottom-0 bg-additionalColor w-full h-12 flex flex-col justify-center '>
      <nav className='flex justify-evenly pt-1.5'> 
      
      <PulseOutline 
        color={'rgba(238,9,121,1)'}
        height="38px"
        width="38px"
        title={'pulse'}
        />
        <MicOutline
         color={'rgba(238,9,121,1)'} 
         title={'mic'}
         height="38px"
         width="38px"
        />
        <RadioOutline
        color={'rgba(238,9,121,1)'} 
        title={'radio'}
        height="38px"
        width="38px"
        />
        <ContrastOutline
        color={'rgba(238,9,121,1)'} 
        title={'darkmode lightmode'}
        height="38px"
        width="38px"
        />
        <SettingsOutline
        color={'rgba(238,9,121,1)'} 
        title={'settings'}
        height="38px"
        width="38px"
        />
      </nav>
    </footer>
    </div>
  )
}
export default Navbar