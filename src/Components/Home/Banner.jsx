'use client'

import Image from "next/image";
import maneLogo from '@/assets/man.png'
import iconR from '@/assets/iconR.png'
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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

    // slider here 

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="max-w-screen-xl mx-auto py-6">
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        [2, 3, 5].map((item, index) => (
                            <div key={index}>
                                <div className=" flex h-full items-center bg-red-700 px-6 rounded-md py-7 md:py-0 ">
                                    <div className="space-y-6 py-10">
                                        <motion.div
                                            custom={3} // Pass the index as a custom prop
                                            initial="hidden"
                                            animate={controls}
                                            variants={variants}
                                            className="text-3xl md:text-5xl lg:text-5xl font-bold text-white w-full uppercase space-y-1">Get affordable,<br className="mt-1" /> same-day <span className="md:inline-block block mt-1"></span> coverage <span className="inline-block md:block"></span> in no <span className=" mt-1 block md:inline-block"></span>  time.</motion.div>
                                        <motion.div
                                            custom={4} // Pass the index as a custom prop
                                            initial="hidden"
                                            animate={controls}
                                            variants={variants}
                                            className="text-sm font-light text-white w-full md:w-3/4">With roots over a century deep in the birthplace of the automobile  industry,  USA Underwriters has the knowledge and expertise to help tailor  a policy to suit  your lifestyle, your budget, and your priorities.</motion.div>
                                        <motion.div
                                            custom={5} // Pass the index as a custom prop
                                            initial="hidden"
                                            animate={controls}
                                            variants={variants}
                                            className="flex "
                                        >
                                            <button className="bg-white px-6 py-3 rounded-full text-sm font-semibold">Report a Claim</button>
                                            <button className="px-6 py-3 rounded-full text-sm font-semibold text-white flex  h-full items-center gap-2">Learn More <Image src={iconR} width={20} height={4} alt="man logo" /></button>
                                        </motion.div>
                                    </div>
                                    <div className=" hidden md:flex justify-center w-full">
                                        <Image src={maneLogo} width={400} height={400} alt="man logo" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </Slider>
            </div>

        </div>
    );
};

export default Banner;