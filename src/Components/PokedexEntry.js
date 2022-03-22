import React from 'react'

const PokedexEntry = ({name, pokedexNumber, image}) => {

    return(
        <div>
            <h5>#{String(pokedexNumber).padStart(3)}: {name}</h5>
            <img src={image}/>
        </div>
    )
}

export default PokedexEntry