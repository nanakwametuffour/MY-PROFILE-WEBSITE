import React, { useState } from 'react'

export default function GetInTouch() {
   const [result, setResult] = useState("");

   const onSubmit = async (event) => {
     event.preventDefault();
     setResult("Sending....");
     const formData = new FormData(event.target);

     formData.append("access_key", "afcf4fe3-656d-427c-8303-1d322a6af46b");

     const response = await fetch("https://api.web3forms.com/submit", {
       method: "POST",
       body: formData,
     });

     const data = await response.json();

     if (data.success) {
       setResult("Form Submitted Successfully");
       event.target.reset();
     } else {
       setResult(data.message);
     }
   };
  return (
    <div className="py-1 md:py-5 lg:py-10 text-white w-full h-auto flex flex-col px-1 md:px-5 lg:px-8 gap-5">
       
      <div className="border-b border-purple-400 w-[100%] md:w-[70%] lg:w-[20%]">
        <h1 className="font-semibold text-2xl">Get In Touch</h1>
      </div>

      <div className="w-full  h-auto">
        <form onSubmit={onSubmit} className="py-10 px-8 w-full z-10 border border-purple-400 border-opacity-50 rounded-sm flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 w-full">
            <input
              type="text" name='name' required
              className="bg-black border-purple-700 text-[#f1f1f1]  rounded-sm w-full border p-3 text-xl font-bodyFont placeholder:text-[18px] placeholder:text-gray-500 outline-none"
              placeholder="Enter Your Full Name"
            />
            <input
              type="email" name='email' required
              className="bg-black border-purple-700 text-[#f1f1f1]  rounded-sm w-full border p-3 text-xl font-bodyFont placeholder:text-[18px] placeholder:text-gray-500 outline-none"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="flex flex-row justify-between gap-10 w-full relative">
            <input
              type="text" name='text' required
              className="bg-black border-purple-700 text-[#f1f1f1]  rounded-sm w-full border p-3 text-xl font-bodyFont placeholder:text-[18px] placeholder:text-gray-500 outline-none"
              placeholder="Your enquiry about"
            />
          </div>
          <div className="flex flex-row justify-between gap-10 w-full relative">
            <textarea
              name="message"
              rows="6" required
              className="bg-black border-purple-700 text-[#f1f1f1]  rounded-sm w-full border p-3 text-xl font-bodyFont placeholder:text-[18px] placeholder:text-gray-500 outline-none"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="w-full flex justify-center mt-4">
            <div className="w-[400px] h-[60px] flex justify-center items-center overflow-hidden">
              <button type='submit' className="border-purple-800 text-[#f1f1f1] font-titleFont text-xl  transition-hover relative duration-300 font-semibold w-[394px] h-14 border-[1px] group">
                Send Your Message
                <span className="bg-purple-800 absolute w-20 h-1 -left-1 -top-1 -translate-x-[81px] group-hover:translate-x-0 transition-all duration-500"></span>
                <span className="bg-purple-800 absolute w-1 h-8 -top-1 -left-1 -translate-y-[31px] group-hover:translate-y-0 transition-all duration-200"></span>
                <span className="bg-purple-800 absolute w-20 h-1 -right-1 -bottom-1 translate-x-[81px] group-hover:translate-x-0 transition-all duration-500"></span>
                <span className="bg-purple-800 absolute w-1 h-8  -bottom-1 -right-1 translate-y-[31px] group-hover:translate-y-0 transition-all duration-200"></span>
              </button>
            </div>
          </div>
               <span className='flex justify-center text-green-700'>{result}</span>
        </form>
      </div>
    </div>
  );
}
