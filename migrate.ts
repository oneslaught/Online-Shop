import { Flyway } from "node-flyway";

const password = process.env.DB_PASSWORD;
const url = process.env.DB_URL!;
const user = process.env.DB_USER!;

const flyway = new Flyway({
  defaultSchema: "public",
  migrationLocations: ["../../flyway-10.20.0/sql"],
  password: password,
  url: url,
  user: user,
});

flyway
  .migrate()
  .then((response) => {
    if (!response.success) {
      const errorCode = response.error?.errorCode ?? "Unknown error";
      throw new Error(`Unable to execute migrate command. Error: ${errorCode}`);
    } else {
      console.log("Migration successful:", response);
    }
  })
  .catch((error: unknown) => {
    console.error("Migration failed:", error);
  });
