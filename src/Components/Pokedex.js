import React from 'react'
import '../Styles/Pokedex.css'
import PokedexEntry from './PokedexEntry'
import { useQuery } from 'react-query'


const fetchPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151}}`)
    return res.json()
}

const Pokedex = () => {
    const BASE_URL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

    const { data, status } = useQuery('pokemon',fetchPokemon,
        {
            refetchOnWindowFocus: false,
        }
    )

    return (
        <div className='pokedex'>
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
                <div className='container'>
                    {data.results.map((pokemon, index) => {
                        let dexNumber = String(index + 1).padStart(3, '0')
                        return <PokedexEntry
                            key={pokemon.name}
                            name={pokemon.name}
                            pokedexNumber={dexNumber}
                            image={`${BASE_URL}/${dexNumber}.png`}
                        />
                    })}
                </div>
            )}
        </div>
    )
}

export default Pokedex