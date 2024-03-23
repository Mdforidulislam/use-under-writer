'use client '

import Image from "next/image";
import maneLogo from '@/assets/man.png'


const Banner = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-6">
            <div className=" flex justify-between  h-full items-center bg-red-700 px-6 rounded-md py-7 md:py-0 ">
                <div className="space-y-6 py-10">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white w-full">Get affordable, <br /> same-day coverage  <br /> in no time.</h1>
                    <p className="text-sm font-light text-white w-full md:w-3/4">With roots over a century deep in the birthplace of the automobile industry, USA Underwriters has the knowledge and expertise to help tailor a policy to suit your lifestyle, your budget, and your priorities.</p>
                    <div>
                        <button className="bg-white px-6 py-3 rounded-full text-sm font-semibold">Report a Claim</button>
                        <button className="px-6 py-3 rounded-full text-sm font-semibold text-white">Learn More</button>
                    </div>
                </div>
                <div className=" hidden md:flex">
                    <Image src={maneLogo} width={400} height={400} alt="man logo" />
                </div>
            </div>
        </div>
    );
};

export default Banner;