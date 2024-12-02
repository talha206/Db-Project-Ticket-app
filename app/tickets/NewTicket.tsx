import React from 'react';

// Define the type for the function argument
export const handleCreateNewTicket = (
    setRightSectionContent: React.Dispatch<React.SetStateAction<JSX.Element | null>>
  ): void => {
    setRightSectionContent(
      <div className=" lg:h-[44rem] xl:h-[44rem] sm:h-auto  h-72 px-14 py-10 font-mono bg-white border-2 border-gray-300 rounded-xl   ">
        <form className="flex flex-col">
          <h1 className="text-lg ml-2 font-medium  mb-3">Create New Ticket</h1>
          
          {/* Ticket Type Dropdown */}
          <div className="relative mb-4 mt-2">
            <select
              id="ticketType"
              className="w-full p-3 pt-4 pb-3 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer"
            >
              <option>Story</option>
              <option>Bug</option>
              <option>Task</option>
            </select>
            <label
              htmlFor="ticketType"
              className="absolute left-4 -top-[12px] px-1 bg-white text-[#424247] text-sm   peer-focus:text-blue-500  "
            >
              Ticket Type
            </label>
          </div>
  
          {/* Summary Input */}
          <div className="relative mb-3">
            <input
              id="summary"
              type="text"
              className="w-full p-3 pt-4 pb-3 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer"
              placeholder=" "
            />
            <label
              htmlFor="summary"
             className="absolute left-4 -top-[14px] px-1 bg-white text-[#424247] text-sm  peer-focus:text-blue-500  "
            >
              Summary
            </label>
          </div>
  
          {/* Details Textarea */}
          <div className="relative mb-3">
            <input
              id="details"
              type='text'
              className="w-full h-[154px] p-3 pt-4 pb-3 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer"
              placeholder=" "
            />
            <label
              htmlFor="details"
              className="absolute left-4 -top-[14px] px-1 bg-white text-[#424247] text-sm   peer-focus:text-blue-500  "
            >
              Details
            </label>
          </div>
  
          {/* Hours Input */}
          <div className="relative mb-8">
            <input
              id="hours"
              type="number"
              className="w-full p-3 pt-4 pb-3 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer"
              placeholder="0.00"
            />
            <label
              htmlFor="hours"
              className="absolute left-4 -top-[14px] px-1 bg-white text-[#424247] text-sm   peer-focus:text-blue-500  "
            >
              Hours
            </label>
          </div>
  
          {/* Buttons */}
          <button
            type="submit"
            className="bg-[#2EA8C3] mb-[18px] text-black text-lg font-mono px-4 py-4 rounded"
          >
            Save Ticket
          </button>
          <button
            type="button"
            className="px-4 py-4 rounded mt-4 border-2 border-[#2EA8C3] bg-white text-[#2EA8C3] text-lg font-mono"
            onClick={() => setRightSectionContent(null)} // Reset the right section
          >
            Cancel
          </button>
        </form>
      </div>
    );
  };
  
 
 
  


  