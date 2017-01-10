import React, { Component } from 'react'
import styles from './skills.scss'
import grid from '../../stylesheets/grid.scss'
import logos from './logos/index.js'

const {row, col6Of12, col8Of12, col4Of12, col12Of12} = grid

export default class AllSkills extends Component {
    technologies() {
        const {technologies, item, sameHeight} = styles
            , {sass, reactNative, javascript, html, karma, meteor, react, css} = logos

        return (
            <div className={technologies}>
                <div className={row}>
                    <div className={`${col6Of12} ${item} ${sameHeight}`}>
                         <img src={javascript} />
                    </div>
                    <div className={`${col6Of12} ${item}  ${sameHeight}`}>                    
                        <img src={react} />
                    </div>
                </div>
                <div className={row}>
                    <div className={`${col12Of12} ${item}`}>
                        <img src={reactNative} />
                    </div>
                </div>
                <div className={row}>
                    <div className={`${col12Of12} ${item}`}>
                         <img src={meteor} />
                    </div>
                </div>
                <div className={row}>
                    <div className={`${col12Of12} ${item}`}>
                        <img src={karma} />
                    </div>
                </div>
            </div>
        )
    }

    render() {

        const {skills} = styles
        return (
            <div className={skills}>
                <h2 className={row}>Main Skills</h2>
                {this.technologies()}
            </div>
        )
    }
}


