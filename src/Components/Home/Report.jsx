import Image from 'next/image';
import woman from '@/assets/woman.png';

const Report = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-8">
            <div className="flex bg-cover bg-center relative md:h-[600px] h-full w-full  items-end ">
                <Image
                className='md:flex hidden'
                    src={woman}
                    alt="woman"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="p-8 md:w-[400px] w-full z-10 bg-red-700 rounded-md md:m-10">
                    <h1 className="text-xl font-bold mb-4 text-white">Obtain cost-effective same-day insurance coverage quickly.</h1>
                    <p className="text-sm mb-4 text-white">Lorem ipsum dolor sit amet consectetur. Ut nisi risus ipsum urna leo. Etiam enim varius dictum amet hac imperdiet facilisis malesuada.</p>
                    <button className="bg-gray-900 text-white  py-3 px-6 w-full md:w-auto font-medium rounded-full ">Report a Claim</button>
                </div>      
            </div>
        </div>
    );
};

export default Report;
