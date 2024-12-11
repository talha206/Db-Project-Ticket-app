"use client";
import React, { useState } from "react";
import TicketTimeTracker from "../tickets/Ticket"; // Assuming this is your component
import { tickets } from "../../lib/tickets";
import { handleCreateNewTicket } from "app/tickets/NewTicket"; // Import handler
import LogTimeForm from "./updateform"; // Import your form component
import { Ticket as TicketType } from "../../lib/types"; // Import the original Ticket type
import Rightsideform from "./rightsideform";
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
      <h1 className="sm:w-full 2xl:text-5xl  sm:text-2xl text-lg 2xl:pl-20 sm:py-6 py-4 sm:pl-16 pl-8 text-[#9B9BC3] font-normal bg-[#424247] tracking-widest">
        Ticket Time Tracker
      </h1>

      {/* Main Container */}
      <div className={`2xl:px-20 xl:px-14 md:px-12 sm:px-8 py-10 ${
          rightSectionContent
            ? 'lg:pl-10 lg:pr-6 xl:px-14 md:px-12 sm:px-8 py-10'
            : 'lg:pl-12 lg:pr-8'
        }`}>
        <div
          className={`w-[303px] xxs:w-auto flex flex-col-reverse lg:flex-row ${
            rightSectionContent ? 'gap-x-0' : 'gap-x-4'
          } items-center lg:items-start justify-between`}
        >
          {/* Left Section - Existing Tickets */}
          <div className="w-max inline-block xl:ml-7">
            <h2 className="w-max 2xl:text-4xl lg:text-xl md:text-lg text-base font-medium mt-10 lg:mt-1 ml-10 xs:ml-2 sm:ml-0">
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
      }`}>
            {rightSectionContent || (
              <Rightsideform/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
