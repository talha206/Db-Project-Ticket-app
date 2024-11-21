"use client"
import React from 'react';
import { Ticket } from '../../lib/types';

interface TicketTimeTrackerProps {
  tickets: Ticket[];
}

const TicketTimeTracker: React.FC<TicketTimeTrackerProps> = ({ tickets }) => {
  
  return (
    <div className="font-mono h-screen max-w-max overflow-x-auto"> {/* Set to full viewport height with vertical scroll */}

      <div className="bg-white rounded-lg ">
        {/* Header Row */}
        <div className="grid sm:grid-cols-[300px,250px] grid-cols-[200px,150px] gap-x-4 font-normal pb-2 mb-2">
          <div className='2xl:text-md text-[10px] sm:text-sm italic '>Ticket</div>
          <div className='2xl:text-md text-[10px] sm:text-sm italic text-[#000000b0]'  >Time Logged</div>
        </div>
        
        <span className='absolute xl:left-[390px] xl:top-[289px] lg:left-[390px] lg:top-[255px] 2xl:left-[825px] 2xl:top-[360px] md:top-[572px] md:left-[56%] sm:left-[57%] left-[54%]'>
          <svg className='md:w-[3px] 2xl:h-[380px] xl:h-[279px] lg:h-[240px] md:h-[244px] sm:h-[240px] sm:w-[6px] h-[160px] w-[2px]' viewBox="0 0 2 226" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line opacity="0.6" x1="1.23338" y1="0.443604" x2="1.23337" y2="285.451" stroke="url(#paint0_linear_3_12)" strokeOpacity="0.6" strokeWidth="0.896445"/>
            <defs>
              <linearGradient id="paint0_linear_3_12" x1="0.285156" y1="0.443603" x2="0.285146" y2="225.451" gradientUnits="userSpaceOnUse">
                <stop stopOpacity="0.2"/>
                <stop offset="1"/>
              </linearGradient>
            </defs>
          </svg>
        </span>
        
        <div className='2xl:mt-8'>
          {/* Ticket Rows */}
          {tickets.map((ticket) => (
            <div key={ticket.id} className="grid sm:grid-cols-[300px,250px] grid-cols-[210px,110px] sm:gap-x-4 gap-x-2 items-center gradient-border-b xl:py-4 sm:py-3 py-1">
              {/* Left Column - Ticket Info */}
              <div className="flex items-center sm:pr-6 justify-normal">
                <span className="mr-2">
                  <svg className='xl:w-[23px] lg:w-[18px] md:w-[19px] sm:w-[17px] w-[10px]' viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.792969" y="0.304443" width="21.5147" height="21.5147" rx="3.58578" fill="#1E8826"/>
                    <circle cx="11.5501" cy="11.0618" r="4.48223" fill="white"/>
                  </svg>
                </span>
                <span className="font-medium md:text-[13px] sm:text-[12px] text-[8px] whitespace-nowrap ">{ticket.id}</span>
                <span className="ml-2 text-black font-normal md:text-[13px] sm:text-[12px] text-[8px] whitespace-nowrap">{ticket.title}</span>
              </div>

              {/* Right Column - Time Logged */}
              <div>
                <span className='font-normal 2xl:text-3xl md:text-[13px] sm:text-[12px] text-[8px] sm:pl-8 whitespace-nowrap'>{ticket.timeLogged}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketTimeTracker;
