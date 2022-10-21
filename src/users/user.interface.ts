import { User } from "./user.entity";

export type IRegsiterUser = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
export type IUpdateUser = Partial<User>;