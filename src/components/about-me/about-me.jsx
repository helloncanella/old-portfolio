import React, { Component } from 'react'
import styles from './about-me.scss'
import grid from '../../stylesheets/grid.scss'


export default class AboutMe extends Component {

	render() {
		let { aboutMe, photo, text, socialNetwork } = styles
		const {row} = grid

		return (
			<div className={aboutMe}>
				<div className={photo}>
					<img src="https://static1.squarespace.com/static/50de3e1fe4b0a05702aa9cda/t/50eb2245e4b0404f3771bbcb/1357589992287/ss_profile.jpg" alt="" />
				</div>
				<div className={text}>
					<h2>Who I'm</h2>
					<p className={row}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam inventore sapiente itaque, modi optio debitis, obcaecati amet eius maiores blanditiis at. Repudiandae, asperiores debitis ullam deleniti libero accusantium error, provident beatae, cumque impedit minus dolore dicta expedita alias, excepturi quae optio ea quos natus sint eos fugiat nostrum ut quam?
					</p>
				</div>
				<div className={socialNetwork}>
					<a className="fa fa-linkedin" href="https://br.linkedin.com/in/hellon-canella-4aa2b858"></a>
					<a className="fa fa-github" href="https://github.com/helloncanella"></a>
					<a className="fa fa-facebook" href="https://www.facebook.com/hellon.canella"></a>
				</div>
			</div>

		)

	}

}