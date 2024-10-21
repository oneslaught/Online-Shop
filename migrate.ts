import { Flyway } from "node-flyway";

const flyway = new Flyway({
  defaultSchema: "public",
  migrationLocations: ["src/migrations"],
  password: "password",
  url: "jdbc:postgresql://localhost:5432/postgres",
  user: "postgres",
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
