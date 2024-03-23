'use client'

import History from "@/Components/About Us/History";
import OurMisstion from "@/Components/About Us/OurMisstion";
import BreadCum from "@/Components/Shared/BreadCum";




const Pages = () => {


    return (
        <div className="max-w-screen-xl px-6 mx-auto">
            {/* Bread Cum start here  */}
            <BreadCum pageName={"About Us"}/>
            {/* page Import here , the components */}
            {/* history section here  */}
            <History/>
            {/* OUr misstion section */}
            <OurMisstion/>
        </div>
    );
};

export default Pages;
