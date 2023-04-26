import axios from "axios";

export const fetchPlanets = async (page: number) => {
  const {data} = await axios.get(`https://swapi.dev/api/planets?page=${page}`)

  return data;
}

export const fetchPeople = async (page: number) => {
  const {data} = await axios.get(`https://swapi.dev/api/people?page=${page}`)

  return data;
}

export const fetchStarships = async (page: number) => {
  const { data } = await axios.get(`https://swapi.dev/api/starships?page=${page}`)

  return data;
}

export const fetchVehicles = async (page: number) => {
  const { data } = await axios.get(`https://swapi.dev/api/vehicles?page=${page}`)

  return data;
}

export const fetchSpecies = async (page: number) => {
  const { data } = await axios.get(`https://swapi.dev/api/species?page=${page}`)

  return data;
}

export const fetchFilms = async (page: number) => {
  const { data } = await axios.get(`https://swapi.dev/api/films?page=${page}`)

  return data;
}

