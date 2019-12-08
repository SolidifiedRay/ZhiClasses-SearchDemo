import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header.js';
import MainSearchBar from './components/MainSearchBar/MainSearchBar.js';
import Search from './routes/Search/Search.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
	render(){
		return (
			<Router>
				<div>
				  	<Header/>
				  	<Switch>
				  			<Route path='/' exact component={MainSearchBar} />
				  			<Route path='/search' component={Search} />
				  	</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
