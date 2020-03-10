import React from 'react';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';

import NotFound from './NotFound';
import CoursesContainer from './courses/CoursesContainer';
import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';

const Courses = ({ match }) => (
	<div className='main-content courses'>
		<div className='course-header group'>
			<h2>Courses</h2>
			<ul className='course-nav'>
				<li>
					<NavLink to={`${match.url}/html`}>HTML</NavLink>
				</li>
				<li>
					<NavLink to={`${match.url}/css`}>CSS</NavLink>
				</li>
				<li>
					<NavLink to={`${match.url}/javascript`}>JavaScript</NavLink>
				</li>
			</ul>
		</div>
		<Switch>
			<Route
				exact
				path={match.path}
				render={() => <Redirect to={`${match.path}/html`} />}
			/>
			<Route
				path={`${match.path}/html`}
				render={() => <CoursesContainer data={HTMLCourses} />}
			/>
			<Route
				path={`${match.path}/css`}
				render={() => <CoursesContainer data={CSSCourses} />}
			/>
			<Route
				path={`${match.path}/javascript`}
				render={() => <CoursesContainer data={JSCourses} />}
			/>
			<Route component={NotFound} />
		</Switch>
	</div>
);

export default Courses;
