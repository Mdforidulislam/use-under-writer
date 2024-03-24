'use client'

import { useEffect, useState } from 'react';

import { FaAngleDoubleUp } from "react-icons/fa";


const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll animation
        });
    };

    // Function to toggle visibility of the button based on scroll position
    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const scrollThreshold = 400; // Adjust the scroll threshold as needed

        setIsVisible(scrollTop > scrollThreshold);
    };

    // Add scroll event listener to toggle button visibility
    // Cleanup the event listener when component unmounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            className={`fixed bottom-8 right-8 bg-red-700 text-white rounded-full p-3 ${isVisible ? 'visible' : 'invisible'}`}
            onClick={scrollToTop}
        >
            {/* Arrow icon */}
            <FaAngleDoubleUp />
        </button>
    );
};

export default ScrollToTopButton;
