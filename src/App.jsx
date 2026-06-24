import { useState } from 'react'
import './App.css'
import fetchPokemonData from './services/pokemonApi'
import loaderImg from './images/loader.jpg'
import errorImg from './images/error.jpg'
import PokemonForm from './components/PokemonForm'
import PokemonCard from './components/PokemonCard'

function App() {
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSearch(name) {
    setLoading(true)
    setError(null)
    setPokemon(null)
    try {
      const data = await fetchPokemonData(name)
      setPokemon(data)
    } catch (err) {
      setError(err.message || 'Failed to fetch')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-root">
      <header>
        <h1>Pokédex Lookup</h1>
        <p>Type a Pokémon name to see its image and stats.</p>
      </header>

      <PokemonForm onSearch={handleSearch} />

      <main>
        {loading && (
          <div className="loading">
            <img src={loaderImg} alt="loading" className="loader-image" />
          </div>
        )}

        {error && (
          <div className="error">
            <img src={errorImg} alt="error" className="error-image" />
            <div className="error-text">{error}</div>
          </div>
        )}

        {pokemon && <PokemonCard pokemon={pokemon} />}
      </main>
    </div>
  )
}

export default App
