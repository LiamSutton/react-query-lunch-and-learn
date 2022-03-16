import React from 'react'
import { useQuery } from 'react-query'

const fetchPokemon = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    return res.json()
}

const Pokedex = () => {

    const {isLoading, error, data} = useQuery('pokemon', fetchPokemon)
    console.log(data)
    return(
        <div>
            <h2>Pokemon!</h2>
            <h4>Gotta cache em all</h4>
        </div>
    )
}

export default Pokedex