import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";

const Section1 = () => {
  return (
    <div>
      <section>
            <div className="first-section text-center px-4 py-8">
              <div className="mix-blend-screen flex justify-center">
                <img
                  src="https://www.intract.io/assets/academy-animated-logo-57b2ae61.gif"
                  alt="intract"
                  width={230}
                  height={230}
                  className="mt-24 sm:mt-44"
                />
              </div>
              <div className="z-10 flex flex-col items-center mt-6">
                <p className="mix-blend-plus-lighter text-lg font-semibold text-center text-gray-400">
                  <span className="text-gray-200">Intract users</span> have together made more than <span className="text-gray-200">$100 million</span> in web3.<br />
                  Join them and <span className="text-gray-200">learn how to earn crypto!</span>
                </p>
              </div>
              <button className="flex items-center py-2 px-8 sm:px-14 mx-auto mt-12 rounded-lg bg-violet-600 text-white justify-center">
                Get Started
                <span className="ml-2">
                  <HiArrowLongRight />
                </span>
              </button>
            </div>
          </section>
    </div>
  )
}

export default Section1
