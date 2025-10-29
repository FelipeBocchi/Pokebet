export async function navigate(page) {
  const routes = {
    pokedex:  { html: "pokedex.html", js: "assets/js/pages/index/pokedex.js" },
    pokemon:  { html: "pokemon.html", js: "assets/js/pages/pt_Pokemon/pokemon.js" },
    team:   { html: "team_Pokemon.html", js: "assets/js/pages/pt_Team/team_Pokemon.js" },
    info:     { html: "info_City.html", js: "assets/js/pages/pt_Info_City/info_City.js" },
    battle:     { html: "battle.html", js: "assets/js/pages/pt_Battle/battle.js" }
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
  script.src = `${route.js}?v=${Date.now()}`; // força reload
  script.id = "page-script"; // id pra controlar script carregado

    // Espera o HTML estar montado antes de executar o script
  script.onload = () => console.log(`${route.js} carregado com sucesso!`);
  script.onerror = (e) => console.error(`Erro ao carregar ${route.js}`, e);

  document.body.appendChild(script);
}
