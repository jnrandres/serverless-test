import { Context } from "aws-lambda";

import {
  getAllPlanets,
  getByIdPlanet
} from '../src/app'
import { PlanetManager } from "../src/planets/planets.manager";

jest.mock('../src/planets/planets.manager');

const planeta = {
  "pid": 1,
  "nombre": "Tatooine",
  "periodo_rotacion": "23",
  "periodo_orbital": "304",
  "diametro": "10465",
  "clima": "arid",
  "gravedad": "1 standard",
  "terreno": "desert",
  "superficie_agua": "1",
  "poblacion": "200000",
  "residentes": [
      "https://swapi.py4e.com/api/people/1/",
      "https://swapi.py4e.com/api/people/2/",
      "https://swapi.py4e.com/api/people/4/",
      "https://swapi.py4e.com/api/people/6/",
      "https://swapi.py4e.com/api/people/7/",
      "https://swapi.py4e.com/api/people/8/",
      "https://swapi.py4e.com/api/people/9/",
      "https://swapi.py4e.com/api/people/11/",
      "https://swapi.py4e.com/api/people/43/",
      "https://swapi.py4e.com/api/people/62/"
  ],
  "peliculas": [
      "https://swapi.py4e.com/api/films/1/",
      "https://swapi.py4e.com/api/films/3/",
      "https://swapi.py4e.com/api/films/4/",
      "https://swapi.py4e.com/api/films/5/",
      "https://swapi.py4e.com/api/films/6/"
  ],
  "creado": "2014-12-09T13:50:49.641000Z",
  "editado": "2014-12-20T20:58:18.411000Z",
  "url": "https://swapi.py4e.com/api/planets/1/"
}

let event = {} as any;
let context = {} as Context;
const callback = jest.fn();

describe('GET /planets', () => {

  beforeAll(() => {
    // @ts-ignore
    PlanetManager.getAll.mockClear();
    event = {} as any;
    context = {} as Context;
  });

  it('should return 200 OK', async () => {
    // @ts-ignore
    PlanetManager.getAll.mockReturnValue([planeta]);
    const response = await getAllPlanets(event, context, callback);
    expect(response.statusCode).toEqual(200);
  });

  it('should respond with an array', async () => {
    // @ts-ignore
    PlanetManager.getAll.mockReturnValue([planeta]);
    const response = await getAllPlanets(event, context, callback);
    const body = JSON.parse(response.body);
    const data = body.data;
    expect(Array.isArray(data)).toBe(true);
  });

});

describe('GET /planets/{id}', () => {
  beforeAll(() => {
    // @ts-ignore
    PlanetManager.getAll.mockClear();
    event = {} as any;
    context = {} as Context;
  });

  it('should respond with an object', async () => {
    // @ts-ignore
    PlanetManager.getById.mockReturnValue(planeta);
    const id = '1';
    event.pathParameters = { id };
    const response = await getByIdPlanet(event, context, callback);
    const body = JSON.parse(response.body);
    const data = body.data;
    expect(data).toEqual(planeta);
  });

  it('should respond with an object', async () => {
    // @ts-ignore
    PlanetManager.getById.mockReturnValue(planeta);
    const id = '1';
    event.pathParameters = { id };
    const response = await getByIdPlanet(event, context, callback);
    const body = JSON.parse(response.body);
    const data = body.data;
    expect(typeof data).toBe('object');
  });
});