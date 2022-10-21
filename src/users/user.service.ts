import { Context, Handler } from "aws-lambda";
import { UserController } from "./user.controller";

const getAllUsers: Handler = (event: any, context: Context) => UserController.getAll(event, context);
const getByIdUser: Handler = (event: any, context: Context) => UserController.getById(event, context);
const postRegisterUser: Handler = (event: any, context: Context) => UserController.register(event, context);

export {
  getAllUsers,
  getByIdUser,
  postRegisterUser
}