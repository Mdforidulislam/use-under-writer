'use client '

import FeaturesCard from "../Shared/FeaturesCard";

const OurMisstion = () => {
    return (
        <div className="md:py-10 py-6">
            <div className="block md:flex md:gap-10 justify-between md:py-8 py-3 mb-6">
                <div>
                    <h5 className="text-sm font-medium text-gray-700">Believe</h5>
                    <h1 className="md:text-3xl font-semibold text-red-700 text-xl">OUR MISSION</h1>
                </div>
                <div className=" w-full md:w-2/4">
                    <p>Our mission has remained largely unchanged over the century and a half the company has operated: to quickly provide affordable insurance solutions <span className="hidden md:inline-block">for our customers that support the communities and families they represent.</span></p>
                </div>

            </div>
            <FeaturesCard />
        </div>
    );
};

export default OurMisstion;