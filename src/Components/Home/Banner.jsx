'use client'

import Image from "next/image";
import maneLogo from '@/assets/man.png'
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";


const Banner = () => {
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
        <div className="max-w-screen-xl mx-auto py-6">
            <div className=" flex justify-between  h-full items-center bg-red-700 px-6 rounded-md py-7 md:py-0 ">
                <div className="space-y-6 py-10">
                    <motion.div 
                        custom={3} // Pass the index as a custom prop
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                        className="text-2xl md:text-3xl lg:text-5xl font-bold text-white w-full">Get affordable, <br /> same-day coverage  <br /> in no time.</motion.div>
                    <motion.div 
                        custom={4} // Pass the index as a custom prop
                        initial="hidden"
                        animate={controls}
                        variants={variants} 
                        className="text-sm font-light text-white w-full md:w-3/4">With roots over a century deep in the birthplace of the automobile industry, USA Underwriters has the knowledge and expertise to help tailor a policy to suit your lifestyle, your budget, and your priorities.</motion.div>
                    <motion.div 
                        custom={5} // Pass the index as a custom prop
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                        >
                        <button className="bg-white px-6 py-3 rounded-full text-sm font-semibold">Report a Claim</button>
                        <button className="px-6 py-3 rounded-full text-sm font-semibold text-white">Learn More</button>
                    </motion.div>
                </div>
                <div className=" hidden md:flex">
                    <Image src={maneLogo} width={400} height={400} alt="man logo" />
                </div>
            </div>
        </div>
    );
};

export default Banner;