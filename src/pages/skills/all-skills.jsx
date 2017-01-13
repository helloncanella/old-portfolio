import React, { Component } from 'react'
import styles from './skills.scss'
import grid from '../../stylesheets/grid.scss'
import logos from './logos/index.js'
import Masonry from 'react-masonry-component'
import masonryStyles from '../../stylesheets/grid.scss'

const {row, col6Of12, col8Of12, col4Of12, col12Of12, col3Of12} = grid

export default class AllSkills extends Component {

    technologiesLogos() {
        let components = []

        for (let logo in logos) {
            const {col6Of12, col3Of12} = grid
                , {item} = styles
                , columnClass = logos[logo].size === 'big' ? col6Of12 : col3Of12

            components.push(
                <div className={`${item} ${columnClass} `}>
                    <img src={logos[logo].image} />
                </div>
            )

        }

        return components
    }

    masonry() {

        const {technologies, item} = styles
            , {masonry, gutter, col3Of12} = masonryStyles
            , options = {
                columnWidth: '.' + col3Of12,
                gutter: '.' + gutter,
                percentPosition: true
            }

        return (
            <Masonry className={`${masonry} ${technologies}`} options={options}>
                <div className={gutter} ></div>
                {this.technologiesLogos()}
            </Masonry >
        )
    }

    render() {

        const {skills} = styles
        return (
            <div className={skills}>
                <h2 className={row}>Main Skills</h2>
                {this.masonry()}
            </div>
        )
    }
}


