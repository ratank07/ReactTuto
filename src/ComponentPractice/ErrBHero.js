import React, { Component } from 'react'

class ErrBHero extends Component {

    constructor({HeroName}) {
      super({HeroName})
        console.log(HeroName)
        if(HeroName === 'Joker'){
            throw new Error('Not a Hero')
        }
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div>
        ErrBHero example
      </div>
    )
  }
}

export default ErrBHero
