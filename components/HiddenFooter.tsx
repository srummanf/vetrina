import React from 'react'
import Time from './Time'
import { alexBrush } from '../app/font';

const HiddenFooter = () => {
  return (
    <footer className="flex px-4 py-4 justify-center gap-6 items-center w-full border-t border-stone-800/90">
      <div className="w-full lg:w-[55%] justify-center gap-6 items-center flex ">
        <p className={`leading-none m-0 text-[2rem]  ${alexBrush.className}`}>Shaikh Rumman Fardeen</p>
        {/* <Time /> */}
      </div>
    </footer>
  )
}

export default HiddenFooter