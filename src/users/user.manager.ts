import { initDataSource } from '../config/database';
import { AppDataSource } from '../data.source';
import { User } from './user.entity';
import { IRegsiterUser } from './user.interface';

export class UserManager {
  static async getAll() {
    await initDataSource();
    return AppDataSource.manager.getRepository(User).find();
  }
  static async getById(id: string) {
    await initDataSource();
    return AppDataSource.manager.getRepository(User).findOneOrFail({
      where: {
        id,
      },
    });
  }
  static async register(user: IRegsiterUser) {
    await initDataSource();
    return await AppDataSource.manager.getRepository(User).save(user);
  }
}
