import React, { Component } from 'react'

export default class PokemonForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { value } = this.state
    const { onSearch } = this.props
    if (!value.trim()) return
    onSearch(value.trim())
  }

  render() {
    const { placeholder = 'Enter Pokémon name' } = this.props
    const { value } = this.state

    return (
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <input
          aria-label="pokemon-name"
          className="search-input"
          value={value}
          onChange={this.handleChange}
          placeholder={placeholder}
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    )
  }
}
