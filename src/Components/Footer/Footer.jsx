'use client'

import Image from "next/image";
import time from "@/assets/time.png"
import call from "@/assets/call.png"
import email from '@/assets/email.png'
import location from '@/assets/location.png'
import up from '@/assets/up.png'
import down from '@/assets/down.png'
import { useState } from "react";


const Footer = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white">
            <div className="bg-gray-800">
                {/*  footer here  */}
                <div className="   max-w-screen-xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-16 justify-between border md:border-none border-gray-700 rounded-md">

                        {/* footer item 1 */}
                        <div className="space-y-4 border md:border-none border-gray-700 px-6 py-8 md:py-0 md:px-0 rounded-t-md">
                            <div onClick={() => setOpen(1)} className="flex justify-between items-center ">
                                <div  >
                                    <h1 className=" text-sm md:text-xl  font-semibold text-white">USA Underwriter</h1>
                                </div>
                                <div className="md:hidden">
                                    <Image src={open === 1 ? down : up} width={20} height={20} alt="logo" />

                                </div>
                            </div>
                            <h4 className={`text-sm text-white bg-gray-900 px-6 py-4 md:py-0 md:px-0 md:bg-transparent ${open === 1 ? '' : 'hidden md:block'}`}>
                                NAIC #: 30457 <br />
                                P.O. Box 2426 <br />
                                Rancho Cucamonga, CA, 91729
                            </h4>
                        </div>

                        {/* footer item 2 */}
                        <div className="space-y-4 border md:border-none border-gray-700 px-6 py-8  md:py-0 md:px-0">
                            <div onClick={() => setOpen(2)} className="flex justify-between items-center ">
                                <div >
                                    <h1 className="text-sm md:text-xl font-semibold text-white">Underwriting Support</h1>
                                </div>
                                <div className="md:hidden">
                                    <Image src={open == 2 ? down : up} width={20} height={20} alt="logo" />
                                </div>
                            </div>
                            <h4 className={`text-sm bg-gray-900 px-6 py-4 md:py-0 md:px-0 md:bg-transparent space-y-3 text-white block ${open === 2 ? '' : 'hidden md:block'}`}>
                                <span className="flex gap-4"><Image src={time} alt="logo" width={15} height={2} /> Monday - Friday, 9:00 am - 6:00 pm ET</span>
                                <span className="flex gap-4"><Image src={call} alt="logo" width={15} height={10} />+1 (248) 541-2800</span>
                                <span className="flex gap-4"><Image src={email} alt="logo" width={15} height={5} /> customerservice@usaunderwriters.com</span>
                            </h4>
                        </div>


                        {/* footer item 3 */}
                        <div className="space-y-4 border md:border-none border-gray-700 px-6 py-8 md:py-0 md:px-0">
                            <div onClick={() => setOpen(3)} className="flex justify-between items-center ">
                                <div >
                                    <h1 className="text-sm md:text-xl font-semibold text-white">Policy Suspensions And Coverage Approvals</h1>
                                </div>
                                <div className="md:hidden">
                                    <Image src={open === 3 ? down : up} width={20} height={20} alt="logo" />
                                </div>
                            </div>
                            <h4 className={`text-sm text-white bg-gray-900 px-6 py-4 md:py-0 md:px-0 md:bg-transparent ${open === 3 ? '' : 'hidden md:block'}`}>
                                <span className="flex gap-4"><Image src={time} alt="logo" width={15} height={10} /> Monday - Friday, 9:00 am - 6:00 pm ET</span>
                            </h4>
                        </div>
                        {/* footer item 4 */}
                        <div className="space-y-4 border md:border-none border-gray-700 px-6 py-8 md:py-0 md:px-0">
                            <div onClick={() => setOpen(4)} className="flex justify-between items-center ">
                                <div >
                                    <h1 className="text-sm md:text-xl font-semibold text-white">Customer Service & Support</h1>
                                </div>
                                <div className="md:hidden">
                                    <Image src={open === 4 ? down : up} width={20} height={20} alt="logo" />
                                </div>
                            </div>
                            <h4 className={`text-sm space-y-3 text-white bg-gray-900 px-6 py-8 md:py-0 md:px-0 md:bg-transparent ${open === 4 ? '' : 'hidden md:block'}`}>
                                <span className="flex gap-4"><Image src={time} alt="logo" width={15} height={10} /> Monday - Friday, 9:00 am - 6:00 pm ET</span>
                                <span className="flex gap-4"><Image src={call} alt="logo" width={15} height={10} />+1 (248) 541-2800</span>
                                <span className="flex gap-4"><Image src={email} alt="logo" width={15} height={5} /> customerservice@usaunderwriters.com</span>
                            </h4>
                        </div>
                        {/* footer item 5 */}

                        <div className="space-y-4 border md:border-none border-gray-700 px-6 py-8 md:py-0 md:px-0">
                            <div onClick={() => setOpen(5)} className="flex justify-between items-center ">
                                <div >
                                    <h1 className="text-sm md:text-xl font-semibold text-white">Claims Administration</h1>
                                </div>
                                <div className="md:hidden">
                                    <Image src={open === 5 ? down : up} width={20} height={20} alt="logo" />
                                </div>
                            </div>
                            <h4 className={`text-sm space-y-3 text-white bg-gray-900 px-10 py-8 md:py-0 md:px-0 md:bg-transparent ${open === 5 ? '' : 'hidden md:block'}`}>
                                <span className="flex gap-4"><Image src={time} alt="logo" width={15} height={10} /> Monday - Friday, 9:00 am - 6:00 pm ET</span>
                                <span className="flex gap-4"><Image src={call} alt="logo" width={15} height={10} />+1 (248) 541-2800</span>
                                <span className="flex gap-4"><Image src={location} alt="logo" width={15} height={5} /> P.O. Box 647 | Battle Creek, MI 49016</span>
                            </h4>
                        </div>
                        {/* footer item 6 */}

                        <div className="space-y-4 border md:border-none border-gray-700 px-6 py-8 md:py-0 md:px-0 rounded-b-md">
                            <div onClick={() => setOpen(6)} className="flex justify-between items-center ">
                                <div >
                                    <h1 className="text-sm md:text-xl font-semibold text-white">PIP Qualification Question and Submissions for Coverage</h1>
                                </div>
                                <div className="md:hidden">
                                    <Image src={open === 6 ? down : up} width={20} height={20} alt="logo" />
                                </div>
                            </div>
                            <h4 className={`text-sm space-y-3 text-white bg-gray-900 px-6 py-8 md:py-0 md:px-0 md:bg-transparent ${open === 6 ? '' : 'hidden md:block'}`}>
                                <span className="flex gap-4"><Image src={call} alt="logo" width={15} height={10} />+1 (248) 541-2800</span>
                                <span className="flex gap-4"><Image src={email} alt="logo" width={15} height={5} /> customerservice@usaunderwriters.com</span>
                            </h4>
                        </div>
                    </div>
                </div>

            </div>

            {/* copyright section here  */}

            <div className=" max-w-screen-xl mx-auto px-6 block md:flex justify-between py-6 space-y-4 md:space-y-0 md:bg-white bg-gray-800 md:text-black text-white">
                <p className="text-center text-sm md:text-md md:text-left">Copyright 2022 USA Underwriters | <strong>Privacy Policy | Terms of Use</strong></p>
                <p className="text-sm md:text-md text-center">( Built by Neutrix - Powered by Neutrix Systems )</p>
            </div>
        </div>
    );
};

export default Footer;