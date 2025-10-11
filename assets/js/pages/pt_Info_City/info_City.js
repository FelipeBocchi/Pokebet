import { cidade_Kanto } from "./banco_De_Dados.js";
import { getPokemon }  from "./../../global/api.js";

const p_Descricao_Info_City = document.querySelector("#p_Descricao_Info_City");
const p_Gye_Info_City = document.querySelector("#p_Gye_Info_City");
const p_Itens_Info_City = document.querySelector("#p_Itens_Info_City");
const p_Pokemon_Info_City = document.querySelector("#p_Pokemon_Info_City");
const p_Nome_City_Info = document.querySelector("#p_Nome_City_Info");
const personagem_Mapa_Info_City = document.querySelector("#personagem_Mapa_Info_City");

let i = 0;
let j;

const cidades = {
    "Pallet Town": {x:20, y:59},
    "Viridian City": {x:20,y:47},
    "Pewter City": {x:20,y:29},
    "Cerulean City": {x:49,y:38},
    "Vermilion City": {x:62,y:51},
    "Lavender Town": {x:79,y:38},
    "Celadon City": {x:62,y:25},
    "Fuchsia City": {x:54,y:63},
    "Saffron City": {x:62,y:38},
    "Cinnabar Island": {x:20,y:71},
    "Indigo Plateau": {x:11,y:25},
}

// função pra mover o personagem até a cidade
function irParaCidade(nomeCidade) {
  const cidade = cidades[nomeCidade];
  if (!cidade) return;

  personagem_Mapa_Info_City.style.left = cidade.x + '%';
  personagem_Mapa_Info_City.style.top = cidade.y + '%';
}

document.addEventListener("keydown", async(event)=>{
    if (event.key === "ArrowLeft") 
    {
        if(i != 0)
            i--;

        p_Descricao_Info_City.innerHTML =""
        p_Gye_Info_City.innerHTML = ""
        p_Itens_Info_City.innerHTML = ""
        p_Pokemon_Info_City.innerHTML = ""
        p_Nome_City_Info.innerHTML = ""

        irParaCidade(cidade_Kanto[i].nome);

        p_Nome_City_Info.innerHTML = cidade_Kanto[i].nome;
        p_Descricao_Info_City.innerHTML = `${cidade_Kanto[i].descricao} <br> ${cidade_Kanto[i].curiosidades}`;
        p_Gye_Info_City.innerHTML = `Linder: ${cidade_Kanto[i].lider} <br> Tipo: ${cidade_Kanto[i].tipo_ginasio}`;

        for(j = 0; j < cidade_Kanto[i].itens_encontrados.length; j++)
            p_Itens_Info_City.innerHTML += `${cidade_Kanto[i].itens_encontrados[j]} <br>`;
        

        for(j = 0; j < cidade_Kanto[i].pokemons_selvagens.length; j++)
        {
            let pokemon = await getPokemon(cidade_Kanto[i].pokemons_selvagens[j]);
            const imgSrc = pokemon.sprites?.front_default || "placeholder.png";

            p_Pokemon_Info_City.innerHTML += `<img src="${imgSrc}"> ${cidade_Kanto[i].pokemons_selvagens[j]} <br>`;
        }

        
        
    } else if (event.key === "ArrowRight") 
    {
        if(i<10)
            i++;

        p_Descricao_Info_City.innerHTML =""
        p_Gye_Info_City.innerHTML = ""
        p_Itens_Info_City.innerHTML = ""
        p_Pokemon_Info_City.innerHTML = ""
        p_Nome_City_Info.innerHTML = ""

        irParaCidade(cidade_Kanto[i].nome);

        p_Nome_City_Info.innerHTML = cidade_Kanto[i].nome;
        p_Descricao_Info_City.innerHTML = `${cidade_Kanto[i].descricao} <br> ${cidade_Kanto[i].curiosidades}`;
        p_Gye_Info_City.innerHTML = `Linder: ${cidade_Kanto[i].lider} <br> Tipo: ${cidade_Kanto[i].tipo_ginasio}`;

        for(j = 0; j < cidade_Kanto[i].itens_encontrados.length; j++)
            p_Itens_Info_City.innerHTML += `${cidade_Kanto[i].itens_encontrados[j]} <br>`;
        
    
        for(j = 0; j < cidade_Kanto[i].pokemons_selvagens.length; j++)
        {
            let pokemon = await getPokemon(cidade_Kanto[i].pokemons_selvagens[j]);
            const imgSrc = pokemon.sprites?.front_default || "placeholder.png";

            p_Pokemon_Info_City.innerHTML += `<img src="${imgSrc}"> ${cidade_Kanto[i].pokemons_selvagens[j]} <br>`;
        }
    }
});

