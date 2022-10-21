import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();
const DATABASE_USERNAME = String(process.env.DATABASE_USERNAME);
const DATABASE_PASSWORD = String(process.env.DATABASE_PASSWORD);
const DATABASE_NAME = String(process.env.DATABASE_NAME);
const DATABASE_HOST = String(process.env.DATABASE_HOST);
const DATABASE_PORT = parseInt(process.env.DATABASE_PORT as string, 10);

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [ __dirname + '/**/*.entity{.ts,.js}']
});
