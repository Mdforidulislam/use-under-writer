'use client'
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import service from "@/assets/service.png"
import Image from 'next/image';
import check from '@/assets/check.png'
import call from '@/assets/call.png'
import email from '@/assets/email.png'
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";



const Info = () => {
    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        // Trigger animation when the component mounts
        controls.start("visible");
    }, [controls]);

    // Define animations with different delays for each item
    const variants = {
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.5 } // Adjust the delay factor as needed
        }),
        hidden: { opacity: 0, y: 100 },
    };

    const contactInfo = [
        {
            icon: call,
            category: "General Inquiries & CS",
            phone: "(222) - 2222-2222",
            email: "customerservice@usaunderwriters.com"
        },
        {
            icon: check,
            category: "Claim Inquiries",
            phone: "(222) - 2222-2222",
            email: "customerservice@usaunderwriters.com"
        },
        {
            icon: email,
            category: "Mail Inquiries",
            phone: "(222) - 2222-2222",
            address: "P.O. Box 2426, Rancho Cucamonga, CA, 91729"
        }
    ];

    return (
        <div className=''>

            <div className=' space-y-6'>
                {
                    contactInfo?.map((item, index) => (
                        <motion.div key={index}
                            custom={index} // Pass the index as a custom prop
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                        >
                            <div className="border px-6 py-6 space-y-5 rounded-xl">
                                <div className="bg-gray-200 hover:bg-red-700 p-10 relative w-[5px] h-[5px] -z-10 rounded-full flex justify-center items-center cursor-pointer">
                                    <Image className="bg-red-700-6 text-red-700 rounded-full absolute hover:bg-white" src={item.icon} width={30} height={30} alt="logo" />
                                </div>
                            {/* icons here  */}
                                <div className='space-y-2'>
                                    <h1 className="text-xl font-semibold"> {item.category}</h1>
                                    <p className='flex gap-2 text-sm'> <span><IoIosCall className="text-xl font-semibold " /></span>{item.phone}</p>
                                    <p className='flex gap-2 text-sm'> <span><MdEmail className={`text-xl font-semibold ${item.email? '' :'hidden'}`} /></span>{item.email}</p>
                                    <p className='flex gap-2 itext-sm'> <span><FaLocationDot className={`text-xl font-semibold ${item.address? '' :'hidden'}`}/></span>{item.address}</p>
                                </div>

                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
};

export default Info;