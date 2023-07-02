import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons, setPokemons } from "./store/slices/pokemon";


export const PokemonApp = () => {

  const { isLoading, pokemons } = useSelector( ( state ) => state.pokemons )

  const [counter, setCounter] = useState(1)
  const dispatch = useDispatch();
  console.log(pokemons)

  const onPage = () => {
    setCounter( counter + 1)
    dispatch(getPokemons(counter))
  }
  
  useEffect(() => {
    dispatch( getPokemons() )
  }, [])

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: { isLoading ? 'true' : 'false' }</span>

      <ul>
        {
          pokemons > 0 || pokemons.map( (poke, index) => (
            <li key={index}>{poke.name}</li>
          ))
        }
      </ul>

      <button disabled={ isLoading }
        onClick={ onPage }
      >
        Next
      </button>
    </>
  )
}
