import React, { Component } from 'react'
import $ from 'jquery'
import {logos} from './logos/logos.js'
import styles from './skills.scss'

export class Skill extends Component {

    constructor() {
        super()
        this.progressBarResizing = null;
    }

    componentDidMount() {
        var self = this

        this.adjustProgressStyle()

        $(window).resize(() => {
            clearTimeout(self.progressBarResizing)
            self.progressBarResizing = setTimeout(self.adjustProgressStyle, 200)
        })

    }

    adjustProgressStyle() {

        const {halfProgress, progressContinuity, skill} = styles

            , skillWidth = $(`.${skill}`).width()


        $('.' + skill).css({
            'height': skillWidth + 'px'
        })

        $(`.${halfProgress}, .${progressContinuity}`).css({
            clip: `rect(0, ${skillWidth}px, ${skillWidth}px, ${skillWidth / 2}px)`
        })

    }

    render() {

        const {halfProgress, progressContinuity, logo, skill, insideCircle, radialProgress } = styles

            , {percentage, className=''} = this.props

            , progressClass = styles[`percent${percentage}`]

        , {img, style={}} = logos[this.props.brand]

        

        return (
            <div className={`${skill} ${className}`} >
                <div className={`${radialProgress} ${progressClass}`}>
                    <div className={halfProgress}></div>
                    <div className={progressContinuity}></div>
                    <div className={insideCircle}></div>
                    <img src={img} style={style} className={logo}/> 
                </div>
            </div>
        )

    }

}


