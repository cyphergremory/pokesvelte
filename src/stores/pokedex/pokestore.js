
import { writable } from "svelte/store";
import axiosAPI from "../../services/axios"
export const pokemons = writable([]);

const fetchPokemons = async (limit = 150) =>{
    const dataset =await axiosAPI.get(`pokemon?limit=${limit}`);
    const pokeset = dataset.results.map((pokemon,index) =>{
        return {
            name:pokemon.name,
            id:index +1 ,
            img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ (index +1) +'.png'
        }
    });

    pokemons.set(pokeset)
}

fetchPokemons();
