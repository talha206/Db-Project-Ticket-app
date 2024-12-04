import React, { useState } from "react";

interface LogTimeFormProps {
  ticketId: string;  
  ticketTitle: string;  
  onClose: () => void;  
}

const LogTimeForm: React.FC<LogTimeFormProps> = ({ ticketId, ticketTitle, onClose }) => {
  const [manualTime, setManualTime] = useState<string>("0.00");
  const [notes, setNotes] = useState<string>("");

  return (
    <div className=" w-[70%] font-mono lg:w-full 2xl:w-[35%] 2xl:h-[44rem] sm:h-[340px] h-72 lg:h-[38rem] xl:h-[40rem]  bg-white rounded-lg border border-[#7D7D82] ">
      <h2 className="text-lg flex items-center ml-7 mb-4 mt-5">
      <span className="mr-3 ">
                  <svg
                    className="lg:w-[18px] md:w-[19px] sm:w-[17px] w-[10px]"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.792969"
                      y="0.304443"
                      width="21.5147"
                      height="21.5147"
                      rx="3.58578"
                      fill="#1E8826"
                    />
                    <circle cx="11.5501" cy="11.0618" r="4.48223" fill="white" />
                  </svg>
                </span>
        <span className=" font-medium mr-3">{ticketId} </span>
        <span>{ticketTitle}</span>
      </h2>
      <span className="block w-full h-[1px] bg-[#7D7D82] "></span>
      {/* Manual Time Logging */}
      <div className="mb-7 ml-7 mr-10">
        <label htmlFor="manualTime" className="block text-lg mb-4 ">
          Log time manually
        </label>
        <input
          type="number"
          id="manualTime"
          value={manualTime}
          onChange={(e) => setManualTime(e.target.value)}
          className="mt-1 block w-full h-9 rounded border border-[#b4b4bb]  focus:border-blue-500 focus:ring-blue-500 sm:text-sm pl-3   mr-[43px]"
        />
      </div>

      {/* Timer Section */}
      <div className="mb-4 mx-7 ">
        <div className="flex justify-between items-center">
        <label className="block text-lg  mb-2">Track with Timer</label>
        <div className="mb-2 text-blue-500 text-sm underline cursor-pointer">
          Use countdown timer
        </div>
        </div>
        <div className="flex flex-col space-x-2 items-center">
          {/* Timer Inputs */}
          <div className="flex space-x-1 mt-9">
            <input
              type="text"
              className="w-[77px] h-[90px] text-center text-[44px] border border-gray-300 rounded-md shadow-sm"
              defaultValue="00"
              readOnly
            />
            <span className="mt-5 text-5xl text-[#B4B4B8]">:</span>
            <input
              type="text"
              className="w-[77px] h-[90px] text-center text-[44px] border  border-gray-300 rounded-md shadow-sm"
              defaultValue="00"
              readOnly
            />
            <span className="mt-5 text-5xl text-[#B4B4B8]">:</span>
            <input
              type="text"
              className="w-[77px] h-[90px] text-center text-[44px] border border-gray-300 rounded-md shadow-sm"
              defaultValue="00"
              readOnly
            />
          </div>

          {/* Timer Controls */}
          <div className="  flex text-lg mt-[39px]">
            <button className="px-4 py-2 mr-10 text-[#0000006b] rounded-md underline">Reset</button>
            <button className="px-[38px]  py-3 bg-green-600 text-white rounded-md">Start</button>
            <button className="px-4 py-2 ml-10 text-[#0000006b] rounded-md underline">Stop</button>
          </div>
        </div>
        
      </div>
      <span className="block w-auto h-[1px] bg-[#B4B4B8] ml-5 mr-8"></span>

      {/* Notes Section */}
      <div className="relative mb-4 mx-9 mt-5">
        <label htmlFor="notes" className="absolute -top-4 left-2 bg-white px-1 block text-sm font-normal text-gray-700">
          Notes
        </label>
        <input
          id="notes"
         type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="h-[115px] mt-1 block w-full rounded-[4px]  border border-gray-300 shadow-sm   sm:text-sm"
        />
      </div>

      {/* Buttons */}
      <div className="flex  justify-around mx-9">
        <button
          type="button"
          onClick={onClose}
          className="w-[186px] text-lg px-11 py-4 bg-gray-300 text-gray-700 rounded-md"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-[186px] text-lg px-11 py-4 bg-blue-600 text-white rounded-md"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default LogTimeForm;
