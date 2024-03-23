'use client'

import Image from "next/image";
import history from '@/assets/history.png'

const History = () => {
    return (
        <div className="">
            <div className="block md:flex md:gap-16 ">
                <div>
                    <h5 className=" font-medium text-sm hidden md:block">About us</h5>
                    <h1 className="md:text-3xl font-semibold text-black text-2xl ">History</h1>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-400">In 1962, the Southern Michigan Mutual Insurance Company celebrated it’s 100th year in continuous operation and was presented with a plaque by the State of Michigan as a Centenary Business.</p>
                </div>
            </div>
            {/* history iamges here */}
            <div className=" py-5 md:py-12">
                <div>
                    {/* Set the layout prop to responsive */}
                    <Image
                        src={history}
                        alt="history"
                        layout="responsive"
                        width={1232}
                        height={496}
                    />
                    <style jsx>{`
                
                @media (max-width: 768px) {
                   
                    img {
                        width: 354px;
                        height: 151px;
                    }
                }
            `}</style>
                </div>
            </div>
            {/*  text h ere  */}
            <div className="space-y-6">
                <p className="text-sm font-medium text-[#6B7280]">
                    In 2013, Southern Michigan Mutual Insurance Company became USA Underwriters. The name may have changed, but the dedication to our customers, our drive to serve them and their communities hasn’t. <span className="md:inline-block hidden">USA Underwriters’ mission as a leading Property and Casualty Insurance company in Michigan, remains largely unchanged from the mission of it’s progenitor: to provide affordable, quality insurance solutions to families and individuals.</span>
                </p>

                <p className="text-sm font-medium text-[#6B7280] md:block hidden">
                    Insurance has changed a lot in the last century and a half. When Southern Michigan Mutual Insurance Company was founded, automobiles simply didn’t exist.
                    That all changed — right in the company’s back yard — at the turn of the 20th century when Henry Ford’s Model T began rolling off the assembly line.
                </p>

                <p className="text-sm font-medium text-[#6B7280] md:block hidden">
                    In an instant of history, the car supplanted the horse and buggy as American’s primary mode of transportation. The era of the Automobile had begun, and the Southern Michigan Mutual Insurance Company was front and center for one of the most dramatic shifts in American history. The car accelerated economic growth, and offered a freedom of travel that had been nigh-unimaginable for the vast majority of people through the whole of human history.
                </p>

            </div>
        </div>
    );
};

export default History;