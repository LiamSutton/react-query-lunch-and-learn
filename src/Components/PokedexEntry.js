import React from 'react'

const PokedexEntry = ({name, pokedexNumber, image}) => {

    return(
        <div>
            <h5>{name}</h5>
            <img src={image}/>
        </div>
    )
}

export default PokedexEntry