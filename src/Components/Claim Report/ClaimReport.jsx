'use client'
import Image from "next/image";
import report from '@/assets/report.png'
import curcle from '@/assets/circule.png'
import styles from './style.css'


const ClaimReport = () => {
    return (
        <div className=" md:py-10">
            <div className="block md:flex md:gap-16">
                <div className=" text-center md:text-left">
                    <h5 className="font-medium text-sm ">Need to Know</h5>
                    <h1 className="md:text-3xl font-semibold text-black text-2xl">Before We Begin</h1>
                </div>
                <div className="flex-1 mt-4 md:mt-0">
                    <p className="text-sm font-medium text-gray-400">
                        <span className="inline-block">
                            At USA Underwriter, we are here to assist you through the claims process swiftly and effectively. To ensure a thorough investigation of your auto insurance claim,
                        </span>
                        <span className="hidden md:inline-block">
                            Please provide us with the following essential information. Your cooperation allows us to expedite the resolution process and provide the support you need during this time.
                        </span>
                    </p>
                </div>
            </div>
            {/* history iamges here */}
            <div className=" py-5 md:py-12">
                <div>
                    {/* Set the layout prop to responsive */}
                    <Image
                        src={report}
                        alt="report"
                        layout="responsive"
                        width={1232}
                        height={496}
                    />

                </div>
            </div>
            {/*  text h ere  */}
            <div className="space-y-6 flex flex-col-reverse gap-6 md:gap-0 md:flex-row md:space-x-8">
                <div className="flex flex-col justify-between md:w-1/2 relative">
                    <div className="absolute -z-10 overflow-hidden opacity-5">
                        {/* Set the layout prop to responsive */}
                        <Image
                            src={curcle}
                            alt="report"
                           // Apply the CSS class here
                            layout="responsive"
                            width={1232}
                            height={600}
                            style={{
                                width: '100%', // Default width
                                height: 'auto', // Default height
                                maxWidth: '1232px', // Maximum width
                                maxHeight: '600px', // Maximum height
                                '@media (max-width: 768px)': {
                                    width: '354px', // Adjusted width for smaller screens
                                    height: '660px', // Adjusted height for smaller screens
                                    maxWidth: 'none', // Remove max-width for smaller screens
                                    maxHeight: 'none', // Remove max-height for smaller screens
                                }
                            }}
                        />

                    </div>
                    <div className="space-y-5">
                        <h1 className="md:text-3xl font-semibold text-gray-900 text-xl md:text-left text-center">Contact Claims <span className="hidden md:block mt-1"> </span> Department.</h1>
                        <p className="font-light text-[12px] md:text-xl md:text-left text-center ">To report a claim, please call +1 (855) 230-1656</p>
                        <div className=" flex gap-5 md:justify-start justify-center">
                            <button className="bg-red-700 text-white font-semibold py-3 px-6 rounded-full md:border-2 md:border-red-700">Call Toll-Free</button>
                            <button className="bg-white text-red-700 font-semibold py-3 px-6 rounded-full border-2 border-red-700">Send Message</button>
                        </div>
                    </div>

                </div>

                {/*  all the item list here with list  */}
                <div className="flex flex-col md:w-1/2">
                    <div className="">
                        <p className="text-sm font-medium text-gray-500 hidden md:block">You will need to answer a series of necessary questions about the incident surrounding your claim. To expedite this process and get your claim moving faster, please have as much of the following information prepared in advance of contacting us to report your claim:</p>
                    </div>
                    <ul className=" pl-4 space-y-2">
                        <li className=" text-sm text-gray-700 flex items-center  gap-2">
                            <span className="text-red-700 text-3xl">•</span> Policy number
                        </li>
                        <li className="text-sm text-gray-700 flex items-center  gap-2">
                            <span className="text-red-700 text-3xl">•</span> Name, address and phone number for all parties involved in the accident
                        </li>
                        <li className="text-sm text-gray-700 flex items-center  gap-2">
                            <span className="text-red-700 text-3xl">•</span> Year, make, model and license plate of the vehicles involved
                        </li>
                        <li className="text-sm text-gray-700 flex items-center  gap-2">
                            <span className="text-red-700 text-3xl">•</span> Facts surrounding the claim, including date, time and location
                        </li>
                        <li className="text-sm text-gray-700 flex items-center  gap-2">
                            <span className="text-red-700 text-3xl">•</span> Police report number and name of the police agency
                        </li>
                        <li className="text-sm text-gray-700 flex items-center  gap-2">
                            <span className="text-red-700 text-3xl">•</span> Extent of injuries of all parties involved
                        </li>
                        <li className="text-sm text-gray-700 flex items-center  gap-2">
                            <span className="text-red-700 text-3xl">•</span> Area of damage on the involved vehicles
                        </li>
                        <li className="text-sm text-gray-700 flex items-center  gap-2">
                            <span className="text-red-700 text-3xl">•</span> Location of vehicles if not drivable
                        </li>
                        <li className="text-sm text-gray-700 flex items-center  gap-2">
                            <span className="text-red-700 text-3xl">•</span> Area of damage on the involved vehicles
                        </li>
                        <li className="text-sm text-gray-700 flex items-center  gap-2">
                            <span className="text-red-700 text-3xl items-center pt-2">•</span> Name, address and phone number for any witnesses
                        </li>
                    </ul>
                    <br />
                    <div className="">
                        <p className="text-sm font-medium text-gray-500">Once your claims information is submitted, a claims adjuster will be assigned to resolve your claim, guide you through the process and answer any questions you might have. Purchased coverages will determine the actions of the adjuster and the outcome of the claim.</p>
                        <p className="text-sm font-medium text-gray-500 hidden md:inline-block">Remember to protect your vehicle from further damage.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ClaimReport;