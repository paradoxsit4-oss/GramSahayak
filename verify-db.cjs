const { createClient } = require("@libsql/client");

async function verify() {
  const db = createClient({ url: "file:local.db" });

  const result = await db.execute(
    "SELECT name FROM sqlite_master WHERE type = 'table'"
  );

  console.log("Database tables:");
  console.table(result.rows);

  await db.close();
}

verify().catch(console.error);
