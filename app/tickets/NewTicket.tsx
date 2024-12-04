import React from 'react';

// Define the type for the function argument
export const handleCreateNewTicket = (
    setRightSectionContent: React.Dispatch<React.SetStateAction<JSX.Element | null>>
  ): void => {
    setRightSectionContent(
      <div className="lg:h-[44rem] xl:h-[44rem] sm:h-auto h-auto lg:px-14  lg:mb-0 lg:py-10 px-12 sm:py-7 py-4 font-mono bg-white border-2 border-gray-300 rounded-xl   ">
        <form className="flex flex-col">
          <h1 className="text-sm sm:text-lg ml-2 font-medium  mb-3">Create New Ticket</h1>
          
          {/* Ticket Type Dropdown */}
          <div className='flex lg:flex-col justify-between'>
          <div className=" relative mb-4 mt-2 w-auto shrink">
            <select
              id="ticketType"
              className="w-24 sm:w-36 md:w-44 h-10 xs:h-11 lg:h-14 xl:h-14 lg:w-full p-3 pt-4 pb-3 border border-gray-300 rounded-[4px] text-[8px] xs:text-xs lg:text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer"
            >
              <option>Story</option>
              <option>Bug</option>
              <option>Task</option>
            </select>
            <label
              htmlFor="ticketType"
              className="absolute left-4 -top-[12px] px-1 bg-white text-[#424247] text-[10px] sm:text-sm   peer-focus:text-blue-500  "
            >
              Ticket Type
            </label>
          </div>
  
          {/* Summary Input */}
          <div className="relative lg:pb-3 xl:pb-3  mt-2 lg:mt-0 shrink ">
            <input
              id="summary"
              type="text"
              className="w-24 sm:w-36 md:w-44  h-10 xs:h-11 lg:h-9 xl:h-9 lg:w-full p-3 pt-4 pb-3 border border-gray-300 rounded-[4px] text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer"
              placeholder=" "
            />
            <label
              htmlFor="summary"
             className="absolute left-4 -top-[14px] px-1 bg-white text-[#424247] text-[10px] sm:text-sm  peer-focus:text-blue-500  "
            >
              Summary
            </label>
          </div>
          </div>
  
          {/* Details Textarea */}
          <div className="relative mb-3">
            <input
              id="details"
              type='text'
              className="w-full lg:h-[154px] h-24 p-3 pt-4 pb-3 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer"
              placeholder=" "
            />
            <label
              htmlFor="details"
              className="absolute left-4 -top-[14px] px-1 bg-white text-[#424247] text-[10px] sm:text-sm   peer-focus:text-blue-500  "
            >
              Details
            </label>
          </div>
  
          {/* Hours Input */}
          <div className="relative lg:mb-8">
            <input
              id="hours"
              type="number"
              className="w-full p-3 pt-4 pb-3 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer"
              placeholder="0.00"
            />
            <label
              htmlFor="hours"
              className="absolute left-4 -top-[14px] px-1 bg-white text-[#424247] text-[10px] sm:text-sm   peer-focus:text-blue-500  "
            >
              Hours
            </label>
          </div>
  
          {/* Buttons */}
          <div className='flex lg:flex-col lg:justify-normal justify-between mt-5 lg:mt-0'>
            <button
              type="submit"
              className="bg-[#2EA8C3] lg:mb-[18px] text-black text-xs xs:text-sm lg:text-lg font-mono xs:px-4 px-2 lg:py-4 xs:py-2 py-1 rounded"
            >
              Save Ticket
            </button>
            <button
              type="button"
              className="px-4 lg:py-4 xs:py-2 py-1 rounded lg:mt-4 border-2 border-[#2EA8C3] bg-white text-[#2EA8C3] text-xs xs:text-sm lg:text-lg font-mono"
              onClick={() => setRightSectionContent(null)} // Reset the right section
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  };
  
 
 
  


  