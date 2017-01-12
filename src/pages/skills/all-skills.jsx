import React, { Component } from 'react'
import styles from './skills.scss'
import grid from '../../stylesheets/grid.scss'
import logos from './logos/index.js'
import Masonry from 'react-masonry-component'
import masonryStyles from './masonry.scss'


const {row, col6Of12, col8Of12, col4Of12, col12Of12, col3Of12} = grid

export default class AllSkills extends Component {
    technologies() {
        const {technologies, item, sameHeight} = styles
            , {sass, reactNative, javascript, html, karma, meteor, react, css} = logos

        return (
            <div className={technologies}>
                <div className={row}>
                    <div className={`${col3Of12} ${item} `}>
                        <img src={javascript} />
                    </div>
                    <div className={`${col3Of12} ${item} `}>
                        <img src={react} />
                    </div>
                    <div className={`${col3Of12} ${item} `}>
                        <img src={css} />
                    </div>
                    <div className={`${col3Of12} ${item} `}>
                        <img src={html} />
                    </div>
                </div>
                <div className={row}>
                    <div className={`${col6Of12} ${item}`}>
                        <img src={reactNative} />
                    </div>
                    <div className={`${col3Of12} ${item} `}>
                        <img src={sass} />
                    </div>
                </div>
                <div className={row}>
                    <div className={`${col6Of12} ${item}`}>
                        <img src={meteor} />
                    </div>
                    <div className={`${col6Of12} ${item}`}>
                        <img src={karma} />
                    </div>
                </div>
            </div>
        )
    }

    masonry() {

        const {sass, reactNative, javascript, html, karma, meteor, react, css} = logos
            , {technologies, item, sameHeight} = styles
            , {masonry, gutter} = masonryStyles
            , options = {
                columnWidth: '.'+col3Of12,
                gutter: '.'+gutter,
                percentPosition: true                
            }

        return <Masonry className={`${masonry} ${technologies}`}  options={options}>
            <div className={gutter} ></div>
            <div className={`${item} ${col6Of12} `}>
                <img src={karma} />
            </div>
            <div className={`${item} ${col6Of12} `}>
                <img src={meteor} />
            </div>
            <div className={`${item} ${col6Of12} `}>
                <img src={karma} />
            </div>
            <div className={` ${item} ${col6Of12}`}>
                <img src={reactNative} />
            </div>
            <div className={`${item} ${col3Of12}  `}>
                <img src={sass} />
            </div>
            <div className={`${col3Of12} ${item} `}>
                <img src={html} />
            </div>
            <div className={`${col3Of12} ${item} `}>
                <img src={css} />
            </div>
        </Masonry >
    }

    render() {

        const {skills} = styles
        return (
            <div className={skills}>
                <h2 className={row}>Main Skills</h2>
                {this.masonry()}
                {this.technologies()}
            </div>
        )
    }
}


