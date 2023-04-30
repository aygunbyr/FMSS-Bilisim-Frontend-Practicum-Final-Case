import axios from "axios";


export const fetchCharacters = async (page: number) => {
  const {data} = await axios.get(`https://swapi.dev/api/people?page=${page}`)

  return data;
}

export const fetchStarships = async (page: number) => {
  const { data } = await axios.get(`https://swapi.dev/api/starships?page=${page}`)

  return data;
}
