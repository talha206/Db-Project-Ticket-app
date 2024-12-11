"use client";

import React, { useEffect, useState } from "react";


interface Ticket {
  ticket_id: number;
  summary: string;
  log_time: string; // Log time remains a string
  notes: string;
}

const processTimeLogged = (
  logTime: string,
  ticket: Ticket,
  onLogTimeClick?: (ticketId: number, ticketSummary: string) => void
) => {
  if (logTime === "No log time available") {
    return (
      <>
        {logTime}{" "}
        <u
          className="text-blue-600 cursor-pointer"
          onClick={() =>
            onLogTimeClick && onLogTimeClick(ticket.ticket_id, ticket.summary)
          }
        >
          Click here
        </u>
      </>
    );
  }
  return logTime;
};

const TicketTimeTracker: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleLogTimeClick = (ticketId: number, ticketSummary: string) => {
    console.log(`Log time clicked for Ticket ${ticketId}: ${ticketSummary}`);
    // Add your logic here, e.g., show a modal or redirect to another page
  };

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("/api/counter");
        if (!response.ok) {
          throw new Error(`Failed to fetch tickets. Status: ${response.status}`);
        }

        const rawData = await response.json();
        console.log("Raw fetched data:", rawData);

        // The raw data is an array containing an object, we need to extract the tickets
        const ticketData = rawData[0]; // First item of the array (since there is only one)
        const ticketsArray = Object.values(ticketData).filter(
          (item) => typeof item === "object" && item !== null && "ticket_id" in item
        );

        console.log("Processed tickets array:", ticketsArray);
        setTickets(ticketsArray); // Update state with processed tickets
      } catch (err: any) {
        console.error("Error fetching tickets:", err);
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    fetchTickets();
  }, []);

  if (loading) {
    return <div>Loading tickets...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="font-mono xs:w-auto w-[295px]">
      <div className="relative bg-white rounded-lg xs:overflow-x-visible overflow-x-auto h-auto ml-7 xs:ml-0 sm:ml-0">
        <div className="grid 2xl:grid-cols-[700px,300px] sm:grid-cols-[330px,200px] grid-cols-[260px,125px] gap-x-6 2xl:gap-x-32 font-normal pb-2 mb-2">
          <div className="2xl:text-2xl text-xs sm:text-[13px] italic">Ticket</div>
          <div className="2xl:text-2xl text-xs sm:text-[13px] italic text-[#000000b0]">Log Time</div>
        </div>
        <div className="2xl:mt-8">
          {tickets.map((ticket) => (
            <div
              key={ticket.ticket_id} // Use ticket_id as the unique key
              className="grid 2xl:grid-cols-[760px,400px] sm:grid-cols-[300px,230px] grid-cols-[270px,110px] lg:gap-x-6 xl:gap-x-8 sm:gap-x-8 gap-x-6 items-center gradient-border-b xl:py-4 sm:py-3 py-1"
            >
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
                <span className="font-medium 2xl:text-2xl sm:text-[13px] text-[11px] whitespace-nowrap">
                  Tech-{ticket.ticket_id}
                </span>
                <span className="ml-2 text-black font-normal 2xl:text-2xl sm:text-[13px] text-[11px] whitespace-nowrap">
                  {ticket.summary}
                </span>
              </div>
              <div>
                <span className="font-normal 2xl:text-2xl sm:text-[13px] text-[11px] sm:pl-8 whitespace-nowrap">
                  {processTimeLogged(ticket.log_time, ticket, handleLogTimeClick)}
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
