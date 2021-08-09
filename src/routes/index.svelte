<script>
    import {pokemons} from '../stores/pokedex/pokestore'
    let pokedex = [...$pokemons];
</script>

<div class="relative w-full py-3">
   <h4 class="text-5xl text-blue-500 text-center font-thin">
       Svelte Pokedex
   </h4>
    <div class="max-w-7xl mx-auto">
        <input 
        class="w-full border-2 border-gray-400 rounded-md bg-gray-200 mt-4 p-3 focus:bg-white"
        placeholder="Search ..."
        >
    </div>
    <div class="grid grid-cols-3 grid-flow-row gap-4 py-3">
        {#each pokedex as pokemon}
             <div class="flex flex-row bg-gray-200 shadow-sm rounded-md mt-5">
                 <p class="text-gray-700 text-2xl font-semibold">
                    #{pokemon.id}
                    <span class="capitalize">{pokemon.name}</span>
                 </p>
                 <img src={pokemon.img} class="w-52 h-52" alt="pokemon">
             </div>
        {/each}
    </div>
</div>


