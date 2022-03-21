import React from 'react'
import { useQuery } from 'react-query'
import PokedexEntry from './PokedexEntry'

const fetchPokemon = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    return res.json()
}

const Pokedex = () => {
    const BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'

    const {data, status} = useQuery('pokemon', fetchPokemon)

    // const pokemon = data.results.map((data, index) => ({
    //     name: data.name,
    //     pokedexNumber: index + 1,
    //     image: `${BASE_URL}/${index + 1}.png`
    // }))

    return(
        <div>
            <h2>React Query!</h2>
            <h4>Gotta cache em all</h4>
            {status === 'loading' && (
                <div>
                    <p>Loading pokemon...</p>
                </div>
            )}

            {status === 'error' && (
                <div>
                    <p>Error fetching pokemon</p>
                </div>
            )}

            {status === 'success' && (
                <div>
                    {data.results.map((pokemon, index) => {
                        return <PokedexEntry
                            key={pokemon.name}
                            name={pokemon.name}
                            pokedexNumber={index + 1}
                            image={`${BASE_URL}/${(index + 1)}.png`}
                        />
                    })}
                </div>
            )}
        </div>
    )
}

export default Pokedex