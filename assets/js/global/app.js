export async function navigate(page) {
  const routes = {
    home:     { html: "pages/home.html", js: "scripts/home.js" },
    pokedex:  { html: "pokedex.html", js: "assets/js/pages/index/pokedex.js" },
    pokemon:  { html: "pokemon.html", js: "assets/js/pages/pt_Pokemon/pokemon.js" },
    perfil:   { html: "pages/perfil.html", js: "scripts/perfil.js" },
    info:     { html: "pages/info.html", js: "scripts/info.js" }
  };

  const route = routes[page];
  if (!route) {
    console.error("Rota não encontrada:", page);
    return;
  }

  // carrega o HTML
  const res = await fetch(route.html);
  const html = await res.text();
  document.querySelector("#conteudo_Site").innerHTML = html;

  // adiciona o JS da página
  const existingScript = document.getElementById("page-script");
  if (existingScript) existingScript.remove(); // remove script anterior se existir

  const script = document.createElement("script");
  script.type = "module";
  script.src = route.js;
  script.id = "page-script"; // id pra controlar script carregado
  document.body.appendChild(script);
}
