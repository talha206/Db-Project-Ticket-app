import React from 'react';
import TicketTimeTracker from '../tickets/Ticket';
import { tickets } from '../../lib/tickets';

const Ticket = () => {
  return (
    <div className="w-full h-max font-mono">
      {/* Header */}  
      <h1 className="sm:w-full 2xl:text-3xl sm:text-2xl text-lg sm:py-6 py-4 sm:pl-16 pl-8 text-[#9B9BC3] font-normal bg-[#424247] tracking-widest">
        Ticket Time Tracker
      </h1>

      {/* Main Container */}
      <div className="2xl:px-16 lg:pl-12 lg:pr-8 xl:px-14 md:px-12 sm:px-8 py-10">
        <div className="w-[303px] xxs:w-auto flex flex-col-reverse lg:flex-row lg:gap-x-4 items-center lg:items-start justify-between">
          
          {/* Left Section - Existing Tickets */}
          <div className="w-max inline-block xl:ml-7">
            <h2 className="w-max 2xl:text-2xl lg:text-xl md:text-lg text-base font-medium mt-10 lg:mt-1 ml-10 xs:ml-2 sm:ml-0">
              Existing tickets
            </h2>
            <div className="w-max pt-7 sm:pt-12  sm:ml-0">
              <TicketTimeTracker tickets={tickets} />
            </div>
          </div>

          {/* Right Section - Create New Ticket */}
          <div className="bg-[#EFEFF0] rounded-xl lg:w-[40%] 2xl:w-[35%] w-[70%] 2xl:h-[44rem] sm:h-[340px] h-72 lg:h-[38rem] xl:h-[40rem] lg:mt-7 sm:ml-0 ml-4 pb-10 flex flex-col">
            
            {/* Centered Heading */}
            <div className="  flex  justify-center ">
              <h1 className="w-max lg:text-sm xl:text-base sm:text-[15px] text-xs text-center font-medium 2xl:text-lg sm:pr-[50px] sm:pl-[49px] sm:pt-9 pr-9 pl-10 lg:pr-3 lg:pl-4 xl:pr-9 xl:pl-10 pt-7 leading-relaxed">
                Select an existing ticket to log time <br /><span> or </span><br />
                <span className="underline underline-offset-2">Create a new one</span>
              </h1>
            </div>

            {/* Ticket Actions */}
            <div className="lg:pt-[72px] md:pt-8 sm:pt-6 sm:pl-12 sm:pr-9 pl-10 pr-8 lg:pr-5 lg:pl-6 xl:pr-9 xl:pl-10 pt-10">
              <span className="mr-2 bg-[#D9D9D9] 2xl:h-10 lg:h-[33px] md:h-7 h-5 w-full inline-block"></span>
              <span className="mr-2 bg-[#D9D9D9] 2xl:h-10 lg:h-[33px] md:h-7 h-5 w-full inline-block md:mt-[26px] sm:mt-5 mt-3"></span>
              <div className="grid grid-cols-2 gap-x-4 items-center">
                <span className="mr-2 bg-[#D9D9D9] 2xl:h-10 lg:h-[33px] md:h-7 h-5 w-full inline-block md:mt-[26px] sm:mt-5 mt-3"></span>
                <span className="mr-2 bg-[#D9D9D9] 2xl:h-10 lg:h-[33px] md:h-7 h-5 w-full inline-block md:mt-[26px] sm:mt-5 mt-3"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
