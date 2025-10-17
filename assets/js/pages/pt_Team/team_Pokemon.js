import { getPokemon } from "./../../global/api.js";
import { navigate } from "./../../global/app.js"; // usa para chavar a aba do info

// ======== Configurações iniciais ========
const div_Conteiner_Pokemon_Team = document.querySelector("#div_Conteiner_Pokemon_Team");
const btn_Delete_Pokemon_Team = document.querySelector("#btn_Delete_Pokemon_Team");
const btnTrocar = document.querySelector("#btn_Trocar_Pokemon");
const btn_Info_Pokemon_Team = document.querySelector("#btn_Info_Pokemon_Team");

// Inicializa slots no localStorage se não existir
for (let i = 1; i <= 6; i++) {
    if (!localStorage.getItem(`Pokemon_${i}`)) localStorage.setItem(`Pokemon_${i}`, i.toString());
}

// Audio
const audio = new Audio("./assets/audio/Welcome.mp3");
audio.volume = 0.3;
audio.loop = true;
audio.play().catch(err => console.log("Erro ao tocar som:", err));
window.audiosAtivos.push(audio);

// ======== Variáveis de controle ========
let posicao = 0;              // slot selecionado (1 a 6)
let poke_LocalStorage = null; // chave localStorage do slot selecionado
let teamDivs = document.querySelectorAll(".divs_Pokemons_Team");

// ======== Função para renderizar Pokémon de cada slot ========
const team_Pokemon = async (i) => {
    const slotKey = `Pokemon_${i}`;
    const container = document.querySelector(`#div_Conteiner_Pokemon_${i}`);
    const pPokemon = document.querySelector(`#p_Pokemon_Team_${i}`);
    const slotValue = localStorage.getItem(slotKey);

    container.innerHTML = ""; // limpa antes de renderizar

    // Sempre adiciona pokebola de fundo
    const pokebolaBg = document.createElement("img");
    pokebolaBg.src = "./assets/img/pokebola.png";
    pokebolaBg.alt = "Pokebola de fundo";
    pokebolaBg.classList.add("pokebola_fundo"); 
    container.appendChild(pokebolaBg);

    // Clique no container seleciona o slot
    container.parentElement.addEventListener("click", () => {
        posicao = i;
        poke_LocalStorage = slotKey;
        console.log(`Slot ${i} selecionado`);
    });

    if (slotValue === "0") {
        // Slot vazio → pokebola
        pPokemon.textContent = "";
        container.innerHTML = `<img src="./assets/img/pokebola.png" alt="pokemon dentro da pokebola">`;
        return;
    }

    // Slot com Pokémon
    const pokemon = await getPokemon(slotValue);
    if (!pokemon) return console.log("Pokémon não encontrado");

    pPokemon.textContent = pokemon.name;

    const article = document.createElement("article");
    const imgSrc = pokemon.sprites?.front_default || "placeholder.png";
    article.innerHTML = `<img src="${imgSrc}" alt="${pokemon.name}">`;
    article.classList.add("img_Pokemons_Team");

    // Clique na imagem mostra info
    article.addEventListener("click", (e) => {
        e.stopPropagation();
        poke_Click(pokemon.id);
    });

    container.appendChild(article);
};

// ======== Renderiza todos os slots ========
for (let i = 1; i <= 6; i++) {
    team_Pokemon(i);
}

// ======== Função para mostrar info do Pokémon no painel ========
const poke_Click = async (id) => {
    const poke = await getPokemon(id);
    if (!poke) return;

    div_Conteiner_Pokemon_Team.innerHTML = "";

    const p_Pokemon = document.createElement("p");
    p_Pokemon.textContent = poke.name;

    const article = document.createElement("article");
    const imgSrc = poke.sprites?.front_default || "placeholder.png";
    article.innerHTML = `<img src="${imgSrc}" alt="${poke.name}" id="article_Pokemon_Click_Team">`;

    div_Conteiner_Pokemon_Team.appendChild(article);
    div_Conteiner_Pokemon_Team.appendChild(p_Pokemon);

    //  === coloca o id do pokemon para o info
    sessionStorage.setItem("pokemon", id);
};

// Inicializa painel com o primeiro Pokémon
poke_Click(localStorage.getItem("Pokemon_1"));

// ======== Botão DELETE ========
btn_Delete_Pokemon_Team.addEventListener("click", () => {
    if (!poke_LocalStorage) return alert("Selecione um Pokémon!");

    localStorage.setItem(poke_LocalStorage, "0"); // zera slot
    const i = parseInt(poke_LocalStorage.split("_")[1]);
    team_Pokemon(i); // atualiza slot
    div_Conteiner_Pokemon_Team.innerHTML = ""; // limpa painel
    poke_LocalStorage = null;
    posicao = 0;
});

// ======== Botão TROCAR ========
btnTrocar.addEventListener("click", () => {
    if (!posicao) return alert("Selecione um Pokémon ou posição vazia!");
    if (document.querySelector("#input_Troca_Pokemon")) return;

    const input = document.createElement("input");
    input.id = "input_Troca_Pokemon";
    input.type = "number";
    input.placeholder = "Digite o ID do Pokémon";
    input.style.marginBottom = "10px";
    input.style.width = "150px";

    btnTrocar.parentNode.insertBefore(input, btnTrocar);
    input.focus();

    input.addEventListener("keydown", async (e) => {
        if (e.key === "Enter") {
            const valor = input.value.trim();
            if (!valor) return alert("Digite um ID válido!");

            localStorage.setItem(`Pokemon_${posicao}`, valor); // atualiza slot
            team_Pokemon(posicao); // renderiza slot
            div_Conteiner_Pokemon_Team.innerHTML = ""; // limpa painel
            input.remove();
        }
    });
});


//  === Opção info do Team ===
btn_Info_Pokemon_Team.addEventListener("click", ()=>{
  navigate("pokemon");
}) 