import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = ( page = 0 ) => {


  return async( dispatch, getState ) => {
    dispatch( startLoadingPokemons() );

    // TODO: realizar peticion http 
    // CODIGO CON FETCH
    // const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);

    // const data = await respuesta.json();
    // console.log(data)
    // dispatch( setPokemons({
    //   pokemons: data.results,
    //   page: page + 1
    // }) );

    // CODIGO CON AXIOS
    const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`)
    console.log(data);
    dispatch( setPokemons({
      pokemons: data.results,
      page: page + 1
    }))
  }
}