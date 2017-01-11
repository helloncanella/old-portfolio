import React, { Component } from 'react'
import styles from './social-icons.scss'
import grid from '../../stylesheets/grid.scss'

export default class SocialIcons extends Component {

    renderIcon(company, link) {
        const {icon} = styles
        return (
            <a href={link}>
                <span className={`fa fa-fw fa-${company} ${icon}`} key={company}></span>
            </a>
        )
    }

    allIcons() {

        var icons = []

        for (var company in socialNetworks) {
            const {link} = socialNetworks[company]
            icons.push(this.renderIcon(company, link))
        }

        return icons
    }

    render() {
        const {icons} = styles

        return (
            <div className={`${icons} ${this.props.className}`}>
                {this.allIcons()}
            </div>
        )
    }
}

const socialNetworks = {
    linkedin: {
        link: 'https://br.linkedin.com/in/hellon-canella-4aa2b858'    
    },
    facebook: {
        link: 'https://www.facebook.com/hellon.canella'
    },
    github: {
        link: 'https://github.com/helloncanella'
    }
}