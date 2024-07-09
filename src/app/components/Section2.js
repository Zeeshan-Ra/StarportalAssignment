import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";

const Section2 = () => {
    return (
        <div className='border-b-[1px] border-gray-700'>
            <section className=' -mt-10 mb-20 sm:mb-40 md:mb-60 lg:mb-[500px]'>
                <div>
                    <a href="#" className="flex flex-col items-center bg-white border border-zinc-800 rounded-2xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 px-3 py-5 mb-18 mx-auto sm:ml-36">
                        <div className='p-2 border-[1px] rounded-2xl border-zinc-800 relative'>
                            <img className="object-cover h-40 w-40 rounded-lg" src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png" alt="" />
                            <div className="absolute bottom-5 left-6 z-10">
                                <p className="text-base px-4 py-2 border-[1px] border-zinc-600 rounded-3xl">6 Quests</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Basics of Crypto</h5>
                            <p className="mb-3 pb-3 text-gray-700 dark:text-gray-500 font-bold border-b-[1px] border-dashed border-gray-500">The safest and easiest place to start your crypto journey!</p>
                            <div className='ml-4 mt-3'>
                                <span className='text-xs p-2 border-[1px] border-zinc-800 rounded-3xl text-zinc-300'>1490 XPs</span>
                            </div>
                        </div>
                    </a>
                    <div className='flex flex-col mb-24 items-center md:items-end'>
                        <div className='p-2 border-[1px] rounded-2xl border-transparent relative md:absolute md:right-44'>
                            <img className='p-2 object-cover border-[1px] h-44 w-40 rounded-3xl mb-3' src="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/1b1912563b964393b0478949efad5ed3.png" alt="" />
                            <span className='text-xl text-slate-400'>Intract Certified: Learner NFT</span><br />
                            <span className='text-gray-700 font-bold leading-3'>Your crypto black-belt<br />certificate</span><br />
                            <button className='px-12 text-zinc-400 py-2 bg-zinc-800 rounded-lg'>Claim</button>
                        </div>
                    </div>
                </div>
                <div>
                    <a href="#" className="flex flex-col items-center bg-white border border-zinc-800 rounded-2xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 px-3 py-5 mb-24 mx-auto sm:ml-[30rem] relative top-80">
                        <div className='p-2 border-[1px] rounded-2xl border-zinc-800 relative'>
                            <img className="object-cover h-40 w-40 rounded-lg" src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/85903745c34d42d684a2dc505768afa7.png" alt="" />
                            <div className="absolute bottom-5 left-6 z-10">
                                <p className="text-base px-4 py-2 border-[1px] border-zinc-600 rounded-3xl">4 Quests</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Introduction to Airdrops</h5>
                            <p className="mb-3 pb-3 text-gray-700 dark:text-gray-500 font-bold border-b-[1px] border-dashed border-gray-500">Your best bet to make it big in crypto!</p>
                            <div className='ml-4 mt-3'>
                                <span className='text-xs p-2 border-[1px] border-zinc-800 rounded-3xl text-zinc-300'>1040 XPs</span>
                            </div>
                        </div>
                    </a>
                    <div className='flex flex-col mb-24 items-center md:items-start'>
                        <div className='p-2 border-[1px] rounded-2xl border-transparent relative md:absolute md:left-24 mt-72'>
                            <img className='p-2 object-cover border-[1px] h-44 w-40 rounded-3xl mb-3' src="https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/83bd377d91ff441aa6f7c46a63c88506.png" alt="" />
                            <span className='text-xl text-slate-400'>Intract Certified: Learner NFT</span><br />
                            <span className='text-gray-700 font-bold leading-3'>Your crypto black-belt<br />certificate</span><br />
                            <button className='px-12 text-zinc-400 py-2 bg-zinc-800 rounded-lg'>Claim</button>
                        </div>
                    </div>
                </div>
                <div class="card-comp relative md:left-[50%] md:top-[80%] flex flex-col md:mt-6 text-gray-500 bg-zinc-900 shadow-md bg-clip-border rounded-xl md:w-80">
                    <div
                        class="relative md:h-72 mx-4 mt-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                        <img
                            src="https://www.intract.io/assets/kol-reward-12e6ae06.gif"
                            alt="card-image" />
                    </div>
                    <div class="p-6">
                        <h5 class="block mb-2 border-b-[1px] border-zinc-600 pb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 border-dashed">
                            Exclusive Community
                        </h5>
                        <p class="block font-sans text-sm antialiased font-light leading-relaxed text-inherit">
                            Complete all Essential quests
                        </p>
                        <p class="block font-sans text-sm antialiased font-light leading-relaxed text-inherit">
                            Complete at least 1 Alpha Hub quest today
                        </p>
                    </div>
                    <div class="p-6 pt-0 flex justify-center">
                        <button className='px-20 text-zinc-400 py-2 bg-zinc-800 rounded-lg flex-row flex'>Claim Now
                            <span className="ml-2 mt-1 text-xl">
                                <HiArrowLongRight />
                            </span></button>
                    </div>
                </div>
                <div className='md:w-80 md:h-84 border-[1px] border-zinc-600 p-3 rounded-xl relative md:left-[65%] md:top-[90%]'>
                    <h5 className='md:mb-5 md:mt-1 text-sm border-b-[1px] pb-2 text-zinc-400 border-zinc-600'>Reward info ⓘ</h5>
                    <p className='text-sm mb-5 text-zinc-200'>Free access to paid KOL (crypto earning) communities!</p>
                    <p className='text-sm mb-5 text-zinc-400'>Win access to exclusive earning communities of some of the the greatest earners in crypto for a month, every 24 hours. Get access to unmatched insights, a close-knit community of the best airdrop earners, and more.</p>
                    <p className='text-sm mb-4 text-zinc-400'>To win: make sure you've connected your Twitter and Discord accounts - and follow our criteria!</p>
                </div>
            </section>
        </div>
    )
}

export default Section2