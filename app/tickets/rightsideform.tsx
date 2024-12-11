'use client'

import React, { useState } from 'react';
import { handleCreateNewTicket } from 'app/tickets/NewTicket'; // Import handler
import LogTimeForm from './updateform'; // Import your form component

const Rightsideform = () => {
  const [rightSectionContent, setRightSectionContent] = useState<JSX.Element | null>(null);
  const [selectedTicket, setSelectedTicket] = useState<ExtendedTicket | null>(null); // Use the extended type


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
 
                  <div>
                    <div className="flex justify-center">
                      <h1 className="w-max lg:text-sm xl:text-base sm:text-[15px] text-xs text-center font-medium 2xl:text-2xl sm:pr-[50px] sm:pl-[49px] sm:pt-9 pr-9 pl-10 lg:pr-3 lg:pl-4 xl:pr-9 xl:pl-10 pt-7 leading-relaxed">
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
            
  )
}

export default Rightsideform;