import React, { Component } from 'react'
import styles from './social-icons.scss'
import grid from '../../stylesheets/grid.scss'

export default class SocialIcons extends Component {

    allIcons(){
        return [].map((iconClass, index)=><span className={iconClass} key={index}></span>)
    }

    render() {
        const {icons} = styles

        return (
            <div className={`${icons} ${this.props.className}`}>
                <i className="fa fa-fw fa-question"></i>
            </div>
        )
    }
}

const iconsClass = []