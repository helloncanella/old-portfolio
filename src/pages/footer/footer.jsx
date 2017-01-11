import React, { Component } from 'react'
import { Trapeze } from '../../components/trapeze/trapeze.js'
import styles from './footer.scss'
import grid from '../../stylesheets/grid.scss'
import Contact from './form.jsx'
import SocialIcons from './social-icons.jsx'

export default class Footer extends Component {

	render() {
		const {row, col6Of12, col4Of12, col8Of12} = grid
			, {footer, bottom, social, left, right, message} = styles

		return (
			<Trapeze direction="up" color="black">
				<div className={`${footer}`}>
					<h2 className={`${row} message`}>Let's talk!</h2>
					<Contact/>
					<SocialIcons className={`${row}`} />
				</div>
			</Trapeze>
		)

	}

}