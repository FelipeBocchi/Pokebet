
//      VOU DEIXAR AQUI PARA USAR COMO GUIA DE API "felipe"

// import {getPokemon} from "./global/api.js";
// import {  } from "./pages/index/script.js";

// const form = document.querySelector("#poke_form")
// const poke_info = document.querySelector("#poke_info")
// const input = document.querySelector("#poke_input");

// form.addEventListener("submit", async (e)=>{
//     e.preventDefault();

//     const name = input.value.toLowerCase().trim(); 

//     if(!name)
//         return;

//     const poke = await getPokemon(name);

//     if(poke)
//     {
//         poke_info.innerHTML = `
//       <h2>${poke.name.toUpperCase()}</h2>
//       <img src="${poke.sprites.front_default}" alt="${poke.name}">
//       <img src="${poke.sprites.back_default}" alt="${poke.name}">
//       <img src="${poke.sprites.front_shiny}" alt="${poke.name}">
//       <img src="${poke.sprites.back_shiny}" alt="${poke.name}">
//       <img src="${poke.sprites.other.dream_world.front_default}" alt="${poke.name}">
//       <img src="${poke.sprites.other['official-artwork'].front_default}">
//       <img src="${poke.sprites.other.home.front_default}" alt="${poke.name}">
//       <img src="${poke.sprites.other.home.front_shiny}" alt="${poke.name}">

//       <p>Altura: ${poke.height}</p>
//       <p>Peso: ${poke.weight}</p>
//       <p>Tipo: ${poke.types.map(t => t.type.name).join(", ")}</p>
//       <p>Tipo: ${poke.abilities.map(t => t.ability.name).join(", ")}</p>
//       <p>Tipo: ${poke.moves.map(t => t.move.name).join(", ")}</p>
//         `;
//     }else
//         poke_info.innerHTML = "Pokémon não encontrado!"
// })