import { navigate } from "./../../global/app.js";

// define a lista global de áudios ativos
window.audiosAtivos = [];

const img_menu = document.querySelector("#img_menu");
const div_Nav_Moldura = document.querySelector("#div_Nav_Moldura");
const div_Fosco_Conteudo = document.querySelector("#div_Fosco_Conteudo");

/*  - Nav bar - */
const Home_Navbar_Moldura = document.querySelector("#Home_Navbar_Moldura");
const pokedex_Navbar_Moldura = document.querySelector("#pokedex_Navbar_Moldura");
const team_Navbar_Moldura = document.querySelector("#team_Navbar_Moldura");
const info_Navbar_Moldura = document.querySelector("#info_Navbar_Moldura");
const battle_Navbar_Moldura = document.querySelector("#battle_Navbar_Moldura");


// - Inicializa a chave como 0
sessionStorage.setItem("click", 0)

// - exporta a função e valida se a chave "click" foi assonada
export const valida = ()=>{
if(sessionStorage.getItem("click") !=0)
{
    navigate("pokemon");
}else{
    navigate("pokedex");
}
}

// - chama quando o site é carregado pela primeira vez
valida()

// === pausa audio ===
function pausarAudios() {
  window.audiosAtivos.forEach(a => { 
    a.pause(); 
    a.currentTime = 0; 
  });
}

// 🔹 intercepta a troca de página pra pausar sons antes de mudar
function navegarComAudio(pagina) {
  pausarAudios();  // pausa tudo antes de trocar
  navigate(pagina);
}

pokedex_Navbar_Moldura.addEventListener("click", ()=> navegarComAudio("pokedex"));
team_Navbar_Moldura.addEventListener("click", ()=> navegarComAudio("team"));
info_Navbar_Moldura.addEventListener("click", ()=> navegarComAudio("info"));
battle_Navbar_Moldura.addEventListener("click", ()=> navegarComAudio("battle"));



function abrirMenu() {
  div_Nav_Moldura.classList.add("ativar_Nav");
  div_Fosco_Conteudo.classList.add("ativo");
}

function fecharMenu() {
  div_Nav_Moldura.classList.remove("ativar_Nav");
  div_Fosco_Conteudo.classList.remove("ativo");
  document.body.style.cursor = 'default';
}

img_menu.addEventListener("click", abrirMenu);
//btn_Voltar_Navbar.addEventListener("click", fecharMenu);
div_Fosco_Conteudo.addEventListener("click", fecharMenu);

//  - icon de fechar o navbar -
div_Nav_Moldura.addEventListener('mouseleave', () => {
  document.body.style.cursor = 'url("./assets/img/fechar.png"), auto'; // muda o cursor pra imagem de X
  
});

div_Nav_Moldura.addEventListener('mouseenter', () => {
  document.body.style.cursor = 'default'; // volta ao normal quando entra
});

/*==========================*/
