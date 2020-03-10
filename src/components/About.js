import React from 'react';

const About = props => (
	<div className='main-content'>
		<h2>{props.title}</h2>
		<p>
			This fun directory is a project to demonstrate <em>React Router</em>{' '}
			Functionality.
		</p>
		<p>
			It uses concepts such as Routing, Link, Styling Links, Custom Links,
			Custom Params, Conditoinal Routing etc
		</p>
	</div>
);

export default About;
