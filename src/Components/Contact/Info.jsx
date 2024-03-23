'use client'
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import service from "@/assets/service.png"
import Image from 'next/image';
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

    return (
        <div>
           
            <div className=' space-y-6'>
                {
                    [1, 2, 3].map((item, index) => (
                        <motion.div key={index}
                            custom={index} // Pass the index as a custom prop
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                        >
                            <div className="border px-6 py-6 space-y-5 rounded-xl">
                                <div className="bg-gray-200 hover:bg-red-700 p-10 relative w-[5px] h-[5px] -z-10 rounded-full flex justify-center items-center cursor-pointer">
                                    <Image className="bg-red-700-6 rounded-full absolute hover:bg-white" src={service} width={30} height={30} alt="logo" />
                                </div>

                                <h1 className="text-xl font-semibold "> Claim Inquiries</h1>
                                <p>(222) - 2222-2222</p>
                                <p>customerservice@usaunderwriters.com</p>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
};

export default Info;