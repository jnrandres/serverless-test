import { Context } from "aws-lambda";
import { StatusCodes } from "http-status-codes";
import { UserManager } from "../src/users/user.manager";

import {
  postRegisterUser,
  getAllUsers,
  getByIdUser,
} from "../src/app";

jest.mock('../src/users/user.manager');

const userInput = {
  name: 'Angel',
  lastname: 'Perez',
  email: 'angel@gmail.com',
  phone: '963963963',
  password: 'angel'
}

const userPayload = {
  id: '6bb92687-cbe5-442d-909a-a559819d4eb3',
  createdAt: '2022-10-14 23:23:55.438002',
  updatedAt: '2022-10-14 08:09:24.307878',
  name: 'Angel',
  lastname: 'Perez',
  email: 'angel@gmail.com',
  phone: '963963963',
  password: 'angel'
}

let event = {} as any;
let context = {} as Context;
const callback = jest.fn();

describe('GET /users', () => {
  beforeAll(() => {
    // @ts-ignore
    UserManager.getAll.mockClear();
    event = {} as any;
    context = {} as Context;
  });

  it('should return 200 OK', async () => {
    // @ts-ignore
    UserManager.getAll.mockReturnValue([userPayload]);
    const response = await getAllUsers(event, context, callback);
    expect(response.statusCode).toEqual(200);
    expect(UserManager.getAll).toHaveBeenCalledWith();
  });

  it('should respond with an array', async () => {
    // @ts-ignore
    UserManager.getAll.mockReturnValue([userPayload]);
    const response = await getAllUsers(event, context, callback);
    const body = JSON.parse(response.body);
    const data = body.data;
    expect(Array.isArray(data)).toBe(true);
    expect(UserManager.getAll).toHaveBeenCalledWith();
  });
});

describe('GET /users/{id}', () => {
  beforeAll(() => {
    // @ts-ignore
    UserManager.getById.mockClear();
  });

  it('should respond with an object', async () => {
    // @ts-ignore
    UserManager.getById.mockReturnValue(userPayload);
    const id = '6bb92687-cbe5-442d-909a-a559819d4eb3';
    event.pathParameters = { id };
    const response = await getByIdUser(event, context, callback);
    const body = JSON.parse(response.body);
    const data = body.data;
    expect(data).toEqual(userPayload);
    expect(UserManager.getById).toHaveBeenCalledWith(id);
  });

  it('should respond with an array', async () => {
    // @ts-ignore
    UserManager.getById.mockReturnValue(userPayload);
    const id = '6bb92687-cbe5-442d-909a-a559819d4eb3';
    event.pathParameters = { id };
    const response = await getByIdUser(event, context, callback);
    const body = JSON.parse(response.body);
    const data = body.data;
    expect(typeof data).toBe('object');
    expect(UserManager.getAll).toHaveBeenCalledWith();
  });
});

describe('POST /users', () => {

  beforeAll(() => {
    // @ts-ignore
    UserManager.register.mockClear();
    event = {} as any;
    context = {} as Context;
  });

  it('should return 200 OK', async () => {
    // @ts-ignore
    UserManager.register.mockReturnValue(userPayload);
    event.body = JSON.stringify(userInput);
    const response = await postRegisterUser(event, context, () => {});
    const statusCode = response.statusCode;
    expect(statusCode).toEqual(StatusCodes.OK);
    expect(UserManager.register).toHaveBeenCalledWith(userInput);
  });

  it('should return the user payload', async () => {
    // @ts-ignore
    UserManager.register.mockReturnValue(userPayload);
    event.body = JSON.stringify(userInput);
    const response = await postRegisterUser(event, context, () => {});
    const body = JSON.parse(response.body);
    const data = body.data;
    expect(data).toEqual(userPayload);
    expect(UserManager.register).toHaveBeenCalledWith(userInput);
  });

});