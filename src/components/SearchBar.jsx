import { useState } from 'react'

export default function SearchBar({ onSearch, placeholder = 'Enter Pokémon name' }) {
  const [value, setValue] = useState('')

  function submit(e) {
    e.preventDefault()
    if (!value.trim()) return
    onSearch(value.trim())
  }

  return (
    <form className="search-bar" onSubmit={submit}>
      <input
        aria-label="pokemon-name"
        className="search-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  )
}
