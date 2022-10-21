import { Planet } from "./planets.entity";

export type IRegsiterPlanet = {
  id: number;
};
export type IUpdatePlanet = Partial<Planet>;

export interface IPlanetRespone {
  count:    number;
  next:     string;
  previous: null;
  results:  IPlanet[];
}

export interface IPlanet {
  name:            string;
  rotation_period: string;
  orbital_period:  string;
  diameter:        string;
  climate:         string;
  gravity:         string;
  terrain:         string;
  surface_water:   string;
  population:      string;
  residents:       string[];
  films:           string[];
  created:         Date;
  edited:          Date;
  url:             string;
}