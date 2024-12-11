// lib/db.ts
import sql from "mssql";

const config = {

  user: "sa",
  password: "1234",
  server: "localhost",
  database: "crm",
  options: {
    encrypt: true,  // Use encryption for data transfer if needed
    trustServerCertificate: true,  // Required for self-signed certs
  },
};

export async function executeQuery(query: string) {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query(query);
    return result.recordsets;
  } catch (error) {
    console.log(error);
    throw error;  // Throw error again to propagate it for proper handling
  }
}
