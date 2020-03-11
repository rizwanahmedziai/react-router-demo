import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// App Components
import Home from './Home';
import About from './About';
import Courses from './Courses';
import Teachers from './Teachers';
import Featured from './Featured';
import Header from './Header';
import NotFound from './NotFound';

const App = () => (
	<HashRouter basename='/react-router-demo'>
		<div className='container'>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/about' render={() => <About title='About' />} />
				<Route exact path='/teachers' component={Teachers} />
				<Route path='/teachers/:topic/:fname-:lname' component={Featured} />
				<Route path='/courses' component={Courses} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</HashRouter>
);

export default App;
