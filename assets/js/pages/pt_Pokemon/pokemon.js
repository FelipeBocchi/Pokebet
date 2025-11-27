import { getPokemon } from "./../../global/api.js";
import { getPokemonDescription } from "./../../global/api.js";

const div_Pokemon_Info = document.querySelector("#div_Pokemon_Info");
const p_Nome_Pokemon = document.querySelector("#p_Nome_Pokemon");
const p_Descricao_Pokedex = document.querySelector("#p_Descricao_Pokedex");
const p_No_Pokemon = document.querySelector("#p_No_Pokemon");
const p_Name_Pokemon = document.querySelector("#p_Name_Pokemon");
const p_Type_Pokemon = document.querySelector("#p_Type_Pokemon");
const p_Ot_Pokemon = document.querySelector("#p_Ot_Pokemon");
const p_Idno_Pokemon = document.querySelector("#p_Idno_Pokemon");
const p_Item_Pokemon = document.querySelector("#p_Item_Pokemon");
const btn_voltar_Pokedex = document.querySelector("#btn_voltar_Pokedex");

const puxa_Info_Api = async ()=>{
    // - Pokémon selecionado
    const poke = sessionStorage.getItem("pokemon");

    // - Pega dados do pokémon
    const pokemon = await getPokemon(poke);

    // - Pega a descrição do Pokémon
    const descricao = await getPokemonDescription(poke);

    if(pokemon && descricao)
    {

        // - Preenchendo o level e o nome
        p_Nome_Pokemon.innerHTML = `${pokemon.name}`

        //const div_Do_Pokemon = document.createElement("div");
        const article = document.createElement("article");

        // pega sprite ou fallback
        const imgSrc = pokemon.sprites?.front_default || "placeholder.png";

        article.innerHTML = `
        <img src="${imgSrc}" id="img_Pokemon_Info" alt="${pokemon.name}">
        `;
        article.setAttribute("id", "div_Img_Pokemon_Info");

        //div_Do_Pokemon.appendChild(article);
        //div_Pokemon_Info.appendChild(div_Do_Pokemon);
        div_Pokemon_Info.appendChild(article);

        // - Dados do Pokemon
        p_No_Pokemon.innerHTML = pokemon.id
        p_Name_Pokemon.innerHTML = pokemon.name
        p_Type_Pokemon.innerHTML = pokemon.types.map(t => t.type.name).join(", ")
        p_Ot_Pokemon.innerHTML = "#12345"
        p_Idno_Pokemon.innerHTML = "#12345"
        p_Item_Pokemon.innerHTML = "none"

        // - Descrição do Pokémon na Pokédex
        p_Descricao_Pokedex.innerHTML = descricao;
    }
}

btn_voltar_Pokedex.addEventListener("click", ()=>{
    window.location.reload(true);
})

puxa_Info_Api();