import React from 'react';
import{BrowserRouter as Router, Route, hashHistory} from 'react-router-dom';
//import Routes from './routes.js';
//import {Link} from 'react-router';
import LandingPage from './components/LandingPage';
import Question from './components/Question';
import Result from './components/Result';
import { Provider } from 'react-redux';

class App extends React.Component {

	render(){
		console.log(this.props);
		return(
			<Router history={hashHistory}>
				<div className="text">
					<Route exact path="/" component={LandingPage}/>
					<Route path="/quiz/:id" component={Question}/>
					<Route path="/results" component={Result}/>
				</div>
			</Router>
		);
	}
}

export default App;
