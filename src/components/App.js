import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  onChangeType = (filter) => {
    this.setState({
        filters: {type: filter}
      })
  }
  onFindPetsClick = () => {
    let query = ''
    if (this.state.filters.type !== 'all'){
      query = `?type=${this.state.filters.type}`
    }
    fetch(`/api/pets${query}`)
    .then(resp => resp.json())
    .then(json => this.handlePetFetch(json))
  }
  handlePetFetch = (json) => {
    this.setState({
      pets: json
    })
  }
  onAdoptPet = (id) => {
    let newPets = this.state.pets.map(p => p.id === id ? {...p, isAdopted: true} : p)
    this.setState({
      pets: newPets
      
    })
    
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
