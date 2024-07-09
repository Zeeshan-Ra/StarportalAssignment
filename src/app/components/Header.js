import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200;

      if (scrollPosition > threshold) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 max-w-full h-16 flex justify-evenly items-center px-4 border-b-[1px] border-gray-700 ${isTransparent ? 'bg-black bg-opacity-40' : 'bg-black'}`}>
      <div className="flex items-center">
        <Image src="https://www.intract.io/logo/intract_text.svg" alt="logo" width={100} height={100} />
      </div>
      <nav className={`fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center gap-6 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:flex-row md:items-center md:bg-transparent md:bg-opacity-0`}>
        <span className="cursor-pointer text-white" onClick={() => setIsOpen(false)}>Compass</span>
        <span className="cursor-pointer text-white" onClick={() => setIsOpen(false)}>Explore</span>
        <span className="cursor-pointer text-white" onClick={() => setIsOpen(false)}>Academy <span className="p-1 text-xs bg-violet-600 text-white rounded-md">New</span></span>
        <span className="cursor-pointer text-white" onClick={() => setIsOpen(false)}>NFTs</span>
        <span className="cursor-pointer text-white" onClick={() => setIsOpen(false)}>For Projects</span>
      </nav>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex rounded-full border border-none border-opacity-5 bg-opacity-7 p-3 w-[30rem] bg-zinc-900 items-center gap-2">
          <IoSearch className='text-slate-500' />
          <input className="flex-1 bg-transparent text-slate-500 font-outfit text-base font-bold leading-20 tracking-tighter border-none outline-none focus:ring-0" placeholder="Search for ecosystems, trending quests, etc." id='searchbar' />
        </div>
        <div className="hidden md:flex border-yellow-600 border rounded-full p-3 bg-slate-900 cursor-pointer">
          <Image src={"https://www.intract.io/assets/broadcast_or-04af786c.svg"} width={20} height={20} className='rounded-full' alt='igtv' />
        </div>
        <button className='hidden md:block bg-white rounded-md text-black px-6 py-1 cursor-pointer'>Sign In</button>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>
      </div>
    </header>
  );
}
