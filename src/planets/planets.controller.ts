import { Context } from 'aws-lambda';
import { MethodResponse } from '../utils/method-response';
import { IRegsiterPlanet, IUpdatePlanet } from './planets.interface';
import { PlanetManager } from './planets.manager';

export class PlanetController {
  static async getAll (event: any, context: Context) {
    try {
      const planets = await PlanetManager.getAll();
      return MethodResponse.getSuccess(planets);
    } catch (err) {
      return MethodResponse.error(err as Error);
    }
  };
  static async getById (event: any, context: Context) {
    try {
      const pid: number = Number(event.pathParameters.id);
      const planet = await PlanetManager.getById(pid);
      return MethodResponse.getSuccess(planet);
    } catch (err) {
      return MethodResponse.error(err as Error);
    }
  };
  static async register (event: any, context: Context) {
    try {
      const { id } = JSON.parse(event.body) as IRegsiterPlanet;
      const result = await PlanetManager.register(id);
      return MethodResponse.registerSuccess(result);
    } catch (err) {
      return MethodResponse.error(err as Error);
    }
  };
  static async remove (event: any, context: Context) {
    try {
      const pid = Number(event.pathParameters.id);
      const planet = await PlanetManager.remove(pid);
      return MethodResponse.removeSucess(planet);
    } catch (err) {
      return MethodResponse.error(err as Error);
    }
  };
  static async update (event: any, context: Context) {
    try {
      const pid = Number(event.pathParameters.id);
      const planet = JSON.parse(event.body) as IUpdatePlanet;
      const result = await PlanetManager.update(pid, planet);
      return MethodResponse.updateSucess(result);
    } catch (err) {
      return MethodResponse.error(err as Error);
    }
  };
}
