"use client";

import React from "react";
import { Ticket } from "../../lib/types";
import LogTimeForm from "./updateform";

interface TicketTimeTrackerProps {
  tickets: Ticket[];
  onLogTimeClick?: (ticketId: string, ticketTitle: string) => void; // Callback when "Log time" is clicked
}

// Helper function to process and underline "Log time"
const processTimeLogged = (
  timeLogged: string,
  ticket: Ticket,
  onLogTimeClick?: (ticketId: string, ticketTitle: string) => void
) => {
  if (timeLogged.includes("Log time")) {
    const [before, after] = timeLogged.split("Log time");
    return (
      <>
        {before}
        <u
          className="text-black-600 cursor-pointer"
          onClick={() => onLogTimeClick && onLogTimeClick(ticket.id, ticket.title)} // Trigger callback on click
        >
          Log time
        </u>
        {after}
      </>
    );
  }
  return timeLogged;
};


const TicketTimeTracker: React.FC<TicketTimeTrackerProps> = ({ tickets, onLogTimeClick }) => {
  return (
    <div className="font-mono xs:w-auto w-[295px]">
      {/* Container for ticket tracker */}
      <div className="relative bg-white rounded-lg xs:overflow-x-visible overflow-x-auto h-auto ml-7 xs:ml-0 sm:ml-0">
        {/* Header Row */}
        <div className="grid sm:grid-cols-[330px,200px] grid-cols-[260px,125px] gap-x-6 2xl:gap-x-32 font-normal pb-2 mb-2">
          <div className="2xl:text-lg text-xs sm:text-[13px] italic">Ticket</div>
          <div className="2xl:text-lg text-xs sm:text-[13px] italic text-[#000000b0]">Time Logged</div>
        </div>

        {/* Decorative Vertical Line */}
        <span className="absolute 2xl:left-[410px] 2xl:top-[48px] xl:left-[340px] xl:top-[33px] lg:left-[335px] lg:top-[32px] md:top-[28px] md:left-[340px] sm:left-[59%] left-[280px]">
          <svg
            className="md:w-[3px] 2xl:h-[300px] xl:h-[279px] lg:h-[240px] md:h-[244px] sm:h-[240px] sm:w-[6px] h-[160px] w-[2px]"
            viewBox="0 0 2 226"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              opacity="0.6"
              x1="1.23338"
              y1="0.443604"
              x2="1.23337"
              y2="285.451"
              stroke="url(#paint0_linear_3_12)"
              strokeOpacity="0.6"
              strokeWidth="0.896445"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3_12"
                x1="0.285156"
                y1="0.443603"
                x2="0.285146"
                y2="225.451"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity="0.2" />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </span>

        {/* Ticket Rows */}
        <div className="2xl:mt-8">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="grid 2xl:grid-cols-[360px,280px] sm:grid-cols-[300px,230px] grid-cols-[270px,110px] lg:gap-x-6 xl:gap-x-8 sm:gap-x-8 gap-x-6 items-center gradient-border-b xl:py-4 sm:py-3 py-1"
            >
              {/* Left Column - Ticket Info */}
              <div className="flex items-center sm:pr-6 justify-normal">
                <span className="mr-2">
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
                <span className="font-medium 2xl:text-[16px] sm:text-[13px] text-[11px] whitespace-nowrap">
                  {ticket.id}
                </span>
                <span className="ml-2 text-black font-normal 2xl:text-[16px] sm:text-[13px] text-[11px] whitespace-nowrap">
                  {ticket.title}
                </span>
              </div>

              {/* Right Column - Time Logged */}
              <div>
                <span className="font-normal 2xl:text-[16px] sm:text-[13px] text-[11px] sm:pl-8 whitespace-nowrap">
                  {processTimeLogged(ticket.timeLogged, ticket, onLogTimeClick)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketTimeTracker;
