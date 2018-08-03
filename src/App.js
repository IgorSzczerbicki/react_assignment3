import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, NavLink, Switch, Redirect} from 'react-router-dom'
import Courses from './containers/Courses/Courses'
import Users from './containers/Users/Users'

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">

					<NavLink exact to='/courses'>
						Courses
					</NavLink>
					<NavLink exact to='users'>
						Users
					</NavLink>
					<Switch>
						<Route from='/courses' component={Courses}/>
						<Route from='/users' component={Users}/>
						<Redirect from ='/all-courses' to='/courses' />
						<Route render={() => <h1>404</h1>} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
