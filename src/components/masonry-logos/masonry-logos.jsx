import React, { Component } from 'react'
import grid from '../../stylesheets/grid.scss'
import Masonry from 'react-masonry-component'
import masonryStyles from '../../stylesheets/grid.scss'
import styles from './masonry-logos.scss'

export default class MasonryLogos extends Component {

    renderLogos() {

        let components = []

        const {backgroundColor, logos} = this.props
            , {item} = styles

        for (let logo in logos) {
            const {col6Of12, col3Of12, from320col3Of15, from320col5Of15} = grid
                , columnClass = logos[logo].size === 'big' ? `${from320col5Of15} ${col6Of12}` : `${from320col3Of15} ${col3Of12}`

            components.push(
                <div className={`${columnClass} ${item}`} style={{backgroundColor}}>
                    <img src={logos[logo].image} />
                </div>
            )
        }

        return components
    }

    render() {

       const {masonry, gutter, col3Of12} = masonryStyles
       
            , options = {
                columnWidth: '.' + col3Of12,
                gutter: '.' + gutter,
                percentPosition: true
            }

        return (
            <Masonry className={`${masonry}`} options={options}>
                <div className={gutter} ></div>
                {this.renderLogos()}
            </Masonry >
        )

        
    }
}


