import dotenv from 'dotenv';
import { getAllPlanets, getByIdPlanet, registerPlanet, removePlanet, updatePlanet } from './planets/planets.service';
import { getAllUsers, getByIdUser, postRegisterUser } from './users/user.service';

dotenv.config();

export {
  getAllPlanets,
  getByIdPlanet,
  registerPlanet,
  removePlanet,
  updatePlanet,
  getAllUsers,
  getByIdUser,
  postRegisterUser
}