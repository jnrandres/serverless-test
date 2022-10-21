import { IPlanet } from "../../planets/planets.interface";

export const translatePlanet = (data: IPlanet[], pid: number) => {
  const translated = data.map((planet) => {
    return {
      pid,
      nombre: planet.name,
      periodo_rotacion: planet.rotation_period,
      periodo_orbital: planet.orbital_period,
      diametro: planet.diameter,
      clima: planet.climate,
      gravedad: planet.gravity,
      terreno: planet.terrain,
      superficie_agua: planet.surface_water,
      poblacion: planet.population,
      residentes: planet.residents,
      peliculas: planet.films,
      creado: planet.created,
      editado: planet.edited,
      url: planet.url,
    };
  });
  return translated;
}