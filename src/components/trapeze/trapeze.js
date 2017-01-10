import React, { Component, PropTypes } from 'react'
import styles from './trapeze.scss';

export class Trapeze extends Component {

    constructor(){
        super()
        this.state = {
            verticalPosition: 90
        }
    }

    componentDidMount(){
        this.adjustSlope()
        this.activeListener()
    }

    activeListener(){
        const adjustSlope = this.adjustSlope.bind(this)
        window.addEventListener('resize', adjustSlope)
    }

    adjustSlope(){
        const {clientWidth: w, clientHeight: h} = this.refs.trapeze
            , tan = 0.1 //I'm using the width of trapeze as adjacent-cathetus

        this.setState({verticalPosition: (1-(w*tan)/h)*100})
    }

    render() {
        const {trapeze} = styles
            , {color='purple', direction='down', className} = this.props

        return (
            <div className={`${trapeze}`} ref="trapeze" style={this.props.style || {}}>
                <svg width="100%" height="100%" viewBox={`0 0 100 100`} preserveAspectRatio="none" className={styles[direction]}>
                    <path d={`M0 0 L100 0 L100 ${this.state.verticalPosition} L0 100`} fill={color}/>
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