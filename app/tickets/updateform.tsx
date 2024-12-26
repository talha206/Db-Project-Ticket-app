import React, { useState } from "react";

interface LogTimeFormProps {
  ticketId: string; // Ticket ID to update
  ticketTitle: string; // Ticket title to show on form
  onClose: () => void; // Callback to close the form
}

const LogTimeForm: React.FC<LogTimeFormProps> = ({ ticketId, ticketTitle, onClose }) => {
  const [manualTime, setManualTime] = useState<string>("0.00"); // Manual log time input
  const [notes, setNotes] = useState<string>(""); // Notes input

  // Function to handle form submission and make API call to update log time and notes
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send a POST request to update log time and notes for the given ticket
      const response = await fetch("/api/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ticket_id: ticketId,  // Ticket ID to update
          log_time: manualTime,  // Log time input from user
          notes: notes,          // Notes input from user
        }),
      });

      const data = await response.json();

      // Check for success or failure
      if (response.ok) {
        alert("Log time and notes updated successfully!");
        onClose(); // Close the form after success
      } else {
        console.error("Error:", data.error);
        alert("Failed to update log time and notes.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="w-[100%] font-mono xl:w-full 2xl:w-full 2xl:h-max sm:h-max h-max lg:h-max bg-white rounded-[10px] border border-[#7D7D82]">
      <h2 className="text-[10px] xxs:text-xs xs:text-sm sm:text-sm xl:text-base flex items-center ml-7 mb-3 mt-4 lg:mb-4 lg:mt-5">
        <span className="mr-3">
          <svg className="lg:w-[23px] md:w-[20px] sm:w-[18px] w-[10px]" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.792969" y="0.304443" width="21.5147" height="21.5147" rx="3.58578" fill="#1E8826" />
            <circle cx="11.5501" cy="11.0618" r="4.48223" fill="white" />
          </svg>
        </span>
        <span className="font-medium mr-2 xl:mr-3 whitespace-nowrap">{ticketId}</span>
        <span className="text-[9px] xxs:text-xs xs:text-sm sm:text-sm xl:text-base">{ticketTitle}</span>
      </h2>
      <span className="block w-full h-[1px] bg-[#7D7D82]"></span>

      {/* Manual Time Logging */}
      <div className="sm:mt-6 xrs:mt-4 mt-2 lg:mt-[34px] mb-2 xrs:mb-4 sm:mb-6 lg:mb-9 ml-7 mr-10 relative">
        <label htmlFor="manualTime" className="block w-max text-xs xs:text-sm sm:text-base md:text-lg mb-4">Log time manually</label>
        <input
          type="text"
          id="manualTime"
          value={manualTime}
          onChange={(e) => setManualTime(e.target.value)}
          className="mt-1 block w-full text-xs xrs:text-sm h-7 sm:h-9 rounded border border-[#b4b4bb] hover:border-[#b4b4bb] active:border-[#b4b4bb] focus:border-blue-500 focus:ring-blue-500 sm:text-sm pl-3"
        />
      </div>

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
          className="h-16 sm:h-20 lg:h-[115px] mt-1 block w-full rounded border border-[#B4B4B8] shadow-sm sm:text-sm"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-around xl:mx-9 mx-6 xl:mb-7 mb-5">
        <button
          type="button"
          onClick={onClose}
          className="xl:w-[186px] text-xs xrs:text-sm sm:text-base xl:text-lg xl:px-11 lg:px-7 lg:py-3 xl:py-4 sm:px-11 xrs:px-9 px-6 sm:py-3 xrs:py-2 py-1 bg-white border-2 border-[#2EA8C3] text-[#2EA8C3] rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="xl:w-[186px] text-xs xrs:text-sm sm:text-base xl:text-lg xl:px-11 lg:px-7 lg:py-3 xl:py-4 sm:px-[54px] xrs:px-11 px-8 sm:py-3 xrs:py-2 py-1 bg-[#2EA8C3] text-black rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default LogTimeForm;
