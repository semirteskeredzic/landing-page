import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, MenuIcon, XIcon } from '@heroicons/react/solid'

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [openSidebar, setOpenSidebar] = useState(false)
    const sidebarRef = useRef()
    const linkRef = useRef()

    function useOnClickOutside(ref, handler) {
        useEffect(
          () => {
            const listener = (event) => {
              // Do nothing if clicking ref's element or descendent elements
              if (!ref.current || ref.current.contains(event.target)) {
                return
              }
              handler(event)
            };
            document.addEventListener("mousedown", listener)
            document.addEventListener("touchstart", listener)
            return () => {
              document.removeEventListener("mousedown", listener)
              document.removeEventListener("touchstart", listener)
            };
          },[ref, handler])
        }

    useOnClickOutside(sidebarRef, () => setIsOpen(false))
    useOnClickOutside(linkRef, () => setIsOpen(false))

    return (
        <div className="sticky top-0 bg-white">
            <nav className="hidden md:block">
                <ul className="flex flex-row justify-between md:w-2/3 lg:w-1/2">
                <li className="text-xl uppercase p-4 hover:bg-blue-500 hover:text-white transition ease-in-out delay-75 cursor-pointer">
                    <Link to={`/`}>
                        Home
                    </Link>
                </li>
                <li className="group relative w-auto dropdown text-xl uppercase p-4 hover:bg-blue-500 hover:text-white transition ease-in-out delay-75 cursor-pointer">
                    <span className="inline-block">Categories</span> <ChevronDownIcon className="w-6 inline-block" />
                    <div className="group-hover:block dropdown-menu absolute hidden h-auto mt-4 shadow-xl left-0">
                        <ul className="top-0 left-0 w-48 bg-white shadow text-black">
                            <li className="px-6 py-7 hover:bg-blue-500 hover:text-white">
                                <Link className="block font-bold text-base uppercase" to={`/item`}>Item</Link>
                            </li>
                            <li className="px-6 py-8 hover:bg-blue-500 hover:text-white">
                                <Link className="block font-bold text-base uppercase" to={`/item`}>Item2</Link>
                            </li>
                            <li className="px-6 py-8 hover:bg-blue-500 hover:text-white">
                                <Link className="block font-bold text-base uppercase" to={`/item`}>Item3</Link>
                            </li>
                            <li className="px-6 py-8 hover:bg-blue-500 hover:text-white">
                                <Link className="block font-bold text-base uppercase" to={`/item`}>Item4</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                
                <li className="text-xl uppercase p-4 hover:bg-blue-500 hover:text-white transition ease-in-out delay-75 cursor-pointer">
                    <Link to={`/about`}>
                        About
                    </Link>
                </li>
                <li className="text-xl uppercase p-4 hover:bg-blue-500 hover:text-white transition ease-in-out delay-75 cursor-pointer">
                    <Link to={`/contact`}>
                        Contact
                    </Link>
                </li>
                </ul>
            </nav>
            <nav className="visible md:hidden text-right px-6 py-4">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <MenuIcon className="h-7 w-7 text-blue-400 hover:text-blue-700" />
                </button>
                <section ref={sidebarRef} className={`flex flex-col h-full md:hidden ${isOpen ? 'w-80' : 'w-0'} shadow-lg fixed z-20 top-0 right-0 bg-white overflow-x-hidden duration-500`}>
                <button onClick={() => setIsOpen(!isOpen)} className="t-0 r-0 pb-11 mt-2 mr-3 self-end">
                    <XIcon className="h-8 w-8 text-blue-400 hover:text-blue-700" />
                </button>
                    <ul className="flex flex-col justify-between">
                        <li className="text-xl uppercase p-4 hover:bg-blue-500 hover:text-white transition ease-in-out delay-75 cursor-pointer">
                            <Link to={`/`}>
                                Home
                            </Link>
                        </li>
                        <li onClick={() => setOpenSidebar(!openSidebar)} className="group relative w-auto dropdown text-xl uppercase p-4 hover:bg-blue-500 hover:text-white transition ease-in-out delay-75 cursor-pointer">
                            <span className="inline-block">Categories</span> <ChevronDownIcon className="w-6 inline-block" />
                            <div className={`${openSidebar ? 'block' : 'hidden'} dropdown-menu h-auto mt-4 left-0`}>
                                <ul className="top-0 left-0 w-full text-black">
                                    <li className="px-6 py-7 hover:bg-blue-500 hover:text-white">
                                        <Link className="block font-bold text-base uppercase" to={`/item`}>Item</Link>
                                    </li>
                                    <li className="px-6 py-8 hover:bg-blue-500 hover:text-white">
                                        <Link className="block font-bold text-base uppercase" to={`/item`}>Item2</Link>
                                    </li>
                                    <li className="px-6 py-8 hover:bg-blue-500 hover:text-white">
                                        <Link className="block font-bold text-base uppercase" to={`/item`}>Item3</Link>
                                    </li>
                                    <li className="px-6 py-8 hover:bg-blue-500 hover:text-white">
                                        <Link className="block font-bold text-base uppercase" to={`/item`}>Item4</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="text-xl uppercase p-4 hover:bg-blue-500 hover:text-white transition ease-in-out delay-75 cursor-pointer">
                            <Link to={`/about`}>
                                About
                            </Link>
                        </li>
                        <li className="text-xl uppercase p-4 hover:bg-blue-500 hover:text-white transition ease-in-out delay-75 cursor-pointer">
                            <Link to={`/contact`}>
                                Contact
                            </Link>
                        </li>    
                    </ul>
                </section>
            </nav>
        </div>
    );
}

export default Navigation