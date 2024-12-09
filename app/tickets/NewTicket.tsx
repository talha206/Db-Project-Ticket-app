import React from 'react';

// Define the type for the function argument
export const handleCreateNewTicket = (
    setRightSectionContent: React.Dispatch<React.SetStateAction<JSX.Element | null>>
  ): void => {
    setRightSectionContent(
      <div className="lg:h-[44rem] xl:h-[44rem] sm:h-auto h-auto xl:px-14 lg:px-10 lg:mb-0 lg:py-10 xrs:px-12 xxs:px-10 pl-6 pr-8 sm:py-7 py-4 font-mono bg-white border border-[#7D7D82] rounded-[10px]   ">
        <form className="flex flex-col">
          <h1 className="text-base sm:text-lg lg:text-xl ml-2 font-medium  mb-[14px]">Create New Ticket</h1>
          
          {/* Ticket Type Dropdown */}
          <div className='flex flex-col xrs:flex-row lg:flex-col justify-between mb-5 xrs:mb-0  lg:mb-9'>
          <div className=" relative lg:mb-9 mb-6 mt-2 w-auto shrink">
            <select
              id="ticketType"
              className="w-full xrs:w-28 xs:w-36  md:w-44 h-9 xrs:h-10 xs:h-11 lg:h-14 xl:h-14 lg:w-full px-3 pt-1 xrs:pt-1 pb-1 border border-gray-300 rounded text-[10px] xs:text-xs lg:text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer"
            >
              <option>Story</option>
              <option>Bug</option>
              <option>Task</option>
            </select>
            <label
              htmlFor="ticketType"
              className="absolute left-4 -top-[15px] px-1 bg-white text-[#424247] text-[10px] xrs:text-xs sm:text-sm   peer-focus:text-blue-500  "
            >
              Ticket Type
            </label>
          </div>
  
          {/* Summary Input */}
          <div className="relative  xrs:pb-0  xrs:mt-2 lg:mt-0 shrink ">
            <input
              id="summary"
              type="text"
              className="w-full xrs:w-28 xs:w-36   md:w-44 h-9 xrs:h-10 xs:h-11 lg:h-9 xl:h-9 lg:w-full p-3 pt-4 pb-3 border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer"
              placeholder=" "
            />
            <label
              htmlFor="summary"
             className="absolute left-4 -top-[14px] px-1 bg-white text-[#424247] text-[10px] xrs:text-xs sm:text-sm  peer-focus:text-blue-500  "
            >
              Summary
            </label>
          </div>
          </div>
  
          {/* Details Textarea */}
          <div className="relative lg:mb-8 mb-5">
            <input
              id="details"
              type='text'
              className="w-full lg:h-[154px] h-24 p-3 pt-4 pb-3 border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer"
              placeholder=" "
            />
            <label
              htmlFor="details"
              className="absolute left-4 -top-[14px] px-1 bg-white text-[#424247] text-[10px] xrs:text-xs sm:text-sm   peer-focus:text-blue-500  "
            >
              Details
            </label>
          </div>
  
          {/* Hours Input */}
          <div className="relative lg:mb-8">
            <input
              id="hours"
              type="number"
              className="w-full h-7 lg:h-10 p-3 pt-4 pb-3 border border-gray-300 rounded text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer"
              placeholder="0.00"
            />
            <span className="absolute flex right-7 bottom-1 sm:bottom-1 lg:bottom-1 gap-1  lg:mt-0"> 
        <span className="block w-[1px] lg:h-[27px]  h-5 bg-[#B4B4B8] bottom-2"></span>
         <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-1'>
              <path d="M0 15.74C0 15.8063 0.0263392 15.8698 0.0732233 15.9167C0.120107 15.9636 0.183696 15.99 0.25 15.99H15.8055C15.8385 15.9899 15.8712 15.9834 15.9017 15.9707C15.9321 15.958 15.9598 15.9394 15.983 15.916L15.9845 15.915L15.988 15.909C16.0129 15.8809 16.0312 15.8476 16.0415 15.8115C16.0448 15.8001 16.0472 15.7886 16.0485 15.777C16.0505 15.7645 16.056 15.7535 16.056 15.7405C16.056 15.7205 16.049 15.703 16.0445 15.6845C16.043 15.6775 16.046 15.6705 16.0435 15.6635L14.4635 10.806C14.4513 10.7684 14.4304 10.7343 14.4025 10.7065L5.844 2.14745C5.835 2.13345 5.8285 2.11845 5.8165 2.10595L3.947 0.236454C3.80079 0.0906599 3.60273 0.00878906 3.39625 0.00878906C3.18977 0.00878906 2.99171 0.0906599 2.8455 0.236454L0.228 2.85395C0.081 3.00095 0 3.19645 0 3.40445C0 3.61245 0.081 3.80845 0.228 3.95545L2.056 5.78345C2.065 5.79695 2.071 5.81245 2.083 5.82445L10.628 14.427C10.6575 14.4567 10.6939 14.4785 10.734 14.4905L14.0905 15.4905H0.25C0.183782 15.4905 0.12027 15.5167 0.0733998 15.5635C0.0265301 15.6103 0.000132435 15.6737 0 15.74ZM3.181 5.08095L11.0245 12.824L10.736 13.825L2.6135 5.64845L3.181 5.08095ZM11.408 12.5005L3.534 4.72795L4.7525 3.50945L12.556 11.3335V12.5005H11.408ZM12.8675 10.938L5.106 3.15595L5.6255 2.63645L13.731 10.742L12.8675 10.938ZM11.494 13.0005H12.806C12.8723 13.0005 12.9359 12.9741 12.9828 12.9272C13.0297 12.8803 13.056 12.8168 13.056 12.7505V11.408L14.0595 11.18L15.421 15.365L11.177 14.1005L11.494 13.0005ZM0.5 3.40445C0.5 3.32995 0.529 3.26045 0.5815 3.20745L3.199 0.589954C3.25145 0.537895 3.32235 0.508681 3.39625 0.508681C3.47015 0.508681 3.54105 0.537895 3.5935 0.589954L5.2795 2.27595L2.268 5.28745L0.582 3.60145C0.555896 3.57574 0.535195 3.54506 0.521114 3.51123C0.507032 3.4774 0.499853 3.4411 0.5 3.40445Z" fill="black"/>
        </svg>
        <span className="block w-[1px] lg:h-[27px]  h-5 bg-[#B4B4B8] "></span>
        </span>

            <label
              htmlFor="hours"
              className="absolute left-4 -top-[14px] px-1 bg-white text-[#424247] text-[10px] xrs:text-xs sm:text-sm   peer-focus:text-blue-500  "
            >
              Hours
            </label>
          </div>
  
          {/* Buttons */}
          <div className='flex lg:flex-col lg:justify-normal justify-between mt-5 lg:mt-0'>
            <button
              type="submit"
              className="bg-[#2EA8C3] lg:mb-[18px] text-black text-xs xs:text-sm sm:text-base lg:text-lg font-mono xs:px-4 px-2 lg:py-4 xs:py-2 py-1 rounded"
            >
              Save Ticket
            </button>
            <button
              type="button"
              className="px-4 lg:py-4 xs:py-2 py-1 rounded lg:mt-4 border-2 border-[#2EA8C3] bg-white text-[#2EA8C3] text-xs xs:text-sm sm:text-base lg:text-lg font-mono"
              onClick={() => setRightSectionContent(null)} // Reset the right section
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  };
  
 
 
  


  