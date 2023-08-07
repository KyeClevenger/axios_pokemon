// collaborated with daisy, anthony, eric, richard, josj, and viviana
import React, { useState } from 'react'
import axios from 'axios';

    const FetchPokemon = () => {
        const [pokemonList, setPokemonList] = useState([]);
        const getPokeAxios = () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
                .then(response => {
                    setPokemonList(response.data.results);
                    console.log(pokemonList)
                })
                .catch(err => {
                    console.log(err);
                })
        }

return (
    <div>
        <h1> Fetch Pokemon</h1>
        <ul>
            {pokemonList.map((p, idx) =>
                <li key={idx}>{p.name}</li>
            )}
        </ul>
        <button onClick={getPokeAxios}>Get Pokemon</button>
    </div>
    )
}


export default FetchPokemon