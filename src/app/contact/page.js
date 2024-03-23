'use client'

import ContactForm from "@/Components/Contact/ContactForm";
import Info from "@/Components/Contact/Info";
import BreadCum from "@/Components/Shared/BreadCum";

const pages = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-6 ">
            {/* Page Bread Cume Setup here  */}
            <BreadCum pageName={'Conact Us'} />
            {/* page impor start here  */}

            {/* import contact section here  */}

            <div className="md:flex block gap-5 justify-between  md:py-6">

                <div className="flex-1">
                    <ContactForm />
                </div>

                <div>
                    <Info />
                </div>
            </div>

        </div>
    );
};

export default pages;