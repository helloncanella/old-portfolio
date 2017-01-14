import React, { Component } from 'react'
import styles from './skills.scss'
import logos from './logos/index.js'
import Masonry from '../../components/masonry-logos/masonry-logos.jsx'
import grid from '../../stylesheets/grid.scss'

export default class AllSkills extends Component {
    render() {

        const {skills} = styles
            , {row} = grid

        return (
            <div className={skills}>
                <h2 className={row}>Main Skills</h2>
                <Masonry logos={logos} backgroundColor="black" />
            </div>
        )
    }
}


