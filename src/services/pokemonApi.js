function fetchPokemonData(name) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;
  return fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
}

export default fetchPokemonData;