"use client";

import React, { useEffect, useState } from "react";
import LogTimeForm from "./updateform"; // Import LogTimeForm

interface Ticket {
  id: number;
  title: string;
  timeLogged: string;
  ticketType: string; // Ticket type field
}

interface TicketTimeTrackerProps {
  onLogTimeClick?: (ticketId: string, ticketTitle: string) => void; // Callback when "Log time" or "Click here" is clicked
}

// Helper function to process and underline "Click here"
const processTimeLogged = (
  timeLogged: string,
  ticket: Ticket,
  onLogTimeClick?: (ticketId: string, ticketTitle: string) => void
) => {
  if (timeLogged === "No log time available") {
    return (
      <>
        {timeLogged}{" "}
        <u
          className="cursor-pointer"
          onClick={() => onLogTimeClick && onLogTimeClick(ticket.id.toString(), ticket.title)}
        >
          Click here
        </u>
      </>
    );
  }

  return timeLogged;
};

const TicketTimeTracker: React.FC<TicketTimeTrackerProps> = ({ onLogTimeClick }) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTicket, setSelectedTicket] = useState<{ id: string; title: string } | null>(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("/api/counter"); // Correct API endpoint
        if (!response.ok) {
          throw new Error(`Failed to fetch tickets. Status: ${response.status}`);
        }

        const rawData = await response.json();
        console.log("Raw fetched data:", rawData);

        // Assuming rawData is an array of ticket objects
        const formattedTickets = rawData.map((ticket: any) => ({
          id: ticket.ticket_id,
          title: ticket.summary,
          timeLogged: ticket.log_time || "No log time available", // Default if log_time is null
          ticketType: ticket.ticket_type || "Unknown Type", // Ticket type field
        }));

        console.log("Formatted tickets:", formattedTickets);

        setTickets(formattedTickets); // Update state with formatted tickets
      } catch (err: any) {
        console.error("Error fetching tickets:", err);
        setError(err.message); // Handle errors gracefully
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    fetchTickets();
  }, []); // Fetch tickets when the component mounts

  // Handle the log time click (opens the form)
  const handleLogTimeClick = (ticketId: string, ticketTitle: string) => {
    setSelectedTicket({ id: ticketId, title: ticketTitle });
    if (onLogTimeClick) onLogTimeClick(ticketId, ticketTitle); // Trigger the existing callback
  };

  // Handle form submission
  const handleSubmitLogTime = async (ticketId: string, timeSpent: string) => {
    try {
      // Simulate logging time (you can call your API to log the time)
      alert(`Time logged for ticket ${ticketId}: ${timeSpent}`);
      setSelectedTicket(null); // Close the form after submission
    } catch (error) {
      console.error("Error logging time:", error);
      alert("Failed to log time. Please try again.");
    }
  };

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
          <div className="2xl:text-2xl text-xs sm:text-[13px] italic text-[#000000b0]">Time Logged</div>
        </div>

        {/* Ticket Rows */}
        <div className="2xl:mt-8">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="grid  2xl:grid-cols-[760px,400px] sm:grid-cols-[300px,230px] grid-cols-[270px,110px] lg:gap-x-6 xl:gap-x-8 sm:gap-x-8 gap-x-6 items-center gradient-border-b xl:py- sm:py-2 py-1"
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
                <span className="font-medium 2xl:text-2xl lg:text-sm sm:text-[13px] text-[11px] whitespace-nowrap">
                  {ticket.ticketType}-{ticket.id}
                </span>
                <span className="ml-2 text-black font-normal 2xl:text-2xl lg:text-sm sm:text-[13px] text-[11px] whitespace-nowrap">
                  {ticket.title}
                </span>
              </div>

              {/* Right Column - Time Logged */}
              <div>
                <span className="font-normal 2xl:text-2xl sm:text-[13px] text-[11px] sm:pl-4 whitespace-nowrap">
                  {processTimeLogged(ticket.timeLogged, ticket, handleLogTimeClick)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LogTimeForm will appear if a ticket is selected */}
      {selectedTicket && (
        <div className="relative mt-6">
          <LogTimeForm
            ticketId={selectedTicket.id}
            ticketTitle={selectedTicket.title}
            onSubmit={handleSubmitLogTime}
            onClose={() => setSelectedTicket(null)}
          />
        </div>
      )}
    </div>
  );
};

export default TicketTimeTracker;
 