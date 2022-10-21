import { AppDataSource } from "../data.source";

export const initDataSource = async () => {
  if (!AppDataSource.manager.connection.isInitialized) {
    await AppDataSource.initialize()
      .then(() => {
        console.log("Data Source has been initialized!");
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  }
};
