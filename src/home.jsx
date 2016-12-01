import styles from './index.scss';
import React from 'react';
import Header from './components/header/header.jsx'
import AboutMe from './components/about-me/about-me.jsx'
import Contact from './components/contact/contact.jsx'
import Projects from './components/projects/projects.jsx'
import Skills from './components/skills/skills.jsx'
import Footer from './components/footer/footer.jsx'

export default class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<Header />
				<main>
					<AboutMe/>
				</main>
				<Footer />
			</div>
		)
	}
}
