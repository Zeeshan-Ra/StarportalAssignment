import React from 'react'

const Section3 = () => {
  return (
    <div>
      <section>
            <div className="border-b-[1px] border-gray-700 mt-12">
              <div className="flex flex-col gap-1 text-center">
                <h3 className="text-2xl">Top Crypto Creators and Projects to Follow</h3>
                <p className="text-gray-400">Answers to your crypto doubts, straight from the experts</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mb-16 mt-5 px-4">
                <div className="mt-3 relative overflow-hidden rounded-2xl border-[1px] border-zinc-600" style={{ maxWidth: '283px' }}>
                  <img src="https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png" alt="image1" width="283" height="420" />
                  <div className="absolute bottom-4 left-3 z-10">
                    <p className="text-2xl text-slate-100 mix-blend-lighten">How to plan your retirement with crypto?</p>
                  </div>
                </div>
                <div className="mt-3 relative overflow-hidden rounded-2xl border-[1px] border-zinc-600" style={{ maxWidth: '283px' }}>
                  <img src="https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png" alt="image2" width="283" height="420" />
                  <div className="absolute bottom-4 left-3 z-10">
                    <p className="text-2xl text-slate-100 mix-blend-lighten">Why are there limited Bitcoin?</p>
                  </div>
                </div>
                <div className="mt-3 relative overflow-hidden rounded-2xl border-[1px] border-zinc-600" style={{ maxWidth: '283px' }}>
                  <img src="https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png" alt="image3" width="283" height="420" />
                  <div className="absolute bottom-4 left-3 z-10">
                    <p className="text-2xl text-slate-100 mix-blend-lighten">How does Uniswap actually work?</p>
                  </div>
                </div>
                <div className="mt-3 relative overflow-hidden rounded-2xl border-[1px] border-zinc-600" style={{ maxWidth: '283px' }}>
                  <img src="https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png" alt="image4" width="283" height="420" />
                  <div className="absolute bottom-4 left-3 z-10">
                    <p className="text-2xl text-slate-100 mix-blend-lighten">How to spot crypto projects to invest in?</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}

export default Section3
