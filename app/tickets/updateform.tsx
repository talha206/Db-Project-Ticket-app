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
    <div className="lg:w-[100%] 2xl:w-[35%] w-[70%] 2xl:h-[44rem] sm:h-[340px] h-72 lg:h-[38rem] xl:h-[40rem] mt-10 p-4 bg-white rounded-lg border border-[#7D7D82] ">
      <h2 className="text-lg font-semibold mb-4">
        {ticketId} {ticketTitle}
      </h2>
        <span className=" border-t-2 border-black w-[100%] "></span>
      {/* Manual Time Logging */}
      <div className="mb-4">
        <label htmlFor="manualTime" className="block text-lg font-medium text-gray-700">
          Log time manually
        </label>
        <input
          type="number"
          id="manualTime"
          value={manualTime}
          onChange={(e) => setManualTime(e.target.value)}
          className="mt-1 block w-full rounded-[4px] border border-[#b4b4bb]  focus:border-blue-500 focus:ring-blue-500 sm:text-sm pl-3 ml-[29px] mr-[43px]"
        />
      </div>

      {/* Timer Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center">
        <label className="block text-lg font-medium text-gray-700 mb-2">Track with Timer</label>
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
          <div className="space-x-2 flex text-lg mt-[39px]">
            <button className="px-4 py-2   text-[#0000006b] rounded-md underline">Reset</button>
            <button className="px-[38px] py-3 bg-green-600 text-white rounded-md">Start</button>
            <button className="px-4 py-2    text-[#0000006b] rounded-md underline">Stop</button>
          </div>
        </div>
        
      </div>

      {/* Notes Section */}
      <div className="relative mb-4">
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
      <div className="flex  justify-around">
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
