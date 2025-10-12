import { navigate } from "./../../global/app.js";

const img_menu = document.querySelector("#img_menu");
const div_Nav_Moldura = document.querySelector("#div_Nav_Moldura");
const div_Fosco_Conteudo = document.querySelector("#div_Fosco_Conteudo");
const btn_Voltar_Navbar = document.querySelector("#btn_Voltar_Navbar");

/*
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
*/


//navigate("team");

//navigate("info");

navigate("battle");

function abrirMenu() {
  div_Nav_Moldura.classList.add("ativar_Nav");
  div_Fosco_Conteudo.classList.add("ativo");
}

function fecharMenu() {
  div_Nav_Moldura.classList.remove("ativar_Nav");
  div_Fosco_Conteudo.classList.remove("ativo");
}

img_menu.addEventListener("click", abrirMenu);
btn_Voltar_Navbar.addEventListener("click", fecharMenu);
div_Fosco_Conteudo.addEventListener("click", fecharMenu);