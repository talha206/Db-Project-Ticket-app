// app/api/tickets/route.ts
import { NextRequest, NextResponse } from "next/server";
import { executeQuery } from "@/lib/db"; // Your database query function

// POST request to insert ticket and log time data
export async function POST(request: NextRequest) {
  try {
    // Parse the incoming request body
    const { ticket_id, summary, log_time, notes } = await request.json();

    // Check if the required fields are provided
    if (!ticket_id || !summary || !log_time || !notes) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Insert into Ticket_Details table (if needed)
    const insertTicketQuery = `
      INSERT INTO Ticket_Details (ticket_id, summary)
      VALUES ($1, $2)
      ON CONFLICT (ticket_id) DO NOTHING;  -- Ensures no duplicates for ticket_id
    `;
    await executeQuery(insertTicketQuery, [ticket_id, summary]);

    // Insert into Log_Time table
    const insertLogQuery = `
      INSERT INTO Log_Time (ticket_id, log_time, notes)
      VALUES ($1, $2, $3);
    `;
    await executeQuery(insertLogQuery, [ticket_id, log_time, notes]);

    // Return success response
    return NextResponse.json({ message: "Ticket and log time added successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json({ error: "Failed to insert data" }, { status: 500 });
  }
}
