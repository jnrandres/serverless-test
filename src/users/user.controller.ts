import { Context } from "aws-lambda";
import { MethodResponse } from '../utils/method-response';
import { IRegsiterUser } from './user.interface';
import { UserManager } from './user.manager';

export class UserController {
  static async getAll (event: any, context: Context) {
    try {
      const users = await UserManager.getAll();
      return MethodResponse.getSuccess(users);
    } catch (err) {
      return MethodResponse.error(err as Error);
    }
  };
  static async getById (event: any, context: Context) {
    try {
      const id: string = String(event.pathParameters.id);
      const user = await UserManager.getById(id);
      return MethodResponse.getSuccess(user);
    } catch (err) {
      return MethodResponse.error(err as Error);
    }
  }
  static register = async (event: any, context: Context) => {
    try {
      const user = JSON.parse(event.body) as IRegsiterUser;
      const result = await UserManager.register(user);
      return MethodResponse.getSuccess(result);
    } catch (err) {
      return MethodResponse.error(err as Error);
    }
  };
}
