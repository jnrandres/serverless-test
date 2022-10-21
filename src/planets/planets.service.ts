import { Context, Handler } from 'aws-lambda';
import { PlanetController } from './planets.controller';

const getAllPlanets: Handler = (event: any, context: Context) => PlanetController.getAll(event, context);
const getByIdPlanet: Handler = (event: any, context: Context) => PlanetController.getById(event, context);
const registerPlanet: Handler = (event: any, context: Context) => PlanetController.register(event, context);
const removePlanet: Handler = (event: any, context: Context) => PlanetController.remove(event, context);
const updatePlanet: Handler = (event: any, context: Context) => PlanetController.update(event, context);

export { 
  getAllPlanets,
  getByIdPlanet,
  registerPlanet,
  removePlanet,
  updatePlanet
};