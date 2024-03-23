'use client'


const Features = () => {
    return (
        <div className="block md:flex gap-6 justify-between w-full space-y-5 md:space-y-0 md:py-16 py-6">
            <div className="space-y-5 w-full md:w-2/3">
                <h5 className="text-sm text-gray-700 text-center md:text-left">Our Features</h5>
                <h1 className="text-xl md:text-3xl font-semibold text-gray-900 text-center md:text-left">MCCA REFUND INFORMATION</h1>
                <button className="text-sm bg-red-700 px-6 py-3 rounded-full text-white w-full md:w-auto">MCCA Refund FAQ</button>
            </div>
            <div className="w-full md:w-2/3 flex justify-end">
                <p className="text-gray-500 text-base font-light w-full">The Michigan Catastrophic Claims Association approved refunds for certain Michigan Policyholders due a surplus of funds being held by the MCCA. The approved refund will be $400 per eligible vehicle insured with USA Underwriters on October 31st, 2021 at 11:59 PM, or $80 if the vehicle is an insured historical vehicle.</p>
            </div>
        </div>

    );
};

export default Features;