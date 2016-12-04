import React, { Component } from 'react'
import progressStyles from './radial-progress-bar.scss'
import $ from 'jquery'

export default class Skills extends Component {

  render() {

    return (
      <div className='skills'>
        <Skill percentage={90}/>
        <Skill percentage={60}/>
      </div>
    ) 

  }

}

class Skill extends Component {

  constructor() {
    super()
    this.progressBarResizing = null;
  }

  render() {

    const {halfProgress, progressContinuity, skill, insideCircle, radialProgress } = progressStyles

      , {percentage} = this.props

      , progressClass = progressStyles[`percent${percentage}`]

    return (
      <div className={skill} >
        <div className={`${radialProgress} ${progressClass}`}>
          <div className={halfProgress}></div>
          <div className={progressContinuity}></div>
          <div className={insideCircle}></div>
        </div>
      </div>
    )

  }

}