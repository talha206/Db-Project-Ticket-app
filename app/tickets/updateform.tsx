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
    <div className=" w-[100%] font-mono xl:w-full 2xl:w-full 2xl:h-max sm:h-max h-max  lg:h-max  bg-white rounded-[10px] border border-[#7D7D82] ">
      <h2 className=" text-[10px] xxs:text-xs xs:text-sm  sm:text-sm xl:text-base   flex items-center ml-7 mb-3 mt-4 lg:mb-4 lg:mt-5">
      <span className="mr-3 ">
                  <svg
                    className="lg:w-[23px] md:w-[20px] sm:w-[18px] w-[10px]"
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
        <span className=" font-medium mr-2 xl:mr-3 whitespace-nowrap">{ticketId} </span>
        <span className="text-[9px] xxs:text-xs xs:text-sm  sm:text-sm xl:text-base">{ticketTitle}</span>
      </h2>
      <span className="block w-full h-[1px] bg-[#7D7D82] "></span>

      {/* Manual Time Logging */}
      <div className="sm:mt-6 xrs:mt-4 mt-2 lg:mt-[34px] mb-2 xrs:mb-4 sm:mb-6 lg:mb-9 ml-7 mr-10 relative">
        <label htmlFor="manualTime" className="block w-max text-xs xs:text-sm  sm:text-base  md:text-lg mb-4 ">
          Log time manually
        </label>
        <input
          type="number"
          id="manualTime"
          value={manualTime}
          onChange={(e) => setManualTime(e.target.value)}
          className="mt-1 block w-full text-xs xrs:text-sm h-7 sm:h-9 rounded border border-[#b4b4bb] hover:border-[#b4b4bb] active:border-[#b4b4bb] focus:border-blue-500 focus:ring-blue-500 sm:text-sm pl-3   "
        />

        <span className="absolute flex right-7 bottom-1 gap-1"> 
        <span className="block w-[1px] h-5 sm:h-[25px] bg-[#B4B4B8] bottom-2"></span>
         <svg    viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:mt-1 xs:h-4 xs:w-4 h-3 w-3 mt-1 xs:mt-0 ">
              <path d="M0 15.74C0 15.8063 0.0263392 15.8698 0.0732233 15.9167C0.120107 15.9636 0.183696 15.99 0.25 15.99H15.8055C15.8385 15.9899 15.8712 15.9834 15.9017 15.9707C15.9321 15.958 15.9598 15.9394 15.983 15.916L15.9845 15.915L15.988 15.909C16.0129 15.8809 16.0312 15.8476 16.0415 15.8115C16.0448 15.8001 16.0472 15.7886 16.0485 15.777C16.0505 15.7645 16.056 15.7535 16.056 15.7405C16.056 15.7205 16.049 15.703 16.0445 15.6845C16.043 15.6775 16.046 15.6705 16.0435 15.6635L14.4635 10.806C14.4513 10.7684 14.4304 10.7343 14.4025 10.7065L5.844 2.14745C5.835 2.13345 5.8285 2.11845 5.8165 2.10595L3.947 0.236454C3.80079 0.0906599 3.60273 0.00878906 3.39625 0.00878906C3.18977 0.00878906 2.99171 0.0906599 2.8455 0.236454L0.228 2.85395C0.081 3.00095 0 3.19645 0 3.40445C0 3.61245 0.081 3.80845 0.228 3.95545L2.056 5.78345C2.065 5.79695 2.071 5.81245 2.083 5.82445L10.628 14.427C10.6575 14.4567 10.6939 14.4785 10.734 14.4905L14.0905 15.4905H0.25C0.183782 15.4905 0.12027 15.5167 0.0733998 15.5635C0.0265301 15.6103 0.000132435 15.6737 0 15.74ZM3.181 5.08095L11.0245 12.824L10.736 13.825L2.6135 5.64845L3.181 5.08095ZM11.408 12.5005L3.534 4.72795L4.7525 3.50945L12.556 11.3335V12.5005H11.408ZM12.8675 10.938L5.106 3.15595L5.6255 2.63645L13.731 10.742L12.8675 10.938ZM11.494 13.0005H12.806C12.8723 13.0005 12.9359 12.9741 12.9828 12.9272C13.0297 12.8803 13.056 12.8168 13.056 12.7505V11.408L14.0595 11.18L15.421 15.365L11.177 14.1005L11.494 13.0005ZM0.5 3.40445C0.5 3.32995 0.529 3.26045 0.5815 3.20745L3.199 0.589954C3.25145 0.537895 3.32235 0.508681 3.39625 0.508681C3.47015 0.508681 3.54105 0.537895 3.5935 0.589954L5.2795 2.27595L2.268 5.28745L0.582 3.60145C0.555896 3.57574 0.535195 3.54506 0.521114 3.51123C0.507032 3.4774 0.499853 3.4411 0.5 3.40445Z" fill="black"/>
        </svg>
        <span className="block w-[1px] h-5 sm:h-[25px] bg-[#B4B4B8] "></span>
        </span>


      </div>

      {/* Timer Section */}
      <div className="mb-6 lg:mb-9 xl:mx-7 lg:mx-5 mx-7  ">
        <div className="flex justify-between items-center  " >
        <label className="block text-[10px] xrs:text-sm sm:text-base xl:text-lg  mb-2">Track with Timer</label>
        <div className="mb-2 text-blue-500 text-[7px] xrs:text-[10px] sm:text-xs xl:text-sm underline cursor-pointer">
          Use countdown timer
        </div>
        </div>
        <div className="flex flex-col space-x-2 items-center">
          {/* Timer Inputs */}
          <div className="flex space-x-1 lg:mt-9 sm:mt-5 mt-3 ">
            <input
              type="text"
              className="w-11 sm:w-16 xl:w-[77px] h-12 sm:h-16 lg:h-20 xl:h-[90px] text-center text-2xl sm:text-[32px] lg:text-[44px] border border-gray-300 rounded shadow-sm"
              defaultValue="00"
              readOnly
            />
            <span className="mt-1 sm:mt-3 lg:mt-5 text-3xl sm:text-5xl text-[#B4B4B8]">:</span>
            <input
              type="text"
              className="w-11 sm:w-16 xl:w-[77px] h-12 sm:h-16 lg:h-20 xl:h-[90px] text-center text-2xl sm:text-[32px] lg:text-[44px] border  border-gray-300 rounded shadow-sm"
              defaultValue="00"
              readOnly
            />
            <span className="mt-1 sm:mt-3 lg:mt-5 text-3xl sm:text-5xl text-[#B4B4B8]">:</span>
            <input
              type="text"
              className="w-11 sm:w-16 xl:w-[77px] h-12 sm:h-16 lg:h-20 xl:h-[90px] text-center text-2xl sm:text-[32px] lg:text-[44px] border border-gray-300 rounded shadow-sm"
              defaultValue="00"
              readOnly
            />
          </div>

          {/* Timer Controls */}
          <div className="  flex text-xs sm:text-[15px] xl:text-lg mt-6 lg:mt-[39px]">
            <button className="px-4 py-2 mr-2 xxs:mr-5 xl:mr-10 text-[#0000006b] rounded underline">Reset</button>
            <button className="sm:px-[40px] px-8 lg:py-4 sm:py-3 py-2 bg-green-600 text-white rounded">Start</button>
            <button className="px-4 py-2 ml-2 xxs:ml-5 xl:ml-10 text-[#0000006b] rounded underline">Stop</button>
          </div>
        </div>
        
      </div>
      <span className="block w-auto h-[1px] bg-[#B4B4B8] ml-5 mr-8"></span>

      {/* Notes Section */}
      <div className="relative mb-4 xl:mx-9 mx-7 mt-5">
        <label htmlFor="notes" className="absolute -top-4 left-2 bg-white px-1 block text-xs xrs:text-sm font-normal text-[#424247]">
          Notes
        </label>
        <input
          id="notes"
         type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="h-16 sm:h-20  lg:h-[115px] mt-1 block w-full rounded  border border-[#B4B4B8] shadow-sm   sm:text-sm"
        />
      </div>

      {/* Buttons */}
      <div className="flex  justify-around xl:mx-9 mx-6 xl:mb-7 mb-5">
        <button
          type="button"
          onClick={onClose}
          className="   xl:w-[186px] text-xs xrs:text-sm sm:text-base  xl:text-lg xl:px-11 lg:px-7  lg:py-3 xl:py-4 sm:px-11 xrs:px-9 px-6 sm:py-3 xrs:py-2 py-1  bg-white border-2 border-[#2EA8C3] text-[#2EA8C3] rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="   xl:w-[186px]  text-xs xrs:text-sm sm:text-base xl:text-lg xl:px-11 lg:px-7 lg:py-3 xl:py-4 sm:px-[54px] xrs:px-11 px-8 sm:py-3 xrs:py-2 py-1 bg-[#2EA8C3] text-black rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default LogTimeForm;
 