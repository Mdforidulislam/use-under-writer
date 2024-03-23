'use client'
import React from "react";
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from "next/image";
import service from "@/assets/service.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const FeaturesCard = ({items}) => {
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

    // use for slider responsive 

    const settings = {
        dots: true,
        infinite: false,
        
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
         // Add custom styling for the slides
    customSlideStyle: {
        margin: '0 10px', // Adjust the gap size as needed
    }
    };


    return (
        <div className="slider-container md:py-16 py-8">
        <Slider {...settings} >
            {
                items?.map((item, index) => (
                    <motion.div key={index}
                        custom={index} // Pass the index as a custom prop
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                    >
                        <div className="border px-6 py-6 space-y-5 rounded-md" style={settings.customSlideStyle}>
                            <div className="bg-gray-200 p-10 relative w-[5px] h-[5px] -z-10 rounded-full flex justify-center items-center">
                                <Image className="bg-red-700-6 rounded-full absolute" src={service} width={30} height={30} alt="logo" />
                            </div>
                            
                            <h1 className="text-xl font-semibold ">{item.title} </h1>
                            <p>{item.description}</p>
                        </div>
                    </motion.div>
                ))
            }
        </Slider>
    </div>
    );
};

export default FeaturesCard;
