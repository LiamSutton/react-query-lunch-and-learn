import React from 'react'
import '../Styles/PokedexEntry.css'
const PokedexEntry = ({name, pokedexNumber, image}) => {

    return(
        <div className='entry'>
            <h5>{name}</h5>
            <img src={image}/>
            <p>#{pokedexNumber}</p>
        </div>
    )
}

export default PokedexEntry