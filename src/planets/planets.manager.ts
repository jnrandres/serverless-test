import axios from "axios";
import { initDataSource } from "../config/database";
import { AppDataSource } from "../data.source";
import { translatePlanet } from "../utils/parser/translate";
import { Planet } from "./planets.entity";
import { IPlanet, IUpdatePlanet } from "./planets.interface";

export class PlanetManager {
  static async getAll() {
    await initDataSource();
    return await AppDataSource.manager.getRepository(Planet).find({
      select: {
        pid: true,
        nombre: true,
        periodo_rotacion: true,
        periodo_orbital: true,
        diametro: true,
        clima: true,
        gravedad: true,
        terreno: true,
        superficie_agua: true,
        poblacion: true,
        residentes: true,
        peliculas: true,
        creado: true,
        editado: true,
        url: true,
      }
    });
  }
  static async getById(pid: number) {
    await initDataSource();
    return await AppDataSource.manager.getRepository(Planet).findOneOrFail(
      {
        select: {
          pid: true,
          nombre: true,
          periodo_rotacion: true,
          periodo_orbital: true,
          diametro: true,
          clima: true,
          gravedad: true,
          terreno: true,
          superficie_agua: true,
          poblacion: true,
          residentes: true,
          peliculas: true,
          creado: true,
          editado: true,
          url: true,
        },
        where: {
          pid,
        }
      }
    );
  }
  static async register(id: number) {
    await initDataSource();
    const planet = await AppDataSource.manager.getRepository(Planet).findOne({
      where: {
        pid: id,
      }
    });
    if(!planet) {
      const uri = process.env.SWAPI_ENDPOINT + "/planets/" + id;
      const headers = {
        "Content-Type": "application/json",
      };
      const res = await axios.get<IPlanet>(uri, {
        headers,
      });
      const translated = translatePlanet([res.data], id);
      return await AppDataSource.manager.getRepository(Planet).save(translated);
    }
    return planet;
  }
  static async remove(pid: number) {
    await initDataSource();
    return await AppDataSource.manager.getRepository(Planet).delete({
      pid,
    })
  }
  static async update(pid: number, planet: IUpdatePlanet) {
    await initDataSource();
    await AppDataSource.manager.getRepository(Planet).findOneOrFail({
      where: {
        pid,
      }
    });
    return await AppDataSource.manager.getRepository(Planet).update({
      pid,
    }, planet);
  }
}
