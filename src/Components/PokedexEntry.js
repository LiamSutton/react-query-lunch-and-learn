import React from 'react'
import '../Styles/PokedexEntry.css'
const PokedexEntry = ({name, pokedexNumber, image}) => {

    return(
        <div className='entry'>
            <h5 className='name'>{name}</h5>
            <img src={image}/>
            <p className='number'>#{pokedexNumber}</p>
        </div>
    )
}

export default PokedexEntry