'use client';
import React, { useState } from 'react';
import TicketTimeTracker from '../tickets/Ticket'; // Assuming this is your component
import { tickets } from '../../lib/tickets';
import { handleCreateNewTicket } from 'app/tickets/NewTicket'; // Import handler
import LogTimeForm from './updateform'; // Import your form component
import { Ticket as TicketType } from '../../lib/types'; // Import the original Ticket type

interface ExtendedTicket extends TicketType {
  description: string; // Add the missing description field here
}

const Ticket: React.FC = () => {
  const [rightSectionContent, setRightSectionContent] = useState<JSX.Element | null>(null);
  const [selectedTicket, setSelectedTicket] = useState<ExtendedTicket | null>(null); // Use the extended type

  // Handler for when "Log time" is clicked
  const handleLogTimeClick = (ticketId: string, ticketTitle: string) => {
    const ticket = tickets.find((t) => t.id === ticketId); // Find the ticket by ID
    if (ticket) {
      const extendedTicket: ExtendedTicket = {
        ...ticket, // Spread the original ticket properties
        description: '', // Provide a description if needed
      };
      setSelectedTicket(extendedTicket); // Set the selected ticket
      setRightSectionContent(
        <LogTimeForm
          ticketId={ticket.id}
          ticketTitle={ticket.title} // Pass the ticketTitle here
          onClose={() => setRightSectionContent(null)} // Reset content on close
        />
      );
    }
  };

  return (
    <div className="w-full h-auto font-mono">
      {/* Header */}
      <h1 className="sm:w-full 2xl:text-3xl sm:text-2xl text-lg sm:py-6 py-4 sm:pl-16 pl-8 text-[#9B9BC3] font-normal bg-[#424247] tracking-widest">
        Ticket Time Tracker
      </h1>

      {/* Main Container */}
      <div className={`2xl:px-16 xl:px-14 md:px-12 sm:px-8 py-10 ${
          rightSectionContent
            ? '  lg:pl-10 lg:pr-6 xl:px-14 md:px-12 sm:px-8 py-10 '
            : ' lg:pl-12 lg:pr-8 '
        }`}>
        <div
          className={`w-[303px] xxs:w-auto flex flex-col-reverse lg:flex-row ${
            rightSectionContent ? 'gap-x-0' : 'gap-x-4'
          } items-center lg:items-start justify-between`}
        >
          {/* Left Section - Existing Tickets */}
          <div className="w-max inline-block xl:ml-7">
            <h2 className="w-max 2xl:text-2xl lg:text-xl md:text-lg text-base font-medium mt-10 lg:mt-1 ml-10 xs:ml-2 sm:ml-0">
              Existing tickets
            </h2>
            <div className="w-max pt-7 sm:pt-12 sm:ml-0">
              <TicketTimeTracker tickets={tickets} onLogTimeClick={handleLogTimeClick} />
            </div>
          </div>

          {/* Right Section - Render dynamically based on the selected ticket */}
               <div className={`bg-[#EFEFF0] rounded-xl 2xl:w-[35%] 2xl:h-[44rem] xl:w-[40%] sm:h-[340px] h-72 lg:h-[38rem] xl:h-[40rem] lg:mt-7 sm:ml-0 ml-4 pb-10 flex flex-col ${
    rightSectionContent 
    ? (rightSectionContent.type === LogTimeForm // Check if the content is LogTimeForm
        ? 'lg:w-[35%] w-[82%]  sm:mb-56 xrs:mb-52 mb-44 lg:mb-10'  // Larger margin for LogTimeForm
        : 'lg:w-[35%] w-[82%] sm:mb-20  xrs:mb-20 mb-28 lg:mb-0 pb-0 sm:pb-10' // Existing margin for CreateNewTicket
      ) 
    : 'lg:w-[40%] w-[72%]'
  }`}
          >
            {/* Dynamically Render Right Section Content */}
            {rightSectionContent || (
              <div>
                <div className="flex justify-center">
                  <h1 className="w-max lg:text-sm xl:text-base sm:text-[15px] text-xs text-center font-medium 2xl:text-lg sm:pr-[50px] sm:pl-[49px] sm:pt-9 pr-9 pl-10 lg:pr-3 lg:pl-4 xl:pr-9 xl:pl-10 pt-7 leading-relaxed">
                    Select an existing ticket to log time <br />
                    <span> or </span>
                    <br />
                    <span
                      className="underline underline-offset-2 cursor-pointer"
                      onClick={() => handleCreateNewTicket(setRightSectionContent)} // Call handler here
                    >
                      Create a new one
                    </span>
                  </h1>
                </div>
                <div className="lg:pt-[72px] md:pt-8 sm:pt-6 sm:pl-12 sm:pr-9 pl-10 pr-8 lg:pr-5 lg:pl-6 xl:pr-9 xl:pl-10 pt-10">
                  <span className="mr-2 bg-[#D9D9D9] 2xl:h-10 lg:h-[33px] md:h-7 h-5 w-full inline-block"></span>
                  <span className="mr-2 bg-[#D9D9D9] 2xl:h-10 lg:h-[33px] md:h-7 h-5 w-full inline-block md:mt-[26px] sm:mt-5 mt-3"></span>
                  <div className="grid grid-cols-2 gap-x-4 items-center">
                    <span className="mr-2 bg-[#D9D9D9] 2xl:h-10 lg:h-[33px] md:h-7 h-5 w-full inline-block md:mt-[26px] sm:mt-5 mt-3"></span>
                    <span className="mr-2 bg-[#D9D9D9] 2xl:h-10 lg:h-[33px] md:h-7 h-5 w-full inline-block md:mt-[26px] sm:mt-5 mt-3"></span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
