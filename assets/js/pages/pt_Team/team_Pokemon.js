import { getPokemon } from "./../../global/api.js";

const p_Pokemon_Team_1 = document.querySelector("#p_Pokemon_Team_1");
const p_Pokemon_Team_2 = document.querySelector("#p_Pokemon_Team_2");
const p_Pokemon_Team_3 = document.querySelector("#p_Pokemon_Team_3");
const p_Pokemon_Team_4 = document.querySelector("#p_Pokemon_Team_4");
const p_Pokemon_Team_5 = document.querySelector("#p_Pokemon_Team_5");
const p_Pokemon_Team_6 = document.querySelector("#p_Pokemon_Team_6");
const div_Conteiner_Pokemon_1 = document.querySelector("#div_Conteiner_Pokemon_1");
const div_Conteiner_Pokemon_2 = document.querySelector("#div_Conteiner_Pokemon_2");
const div_Conteiner_Pokemon_3 = document.querySelector("#div_Conteiner_Pokemon_3");
const div_Conteiner_Pokemon_4 = document.querySelector("#div_Conteiner_Pokemon_4");
const div_Conteiner_Pokemon_5 = document.querySelector("#div_Conteiner_Pokemon_5");
const div_Conteiner_Pokemon_6 = document.querySelector("#div_Conteiner_Pokemon_6");
const div_Conteiner_Pokemon_Team =document.querySelector("#div_Conteiner_Pokemon_Team");
const btn_Delete_Pokemon_Team = document.querySelector("#btn_Delete_Pokemon_Team");


if (!localStorage.getItem("Pokemon_1")) localStorage.setItem("Pokemon_1", "1");
if (!localStorage.getItem("Pokemon_2")) localStorage.setItem("Pokemon_2", "2");
if (!localStorage.getItem("Pokemon_3")) localStorage.setItem("Pokemon_3", "3");
if (!localStorage.getItem("Pokemon_4")) localStorage.setItem("Pokemon_4", "4");
if (!localStorage.getItem("Pokemon_5")) localStorage.setItem("Pokemon_5", "5");
if (!localStorage.getItem("Pokemon_6")) localStorage.setItem("Pokemon_6", "6");

// === audio ===
const audio = new Audio("./assets/audio/Welcome.mp3");
audio.volume = 0.3;
audio.loop = true;
audio.play().catch(err => console.log("Erro ao tocar som:", err));
// - registra esse áudio globalmente
window.audiosAtivos.push(audio);

let click = localStorage.getItem("Pokemon_1");
let poke_LocalStorage;
let posicao = 0;

const team_Pokemon = async (i)=>{

    const setpokemon = localStorage.getItem(`Pokemon_${i}`);      //  - pega o id salvo no localstorage
    if (setpokemon === "0") return; // posição vazia

    const pokemon = await getPokemon(setpokemon);               //  - puxa o pokemon na api

    if(pokemon)
    {
        let article;
        let imgSrc;
        switch(i) 
        {
            case 1:
                p_Pokemon_Team_1.innerHTML  = `${pokemon.name}`;

                article = document.createElement("article");
                imgSrc = pokemon.sprites?.front_default || "placeholder.png";

                article.innerHTML = `
                <img src="${imgSrc}" id="id_Pokemon_Team_1" alt="${pokemon.name}">`;

                article.setAttribute("class", "img_Pokemons_Team");
                //article.setAttribute("id", "id_Pokemon_Team_1");

                article.addEventListener("click", ()=>{
                    click = `${pokemon.id}`;
                    poke_LocalStorage = "Pokemon_1";
                    posicao = 1;
                    poke_Click(click);
                })

                div_Conteiner_Pokemon_1.appendChild(article);
                break;
        
            case 2:
                p_Pokemon_Team_2.innerHTML  = `${pokemon.name}`;

                article = document.createElement("article");
                imgSrc = pokemon.sprites?.front_default || "placeholder.png";

                article.innerHTML = `
                <img src="${imgSrc}" id="id_Pokemon_Team_2" alt="${pokemon.name}">`;

                article.setAttribute("class", "img_Pokemons_Team");
                //article.setAttribute("id", "id_Pokemon_Team_2");

                article.addEventListener("click", ()=>{
                    click = `${pokemon.id}`;
                    poke_LocalStorage = "Pokemon_2";
                    
                    poke_Click(click);
                })

                div_Conteiner_Pokemon_2.appendChild(article);
                break;
        
            case 3:
                p_Pokemon_Team_3.innerHTML  = `${pokemon.name}`;

                article = document.createElement("article");
                imgSrc = pokemon.sprites?.front_default || "placeholder.png";

                article.innerHTML = `
                <img src="${imgSrc}" id="id_Pokemon_Team_3" alt="${pokemon.name}">`;

                article.setAttribute("class", "img_Pokemons_Team");
                //article.setAttribute("id", "id_Pokemon_Team_3");

                article.addEventListener("click", ()=>{
                    click = `${pokemon.id}`;
                    poke_LocalStorage = "Pokemon_3";
                    posicao = 3;
                    poke_Click(click);
                })

                div_Conteiner_Pokemon_3.appendChild(article);
                break;
        
            case 4:
                p_Pokemon_Team_4.innerHTML  = `${pokemon.name}`;

                article = document.createElement("article");
                imgSrc = pokemon.sprites?.front_default || "placeholder.png";

                article.innerHTML = `
                <img src="${imgSrc}" id="id_Pokemon_Team_4" alt="${pokemon.name}">`;

                article.setAttribute("class", "img_Pokemons_Team");
                //article.setAttribute("id", "id_Pokemon_Team_4");

                article.addEventListener("click", ()=>{
                    click = `${pokemon.id}`;
                    poke_LocalStorage = "Pokemon_4";
                    posicao = 4;
                    poke_Click(click);
                })

                div_Conteiner_Pokemon_4.appendChild(article);
                break;
        
            case 5:
                p_Pokemon_Team_5.innerHTML  = `${pokemon.name}`;

                article = document.createElement("article");
                imgSrc = pokemon.sprites?.front_default || "placeholder.png";

                article.innerHTML = `
                <img src="${imgSrc}" id="id_Pokemon_Team_5" alt="${pokemon.name}">`;

                article.setAttribute("class", "img_Pokemons_Team");
                //article.setAttribute("id", "id_Pokemon_Team_5");

                article.addEventListener("click", ()=>{
                    click = `${pokemon.id}`;
                    poke_LocalStorage = "Pokemon_5";
                    posicao = 5;
                    poke_Click(click);
                })

                div_Conteiner_Pokemon_5.appendChild(article);
                break;
        
            case 6:
                p_Pokemon_Team_6.innerHTML  = `${pokemon.name}`;

                article = document.createElement("article");
                imgSrc = pokemon.sprites?.front_default || "placeholder.png";

                article.innerHTML = `
                <img src="${imgSrc}" id="id_Pokemon_Team_6" alt="${pokemon.name}">`;

                article.setAttribute("class", "img_Pokemons_Team");
                //article.setAttribute("id", "id_Pokemon_Team_6");

                article.addEventListener("click", ()=>{
                    click = `${pokemon.id}`;
                    poke_LocalStorage = "Pokemon_6";
                    posicao = 6;
                    poke_Click(click);
                })

                div_Conteiner_Pokemon_6.appendChild(article);
                break;
        
            default:
                break;
        }
    }else
    {
        console.log("pokemon não encontrado!!!");
    }
}

for(let i = 1; i <= 6; i++)
{
    team_Pokemon(i);
}

const poke_Click = async(c)=>{
    const poke = await getPokemon(c);

    div_Conteiner_Pokemon_Team.innerHTML = "";      //  - Limpa o conteúdo para criar o novo elemento

    let p_Pokemon = document.createElement("p");
    p_Pokemon.innerHTML = `${poke.name}`

    let article = document.createElement("article");
    let imgSrc = poke.sprites?.front_default || "placeholder.png";

    article.innerHTML = `
    <img src="${imgSrc}" id="article_Pokemon_Click_Team" alt="${poke.name}">`;

    //article.setAttribute("id", "article_Pokemon_Click_Team");

    div_Conteiner_Pokemon_Team.appendChild(article);
    div_Conteiner_Pokemon_Team.appendChild(p_Pokemon);
}

poke_Click(click);


btn_Delete_Pokemon_Team.addEventListener("click", () => {
    if (!poke_LocalStorage) return; // se nenhum pokemon estiver selecionado

    // zera o valor no localStorage
    localStorage.setItem(poke_LocalStorage, "0");

    // limpa o nome e imagem da posição correspondente
    switch(poke_LocalStorage) {
        case "Pokemon_1":
            div_Conteiner_Pokemon_1.innerHTML = "";
            p_Pokemon_Team_1.textContent = "";
            break;
        case "Pokemon_2":
            div_Conteiner_Pokemon_2.innerHTML = "";
            p_Pokemon_Team_2.textContent = "";
            break;
        case "Pokemon_3":
            div_Conteiner_Pokemon_3.innerHTML = "";
            p_Pokemon_Team_3.textContent = "";
            break;
        case "Pokemon_4":
            div_Conteiner_Pokemon_4.innerHTML = "";
            p_Pokemon_Team_4.textContent = "";
            break;
        case "Pokemon_5":
            div_Conteiner_Pokemon_5.innerHTML = "";
            p_Pokemon_Team_5.textContent = "";
            break;
        case "Pokemon_6":
            div_Conteiner_Pokemon_6.innerHTML = "";
            p_Pokemon_Team_6.textContent = "";
            break;
    }

    // limpa o painel do time principal
    div_Conteiner_Pokemon_Team.innerHTML = "";

    console.log(`Pokémon removido da posição ${poke_LocalStorage}`);
});
