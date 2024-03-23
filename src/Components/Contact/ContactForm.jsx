'use client'

const ContactForm = () => {
    return (
        <div>
            <div className="md:border-t-8 rounded-t-lg">
                <div className="hidden md:block">
                    <h1 className="text-3xl font-semibold text-black ">Send a Message</h1>
                </div>
                <div>
                <form>
                        <div className="grid grid-cols-2 gap-4 mb-4 w-full">
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-sm font-extralight text-gray-500 ">Full Name</label>
                                <input type="text" className="text-normal text-[#B1BBC6] border border-gray-300 rounded-md py-2 px-4 w-full" placeholder="John" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-sm font-extralight text-gray-500 ">Email</label>
                                <input type="email" className="border border-gray-300 rounded-md py-2 px-4" placeholder="tester@neutrix.co" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-sm font-extralight text-gray-500 ">Mobile Number</label>
                                <input type="text" className="border border-gray-300 rounded-md py-2 px-4" placeholder="Mobile Number" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-sm font-extralight text-gray-500 ">Policy Number</label>
                                <input type="text" className="border border-gray-300 rounded-md py-2 px-4" placeholder="Policy Number" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className="text-sm font-extralight text-gray-500 ">Your Message</label>
                            <textarea className="border border-gray-300 rounded-md py-2 px-4 w-full" name="message" id="" cols="30" rows="10"></textarea>
                        </div>

                         <button className="px-10 py-3 rounded-full text-sm text-white font-medium bg-red-700">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;