const BASE_URL = "https://pokeapi.co/api/v2";

// Função genérica pra buscar dados
async function fetchData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) throw new Error("Erro ao buscar dados da API");
    return await response.json();
  } catch (error) {
    console.error("Erro:", error);
  }
}

// Função genérica para buscar a descrição 
export async function getPokemonDescription(nameOrId, lang = "pt-BR") {
  const data = await fetchData(`pokemon-species/${nameOrId}`);
  if (!data) return "Descrição não disponível";

  // procura a descrição na língua escolhida
  let entry = data.flavor_text_entries.find(
    (item) => item.language.name === lang && item.version.name === "firered"
  );

  // se não achar em PT-BR, cai pro inglês
  if (!entry) {
    entry = data.flavor_text_entries.find(
      (item) => item.language.name === "en" && item.version.name === "firered"
    );
  }

  if (!entry) return { description: "Descrição não encontrada", version: null };

  return entry ? entry.flavor_text : "Descrição não encontrada";
}


// Funções específicas
export async function getPokemon(nameOrId) {
  return await fetchData(`pokemon/${nameOrId}`);
}
