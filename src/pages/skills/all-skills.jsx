import React, { Component } from 'react'
import { Skill } from './skill.jsx'
import grid from '../../stylesheets/grid.scss'
import skillsStyles from './skills.scss'

export default class Skills extends Component {

  render() {


    const {row, col6Of12} = grid
    const {skills} = skillsStyles

    return (
      <div className={skills}>
        <h2>My skills</h2>

        <div className={row}>
          <Skill percentage={90} brand='html' className={col6Of12} />
          <Skill percentage={90} brand='css' className={col6Of12} />
        </div>

        <div className={row}>
          <Skill percentage={90} brand='javascript' className={col6Of12} />
          <Skill percentage={90} brand='react' className={col6Of12} />
        </div>

        <div className={row}>
          <Skill percentage={90} brand='meteor' className={col6Of12} />
          <Skill percentage={90} brand='reactNative' className={col6Of12} />
        </div>
      </div>
    )

  }

}

