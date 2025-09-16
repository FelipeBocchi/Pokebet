import { getPokemon } from "./../../global/api.js";

const input_Geracoes = document.querySelector("#input_Geracoes")
const input_Pesquisar = document.querySelector("#input_Pesquisar")
const btn_Seta_Esquerda = document.querySelector("#btn_Seta_Esquerda")
const p_numeros_Pokemons = document.querySelector("#p_numeros_Pokemons")
const btn_Seta_Direita = document.querySelector("#btn_Seta_Direita")
const div_Pokemons = document.querySelector("#div_Pokemons")

const MAX = 32;
let array_Pokemon = [];
let start = 1;          // primeiro Pokémon do range             
let max_Pokemon = MAX;

// preenche o array com os pokémons
const preencre_Array_Pokemons = async () => {
  array_Pokemon = []; // limpa o array a cada chamada

  for(let idx = start; idx <= max_Pokemon; idx++) 
  {
    let pokemon = await getPokemon(idx);

    if (pokemon) {
      array_Pokemon.push(pokemon);
    } else {
      console.log("Erro ao achar pokemon");
    }
  }
};

// renderiza os pokémons na tela
const preencre_Tela_Pokemons = async () => {
  p_numeros_Pokemons.innerHTML = `00${start} - 0${max_Pokemon}`  //arrumar a lógica dos zeros!!!

  await preencre_Array_Pokemons(); // ✅ agora espera terminar

  // - Função para limpar o campo de pokemons
  div_Pokemons.innerHTML = ''

  array_Pokemon.forEach((p) => {
    const div_Do_Pokemon = document.createElement("div");
    div_Do_Pokemon.classList.add("div_Do_Pokemon");

    const article = document.createElement("article");

    // pega sprite ou fallback
    const imgSrc = p.sprites?.front_default || "placeholder.png";

    article.innerHTML = `
      <img src="${imgSrc}" alt="${p.name}">
      
    `; //<p>${p.name}</p>

    div_Do_Pokemon.appendChild(article);
    div_Pokemons.appendChild(div_Do_Pokemon);
  });
};

// - Chama a função pela primeira vez para preencher a página
document.addEventListener("DOMContentLoaded", ()=>{
  preencre_Tela_Pokemons();
})



// - Botão para passar os Pokemons aumentando o indice
btn_Seta_Direita.addEventListener("click", ()=>{
  // prepara para próxima "página"
  start = max_Pokemon + 1;
  max_Pokemon+=MAX;

  preencre_Tela_Pokemons();
})

// - Botão para passar os Pokemons diminuindo o indice
btn_Seta_Esquerda.addEventListener("click", ()=>{
  
    if(start > MAX)
    {
        // prepara para próxima "página"
        start -= MAX;
        max_Pokemon -= MAX;

        preencre_Tela_Pokemons();
    }else
    {
      alert("O indice está em 1, não há Pokemons anteriores!!!");
    }
  
})

//  - Função para pular para a geração escolhida
input_Geracoes.addEventListener("change", ()=>{
  let geracao = parseInt(input_Geracoes.value);
    
  if(geracao != 0)
    {
      switch (geracao) 
      {
        case 1:
          start = 1;
          max_Pokemon = start + (MAX - 1);
          preencre_Tela_Pokemons();
          break;

        case 2:
          start = 152;
          max_Pokemon = start + (MAX - 1);
          preencre_Tela_Pokemons();
          break;
      
        case 3:
          start = 253;
          max_Pokemon = start + (MAX - 1);
          preencre_Tela_Pokemons();
          break;

        case 4:
          start = 387;
          max_Pokemon = start + (MAX - 1);
          preencre_Tela_Pokemons();
          break;

        case 5:
          start = 495;
          max_Pokemon = start + (MAX - 1);
          preencre_Tela_Pokemons();
          break;

        default:
          break;
      }
    }
  })


