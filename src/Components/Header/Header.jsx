'use client'

import Image from "next/image";
import logo from '@/assets/logo.png'
import menuOn from '@/assets/menuOn.png'
import menuOff from '@/assets/menuOff.png'
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'

 // Assuming you have a logo image imported

const Header = () => {
    const [open, setOpen] = useState(false);

    const pathname = usePathname()

    console.log(pathname);

    return (
        <div className="py-6 border-b-2">
        <div className="max-w-screen-xl mx-auto px-6">
            <div className="flex  justify-between h-full w-full items-center ">
                <div className=" flex justify-center w-full md:justify-start md:w-auto">
                    {/* Logo */}
                    <Image src={logo} alt="company logo" width={100} height={100} />
                </div>
                {/* Desktop Navigation */}
                <div className="hidden md:flex  ">
                    <ul className="flex w-full justify-end items-center space-x-9 font-medium text-[16px]">
                        <Link href='/'><li className={`${pathname === '/'? 'bg-[#C81E1E] text-[#E5E7EB] px-6 py-2 rounded-full': ''}`}>Home</li></Link>
                        <Link href='/about'><li className={`${pathname === '/about'? 'bg-[#C81E1E] text-[#E5E7EB] px-6 py-2 rounded-full': ''}`}>About us</li></Link>
                        <Link href='/contact'><li className={`${pathname === '/contact'? 'bg-[#C81E1E] text-[#E5E7EB] px-6 py-2 rounded-full': ''}`}>Contact</li></Link>
                        <Link href='/portal'><li className={`${pathname === '/portal'? 'bg-[#C81E1E] text-[#E5E7EB] px-6 py-2 rounded-full': ''}`}>Policyholder Portal</li></Link>
                        <Link href='/claim'><li className={`${pathname === '/claim'? 'bg-[#C81E1E] text-[#E5E7EB] px-6 py-2 rounded-full': ''}`}>Report a Claim</li></Link>
                    </ul>
                </div>
                   {/* Mobile Navigation */}
                   <div className="md:hidden flex items-center">
                        
                        <div>
                            <Image onClick={() => setOpen(!open)} className={`${open ? 'hidden' : ''}`} src={menuOff} alt="menu" width={30} height={30} />
                            <Image onClick={() => setOpen(!open)} className={`${open ? '' : 'hidden'}`} src={menuOn} alt="menu off" width={30} height={30} />
                        </div>
                       {/* nav bar item here  */}
                        <div className={`absolute top-28 left-0 w-full bg-[#C81E1E] shadow-lg z-10 ${open ? '' : 'hidden'}`}>
                            <ul className="flex flex-col  space-y-4 font-medium text-[16px] text-[#E5E7EB] text py-6 px-5">
                                <Link href='/'><li>Home</li></Link>
                                <Link href='/about'><li>About us</li></Link>
                                <Link href='/contact'><li>Contact</li></Link>
                                <Link href='/'><li>Policyholder Portal</li></Link>
                                <Link href='/claim'><li className="">Report a Claim</li></Link>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    );
};




export default Header;