'use client '

import FeaturesCard from "../Shared/FeaturesCard";

const OurMisstion = () => {

// card imtem here 
    const items = [
        {
            title: "Affordable Auto Insurance",
            description: "USA Underwriters offers affordable rates on quality coverage."
        },
        {
            title: "Accidents Can Add Up",
            description: "Accidents and infractions can linger long after the fines are paid and the car is repaired."
        },
        {
            title: "Price Conscious",
            description: "Price conscious consumers choose USA Underwriters for affordable auto insurance solutions."
        }
    ];

    return (
        <div className="">
            <div className="block md:flex md:gap-10 justify-between md:py-8 py-3 mb-6">
                <div>
                    <h5 className="text-sm font-medium text-gray-700">Believe</h5>
                    <h1 className="md:text-3xl font-semibold text-red-700 text-xl">OUR MISSION</h1>
                </div>
                <div className=" w-full md:w-2/4">
                    <p className="md:text-sm text-[12px] text-gray-500">Our mission has remained largely unchanged over the century and a half the company has operated: to quickly provide affordable insurance solutions <span className="hidden md:inline-block">for our customers that support the communities and families they represent.</span></p>
                </div>

            </div>
            <FeaturesCard items={items} />
        </div>
    );
};

export default OurMisstion;