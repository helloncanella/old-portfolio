import React, { Component } from 'react'
import progressStyles from './radial-progress-bar.scss'
import $ from 'jquery'

export default class Skills extends Component {

  render() {

    return (
      <div className='skills'>
        <Skill percentage={60} />
        <Skill percentage={90} /> 
      </div>
    )

  }

}

class Skill extends Component {

  constructor() {
    super()
    this.progressBarResizing = null;
  }

  componentDidMount() {
    var self = this

    this.adjustProgressStyle()

    $(window).resize(()=>{
      clearTimeout(self.progressBarResizing)
      self.progressBarResizing = setTimeout(self.adjustProgressStyle, 200)
    })

  } 

  adjustProgressStyle() {

    const {halfProgress, progressContinuity, skill} = progressStyles

      , skillWidth = $(`.${skill}`).width()


   $('.'+skill).css({
     'height': skillWidth + 'px'
   })   

    $(`.${halfProgress}, .${progressContinuity}`).css({
      clip: `rect(0, ${skillWidth}px, ${skillWidth}px, ${skillWidth/2}px)`
    })

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