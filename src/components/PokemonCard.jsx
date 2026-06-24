import errorImg from '../images/error.jpg'

export default function PokemonCard({ pokemon }) {
  if (!pokemon) return null

  const img =
    pokemon.sprites?.other?.['official-artwork']?.front_default ||
    pokemon.sprites?.front_default ||
    errorImg

  return (
    <div className="pokemon-card">
      <div className="pokemon-header">
        <h2>{pokemon.name}</h2>
        <span className="pokemon-id">#{pokemon.id}</span>
      </div>
      <div className="pokemon-main">
        <img src={img} alt={pokemon.name} className="pokemon-image" />
        <div className="pokemon-stats">
          <div className="types">
            <strong>Type:</strong>{' '}
            {pokemon.types.map((t) => t.type.name).join(', ')}
          </div>
          <ul>
            {pokemon.stats.map((s) => (
              <li key={s.stat.name}>
                <strong>{s.stat.name}:</strong> {s.base_stat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
