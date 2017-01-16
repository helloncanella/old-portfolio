import React, { Component, PropTypes } from 'react'
import styles from './trapeze.scss';


export class Trapeze extends Component {

    constructor() {
        super()
        this.state = {
            verticalPosition: 90,
            svgViewBoxWidth: 150
        }
    }

    componentDidMount() {
        this.activeListeners()
        this.adjustSVG()
    }

    adjustSVG() {
        if (this.props.image) {
            this.correctProportion()
            this.adjustSVGHeight()
        }
        this.adjustSlope()
    }


    activeListeners() {
        const adjustSVG = this.adjustSVG.bind(this)
        window.addEventListener('resize', adjustSVG)
    }

    adjustSVGHeight() {
        this.refs.trapeze.style.height = `${this.refs.svg.clientHeight}px`
    }

    correctProportion() {
        const {clientWidth: width} = this.refs.trapeze
        let svgViewBoxWidth
        if (768 <= width) svgViewBoxWidth = 180
        if (1024 <= width) svgViewBoxWidth = 200
        this.setState({ svgViewBoxWidth })
    }

    adjustSlope() {
        const {clientWidth: w, clientHeight: h} = this.refs.trapeze
            , tan = 0.1 //I'm using the width of trapeze as adjacent-cathetus

        this.setState({ verticalPosition: (1 - (w * tan) / h) * 100 })
    }

    image(id, image) {
        return (
            <pattern id={id} patternUnits="userSpaceOnUse" width="100%" height="450" >
                <image href={image} x="0" y="0" width="110%" />
            </pattern>
        )
    }



    render() {

        const {trapeze} = styles
            , {color = 'purple', direction = 'down', className, image: imageUrl} = this.props
            , boxWidth = this.state.svgViewBoxWidth || 160

        console.log(this.state.svgViewBoxWidth)

        let image = null, fill = color, id, preserveAspectRatio = "none", heightProp = { height: "100%" }

        if (imageUrl) {
            id = "img1"
            fill = `url(#${id})`
            image = this.image(id, imageUrl)
            preserveAspectRatio = ''
            heightProp = {}
        }

        return (
            <div className={`${trapeze}`} ref="trapeze" style={this.props.style || {}}>
                <svg {...heightProp} ref="svg" width="100%" viewBox={`0 0 ${boxWidth} 100`} className={styles[direction]} preserveAspectRatio={preserveAspectRatio} >
                    <path d={`M0 0 L${boxWidth} 0 L${boxWidth} ${this.state.verticalPosition} L0 100`} fill={fill} />
                    {image}
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