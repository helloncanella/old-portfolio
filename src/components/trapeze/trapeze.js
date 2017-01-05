import React, { Component, PropTypes } from 'react'
import styles from './trapeze.scss';

export class Trapeze extends Component {
    render() {
        const {trapeze} = styles
            , {color='purple', direction='down'} = this.props

        return (
            <div className={trapeze}>
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className={styles[direction]}>
                    <path d="M0 0 L100 0 L100 80 L0 100" fill={color}/>
                </svg>
                {this.props.children}
            </div>
        );
    }
}

Trapeze.propTypes = {
    color: PropTypes.string,
    direction: PropTypes.string
}