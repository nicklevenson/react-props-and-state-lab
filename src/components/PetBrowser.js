import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return this.props.pets.map(p => <div className="ui cards"><Pet key={p.id} pet={p} onAdoptPet={this.props.onAdoptPet}/></div>)
  
  }
}

export default PetBrowser
