import React from 'react';
import { BiSolidMessageAltDots } from "react-icons/bi";

const StickButton = () => {
    return (
        <div className='fixed bottom-6 right-8 z-10 bg-zinc-300 text-black p-3 rounded-full shadow-md cursor-pointer hover:scale-110 transition duration-300 ease-in-out'>
            <BiSolidMessageAltDots className='text-3xl' />
        </div>
    )
}

export default StickButton
