import React, { Component } from 'react'
import styles from './about-me.scss'
import grid from '../../stylesheets/grid.scss'


export default class AboutMe extends Component {
 
	render() { 
		let { aboutMe, text } = styles
		const {row} = grid

		return (
			<div className={`${aboutMe} ${row}`}>
				<div className={text} >
					<h2>About me</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam inventore sapiente itaque, modi optio debitis, obcaecati amet eius maiores blanditiis at. Repudiandae, asperiores debitis ullam deleniti libero accusantium error, provident beatae, cumque impedit minus dolore dicta expedita alias, excepturi quae optio ea quos natus sint eos fugiat nostrum ut quam?
					</p>
				</div>
			</div>

		)

	}

}