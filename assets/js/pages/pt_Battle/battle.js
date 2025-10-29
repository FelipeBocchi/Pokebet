import { getPokemon } from "./../../global/api.js";

//  -   Pokemon 1 -
const attack_1_Battle_Pokemon_1 = document.querySelector("#attack_1_Battle_Pokemon_1");
const attack_2_Battle_Pokemon_1 = document.querySelector("#attack_2_Battle_Pokemon_1");
const attack_3_Battle_Pokemon_1 = document.querySelector("#attack_3_Battle_Pokemon_1");
const attack_4_Battle_Pokemon_1 = document.querySelector("#attack_4_Battle_Pokemon_1");
const pp_Battle_Pokemon_1 = document.querySelector("#pp_Battle_Pokemon_1");
const power_Battle_Pokemon_1 = document.querySelector("#power_Battle_Pokemon_1");
const type_Battle_Pokemon_1 = document.querySelector("#type_Battle_Pokemon_1");
const hp_text_1 = document.querySelector("#hp_text_1");
const nome_Pokemon_Bettle_1 = document.querySelector("#nome_Pokemon_Bettle_1");
const div_Pokemon_Battle_1 = document.querySelector("#div_Pokemon_Battle_1");
//  -   Pokémon 2 -
const attack_1_Battle_Pokemon_2 = document.querySelector("#attack_1_Battle_Pokemon_2");
const attack_2_Battle_Pokemon_2 = document.querySelector("#attack_2_Battle_Pokemon_2");
const attack_3_Battle_Pokemon_2 = document.querySelector("#attack_3_Battle_Pokemon_2");
const attack_4_Battle_Pokemon_2 = document.querySelector("#attack_4_Battle_Pokemon_2");
const pp_Battle_Pokemon_2 = document.querySelector("#pp_Battle_Pokemon_2");
const power_Battle_Pokemon_2 = document.querySelector("#power_Battle_Pokemon_2");
const type_Battle_Pokemon_2 = document.querySelector("#type_Battle_Pokemon_2");
const hp_text_2 = document.querySelector("#hp_text_2");
const nome_Pokemon_Bettle_2 = document.querySelector("#nome_Pokemon_Bettle_2");
const div_Pokemon_Battle_2 = document.querySelector("#div_Pokemon_Battle_2");

// === VARIÁVEIS ===
let pokemon1, pokemon2;
let maxHP1, maxHP2;
let currentHP1, currentHP2;
let turn = 1; // 1 = player, 2 = oponente

// === AUDIO ===
const audio = new Audio("./assets/audio/seta2.wav");
const audio_Battle = new Audio("./assets/audio/Battle.mp3");
audio_Battle.currentTime = 0;
audio_Battle.volume = 0.3;
audio_Battle.play().catch(err => console.log("Erro ao tocar som:", err));
// - registra esse áudio globalmente
window.audiosAtivos.push(audio_Battle);

// === TABELA DE FRAQUEZAS SIMPLIFICADA ===
const typeEffectiveness = {
  fire: { grass: 2, water: 0.5, ice: 2 },
  water: { fire: 2, grass: 0.5, ground: 2 },
  grass: { water: 2, fire: 0.5, ground: 2, rock: 2 },
  electric: { water: 2, ground: 0, flying: 2 },
  ground: { electric: 2, water: 0.5, grass: 0.5, fire: 2 },
  rock: { fire: 2, flying: 2, water: 0.5 },
  ice: { dragon: 2, grass: 2, fire: 0.5 },
  fighting: { rock: 2, flying: 0.5 },
};


const pokemon_Battle_1 = async ()=>{
    const nome_Pokemon = localStorage.getItem("Pokemon_6"); 

    pokemon1 = await getPokemon(nome_Pokemon);

    nome_Pokemon_Bettle_1.innerHTML = `${pokemon1.name}`;

    //  - Pega a imagem do pokemon
    const article = document.createElement("article");
    const imgSrc = pokemon1.sprites?.back_default || "placeholder.png";

    article.innerHTML = `
    <img src="${imgSrc}" id="pokemon_Battle_1" alt="${pokemon1.name}">`;

    div_Pokemon_Battle_1.appendChild(article);
    //  ================

    // 🔹 pegar HP
    maxHP1 = pokemon1.stats.find(s => s.stat.name === "hp").base_stat;
    currentHP1 = maxHP1;
    hp_text_1.innerHTML = `HP: ${currentHP1}/${maxHP1}`;

    // Ataques (pega 4 primeiros com URL)
    const attackList = pokemon1.moves.slice(0, 4).map(move => move.move);
    
    // Define nomes no HTML
    const attackButtons = [
        attack_1_Battle_Pokemon_1,
        attack_2_Battle_Pokemon_1,
        attack_3_Battle_Pokemon_1,
        attack_4_Battle_Pokemon_1
    ];

    attackButtons.forEach(async(btn, i) => {
        btn.innerHTML = attackList[i].name;
        const moveData = await fetch(attackList[i].url).then(res => res.json());
        //  - mostra os detalhes do ataque
        btn.addEventListener("mouseenter", ()=>{
            showAttackDetails(moveData);
        });
        //  - ataca
        btn.addEventListener("click",() => {
            playerAttack(moveData, 1);
        });
    });

}

//  - Detalhes dos ataques
function showAttackDetails(move){
    console.log(move.type.name);
    pp_Battle_Pokemon_1.innerHTML = `PP: ${move.pp}`;
    power_Battle_Pokemon_1.innerHTML = `POWER: ${move.power ?? "_"}`;
    type_Battle_Pokemon_1.innerHTML  = `TYPE: ${move.type.name}`

    audio.currentTime = 0;
    audio.play().catch(err => console.log("Erro ao tocar som:", err));
}


const pokemon_Battle_2 = async ()=>{
    const nome_Pokemon = localStorage.getItem("Pokemon_1"); 

    pokemon2 = await getPokemon(nome_Pokemon);

    nome_Pokemon_Bettle_2.innerHTML = `${pokemon2.name}`;

    //  - Pega a imagem do pokemon
    const article = document.createElement("article");
    const imgSrc = pokemon2.sprites?.front_default || "placeholder.png";

    article.innerHTML = `
    <img src="${imgSrc}" id="pokemon_Battle_2" alt="${pokemon2.name}">`;

    div_Pokemon_Battle_2.appendChild(article);
    //  ================

    // 🔹 pegar HP
    maxHP2 = pokemon2.stats.find(stat => stat.stat.name === "hp").base_stat;
    currentHP2 = maxHP2;
    hp_text_2.innerHTML = `HP: ${currentHP2}/${maxHP2}`;

    // Ataques (pega 4 primeiros com URL)
    const attackList = pokemon2.moves.slice(0, 4).map(move => move.move);
    
    // Define nomes no HTML
    const attackButtons = [
        attack_1_Battle_Pokemon_2,
        attack_2_Battle_Pokemon_2,
        attack_3_Battle_Pokemon_2,
        attack_4_Battle_Pokemon_2
    ];

    attackButtons.forEach(async(btn, i) => {
        btn.innerHTML = attackList[i].name;
        const moveData = await fetch(attackList[i].url).then(res => res.json());
        //  - mostra os detalhes do ataque
        btn.addEventListener("mouseenter", ()=>{
            showAttackDetails_2(moveData);
        });
        //  - ataca
        btn.addEventListener("click",() => {
            playerAttack(moveData, 2);
        });
    });
}

//  - Detalhes dos ataques
function showAttackDetails_2(move){
    console.log(move.type.name);
    pp_Battle_Pokemon_2.innerHTML = `PP: ${move.pp}`;
    power_Battle_Pokemon_2.innerHTML = `POWER: ${move.power ?? "_"}`;
    type_Battle_Pokemon_2.innerHTML  = `TYPE: ${move.type.name}`

    audio.currentTime = 0;
    audio.play().catch(err => console.log("Erro ao tocar som:", err));
}


// === FUNÇÃO DE EFEITO DE DANO (animação) ===
function animateDamage(pokemonImgId) {
  const img = document.querySelector(`#${pokemonImgId}`);
  img.style.filter = "brightness(2) saturate(3) hue-rotate(-20deg)";
  img.style.transform = "scale(1.05)";
  img.style.transition = "0.1s";
  setTimeout(() => {
    img.style.filter = "";
    img.style.transform = "scale(1)";
  }, 150);
}

// === FUNÇÃO DE CÁLCULO DE DANO ===
function calculateDamage(move, attacker, defender) {
  const power = move.power || 30;
  const moveType = move.type.name;
  const defenderTypes = defender.types.map(t => t.type.name);

  let effectiveness = 1;
  defenderTypes.forEach(t => {
    if (typeEffectiveness[moveType]?.[t]) {
      effectiveness *= typeEffectiveness[moveType][t];
    }
  });

  const randomFactor = Math.random() * 0.15 + 0.85;
  const damage = Math.floor(power * effectiveness * randomFactor);

  return { damage, effectiveness };
}

// === APLICA DANO E ATUALIZA HP ===
function applyDamage(defender, hpObj, move, imgId, hpText) {
  const { damage, effectiveness } = calculateDamage(move, null, defender);

  hpObj.current -= damage;
  if (hpObj.current < 0) hpObj.current = 0;

  // Atualiza texto e barra
  hpText.innerHTML = `HP: ${hpObj.current}/${hpObj.max}`;
  const bar = document.querySelector(`#${hpObj.barId}`);
  if (bar) bar.style.width = `${(hpObj.current / hpObj.max) * 100}%`;

  // Anima o dano
  animateDamage(imgId);

  // Mensagem de efetividade
  if (effectiveness > 1) console.log("🔥 Super efetivo!");
  else if (effectiveness < 1 && effectiveness > 0) console.log("💧 Pouco efetivo...");
  else if (effectiveness === 0) console.log("⚡ Sem efeito!");

  // Verifica morte
  if (hpObj.current <= 0) {
    setTimeout(() => {
      alert(`${defender.name} foi derrotado! 🏆`);
      location.reload();
      audio_Battle.pause();
    }, 500);
  }
}

// === SISTEMA DE TURNOS ===
async function playerAttack(moveData, attackerId) {
  // impede que o pokémon errado ataque
  if ((turn === 1 && attackerId !== 1) || (turn === 2 && attackerId !== 2)) {
    console.log("⚠️ Não é o turno desse Pokémon!");
    return;
  }

  if (turn == 1){
      applyDamage(
        pokemon2,
        { current: currentHP2, max: maxHP2, barId: "hp_bar_2" },
        moveData,
        "pokemon_Battle_2",
        hp_text_2
    );

    // Atualiza HP real
    currentHP2 -= moveData.power || 30;
    if (currentHP2 < 0) currentHP2 = 0;

    turn = 2; // passa turno
  }else{
      applyDamage(
        pokemon1,
        { current: currentHP1, max: maxHP1, barId: "hp_bar_1" },
        moveData,
        "pokemon_Battle_1",
        hp_text_1
    );

    // Atualiza HP real
    currentHP1 -= moveData.power || 30;
    if (currentHP1 < 0) currentHP1 = 0;

    turn = 1; // passa turno
  }
}




pokemon_Battle_1();
pokemon_Battle_2();
