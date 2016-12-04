import React, { Component } from 'react'
import {Skill} from './skill.jsx'


export default class Skills extends Component {

  render() {

    return (
      <div className='skills'>
        <Skill percentage={60} brand='meteor' />
        <Skill percentage={90} brand='meteor'/> 
      </div>
    )

  }

}

