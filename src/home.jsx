import styles from './index.scss';
import React from 'react';
import Header from './pages/header/header.jsx'
import AboutMe from './pages/about-me/about-me.jsx'
import Contact from './pages/contact/contact.jsx'
import Projects from './pages/projects/projects.jsx'
import Skills from './pages/skills/all-skills.jsx'
import Footer from './pages/footer/footer.jsx'

import globals from './stylesheets/globals.scss'

export default class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<Header />				
				<main>
					<AboutMe />
					<Skills />
				</main>
				<Footer/>
			</div>
		)
	}
}

