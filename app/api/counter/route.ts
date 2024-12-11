import { NextResponse } from "next/server";
import { executeQuery } from "@/lib/db"; // Your database query function

export async function GET() {
  try {
    // Query for tickets and join with Log_Time to get log data
    const query = `
      SELECT t.ticket_id, t.summary, l.log_time, l.notes
      FROM Ticket_Details t
      LEFT JOIN Log_Time l ON t.ticket_id = l.ticket_id
    `;

    // Execute the query
    const rawData = await executeQuery(query);

    // Ensure log_time is returned as is (string format for TIME column)
    const formattedData = rawData.map((ticket: any) => ({
      ...ticket,
      log_time: ticket.log_time || null, // Use the raw TIME value or null if it doesn't exist
    }));

    console.log("Formatted tickets and log data:", formattedData); // Optional logging for debugging

    // Return the formatted data as a JSON response
    return NextResponse.json(formattedData, { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Failed to fetch tickets and log times" }, { status: 500 });
  }
}
