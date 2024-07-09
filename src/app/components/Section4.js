import React from 'react'
import { IoBookOutline } from "react-icons/io5";

const Section4 = () => {
  return (
    <div>
      <section>
            <div className="border-b-[1px] border-gray-700 mt-16 px-4 md:px-0">
              <div className="flex flex-col gap-1 text-center">
                <h3 className="text-2xl">Crypto Dictionary</h3>
                <p className="text-gray-400">Your one-stop to catch up on all crypto terms</p>
              </div>
              <div className="w-full md:w-3/4 mx-auto mt-3 mb-16 relative overflow-hidden rounded-2xl border-[1px] border-zinc-600">
                <img
                  src="https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg"
                  alt="dictionary"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-4 right-4 z-10 opacity-30 bg-black text-white p-3 rounded-full shadow-md cursor-pointer">
                  <IoBookOutline className="text-3xl" />
                </div>
                <div className="absolute bottom-4 left-4 z-10">
                  <p className="text-2xl text-slate-300">Web3 + Degen Glossary</p>
                  <span className="text-base text-slate-400">Your own crypto dictionary</span>
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}

export default Section4
