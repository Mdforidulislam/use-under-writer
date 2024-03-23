'use client'

const ContactForm = () => {
    return (
        <div>
            <div className="md:border-t-8 border-red-700 space-y-6 rounded-t-lg w-full shadow-sm rounded-sm p-4">
                <div className="hidden md:block">
                    <h1 className="text-3xl font-semibold text-black ">Send a Message</h1>
                </div>
                <div>
                    <form className="w-full">
                        <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 mb-4">
                            <div className="flex flex-col bg-F7F9FC rounded-md overflow-hidden">
                                <label htmlFor="" className="text-md font-extralight text-gray-500 p-2">Full Name</label>
                                <input type="text" className="text-normal bg-[#F7F9FC] text-[#B1BBC6] border-none focus:outline-none px-4 w-full py-4 rounded-sm " placeholder="John" />
                            </div>
                            <div className="flex flex-col bg-F7F9FC rounded-md overflow-hidden">
                                <label htmlFor="" className="text-sm font-extralight text-gray-500 p-2">Email</label>
                                <input type="email" className="text-normal bg-[#F7F9FC] text-[#B1BBC6] border-none  focus:outline-none px-4 w-full py-4 rounded-sm" placeholder="tester@neutrix.co" />
                            </div>
                            <div className="flex flex-col bg-F7F9FC rounded-md overflow-hidden">
                                <label htmlFor="" className="text-sm font-extralight text-gray-500 p-2">Mobile Number</label>
                                <input type="text" className="text-normal bg-[#F7F9FC] text-[#B1BBC6] focus:outline-none border-none  px-4 w-full py-4 rounded-sm" placeholder="Mobile Number" />
                            </div>
                            <div className="flex flex-col bg-F7F9FC rounded-md overflow-hidden">
                                <label htmlFor="" className="text-sm font-extralight text-gray-500 p-2">Policy Number</label>
                                <input type="text" className="text-normal bg-[#F7F9FC] text-[#B1BBC6]  focus:outline-none border-none  px-4 w-full py-4 rounded-sm" placeholder="Policy Number" />
                            </div>
                        </div>
                        <div className="bg-F7F9FC rounded-md overflow-hidden">
                            <label htmlFor="" className="text-sm font-extralight text-gray-500 p-2">Your Message</label>
                            <textarea className="text-normal bg-[#F7F9FC] focus:outline-none text-[#B1BBC6] border-none  px-4 w-full py-4 rounded-sm" name="message" id="" cols="30" rows="10"></textarea>
                        </div>
                        <button className="px-10 py-3 rounded-full text-sm text-white font-medium bg-red-700 mt-4">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;