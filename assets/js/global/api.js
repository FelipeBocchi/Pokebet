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

// Funções específicas
export async function getPokemon(nameOrId) {
  return await fetchData(`pokemon/${nameOrId}`);
}

export async function getAbility(id) {
  return await fetchData(`ability/${id}`);
}

export async function getType(id) {
  return await fetchData(`type/${id}`);
}
