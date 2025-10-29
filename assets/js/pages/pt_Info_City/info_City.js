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

const musicas = {
    "Pallet Town": "./assets/audio/Pallet_Town.mp3",
    "Viridian City":"./assets/audio/Viridian_Forest.mp3",
    "Pewter City":"./assets/audio/Pewter_City.mp3",
    "Cerulean City": "./assets/audio/Cerulean_City.mp3",
    "Vermilion City": "./assets/audio/Vermilion_City.mp3",
    "Lavender Town": "./assets/audio/Lavender_Town.mp3",
    "Celadon City": "./assets/audio/Celadon_City.mp3",
    "Fuchsia City": "./assets/audio/Fuchsia_City.mp3",
    "Saffron City": "./assets/audio/Pallet_Town.mp3",
    "Cinnabar Island": "./assets/audio/Cinnabar_Island.mp3",
    "Indigo Plateau": "./assets/audio/Pallet_Town.mp3",
}


//  função para mudar o música da cidade -
/*function musica_fundo(nomeCidade){
    const musica = musicas[nomeCidade];

    const audio = new Audio(musica);
    audio.currentTime = 0;
    audio.volume = 0.3;
    audio.play().catch(err => console.log("Erro ao tocar som:", err));
}
 */


// função pra mover o personagem até a cidade
function irParaCidade(nomeCidade) {
  const cidade = cidades[nomeCidade];
  if (!cidade) return;

  personagem_Mapa_Info_City.style.left = cidade.x + '%';
  personagem_Mapa_Info_City.style.top = cidade.y + '%';
}

//  - Antes do usuario interagir -
irParaCidade(cidade_Kanto[0].nome);

let audio = new Audio(musicas["Pallet Town"]);
audio.currentTime = 0;
audio.volume = 0.3;
audio.play().catch(err => console.log("Erro ao tocar som:", err));
// - registra esse áudio globalmente
window.audiosAtivos.push(audio);

p_Nome_City_Info.innerHTML = cidade_Kanto[0].nome;
p_Descricao_Info_City.innerHTML = `${cidade_Kanto[0].descricao} <br> ${cidade_Kanto[0].curiosidades}`;
p_Gye_Info_City.innerHTML = `Linder: ${cidade_Kanto[0].lider} <br> Tipo: ${cidade_Kanto[0].tipo_ginasio}`;

for(j = 0; j < cidade_Kanto[i].itens_encontrados.length; j++)
    p_Itens_Info_City.innerHTML += `${cidade_Kanto[0].itens_encontrados[j]} <br>`;
        

for(j = 0; j < cidade_Kanto[0].pokemons_selvagens.length; j++)
{
    let pokemon = await getPokemon(cidade_Kanto[0].pokemons_selvagens[j]);
    const imgSrc = pokemon.sprites?.front_default || "placeholder.png";

    p_Pokemon_Info_City.innerHTML += `<img src="${imgSrc}"> ${cidade_Kanto[0].pokemons_selvagens[j]} <br>`;
}
//=======================================



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
        audio.pause();

        irParaCidade(cidade_Kanto[i].nome);

        audio = new Audio(musicas[cidade_Kanto[i].nome]);
        audio.currentTime = 0;
        audio.volume = 0.3;
        audio.play().catch(err => console.log("Erro ao tocar som:", err));
        // - registra esse áudio globalmente
        window.audiosAtivos.push(audio);

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
        audio.pause();

        irParaCidade(cidade_Kanto[i].nome);

        audio = new Audio(musicas[cidade_Kanto[i].nome]);
        audio.currentTime = 0;
        audio.volume = 0.3;
        audio.play().catch(err => console.log("Erro ao tocar som:", err));
        // - registra esse áudio globalmente
        window.audiosAtivos.push(audio);

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
