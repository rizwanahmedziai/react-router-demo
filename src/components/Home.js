import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div className='main-content home'>
				<h2>Front End Course Directory</h2>
				<p>
					This fun directory is a project to demonstrate <em>React Router</em>{' '}
					Functionality.
				</p>
				<p>
					It uses concepts such as Routing, Link, Styling Links, Custom Links,
					Custom Params, Navigating Routes Programmatically, Conditoinal Routing
					etc
				</p>
				<p>Navigate the site using different links.</p>
				<hr />
				<h3>Featured Teachers</h3>
				<Link to='/teachers/JavaScript/Rizwan-Ahmed'>Rizwan Ahmed</Link>
			</div>
		);
	}
}

export default Home;
