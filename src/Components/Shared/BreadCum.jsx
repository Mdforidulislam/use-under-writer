
'use client'

// components/BreadCum.js
import Image from 'next/image';
import Link from 'next/link';
import home from '@/assets/home.png';
import right from '@/assets/right.png';
import { useEffect, useState } from 'react';

const BreadCum = ({ pageName }) => {
    const [pathname, setPathname] = useState('');

    useEffect(() => {
        setPathname(window.location.pathname.replace(/^\/+/, ''));
    }, []);

    return (
        <div className='text-center  py-5'>
            <h1 className='text-gray-900 text-xl md:text-3xl font-medium'>{pageName}</h1>
            <div className='flex items-center justify-center h-full'>
                <Link href='/'>
                    <p className='flex items-center gap-3'>
                        <Image src={home} width={20} height={20} alt='home' />
                        <span className='ml-1'>Home</span>
                    </p>
                </Link>
                <div className='flex items-center h-full  gap-3'>
                    <div className=' flex items-end h-full mt-2 '>
                    <Image src={right} width={20} height={10} alt='right' />
                    </div>
                    <span className='capitalize'>{pathname}</span>
                </div>
            </div>
        </div>
    );
};

export default BreadCum;

