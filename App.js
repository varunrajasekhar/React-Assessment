import React from 'react';
import{HashRouter as Router, Route} from 'react-router-dom';
//import Routes from './routes.js';
//import {Link} from 'react-router';
import LandingPage from './components/LandingPage';
import Question from './components/Question';
import Result from './components/Result';
import { Provider } from 'react-redux';

class App extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return(			
			<Router>
				<div className="text">
					<Route exact path="/" component={LandingPage}/>
					<Route exact path="/quiz/:id" component={Question}/>
					<Route path="/results" component={Result}/>
				</div>
			</Router>			
		);
	}
}

export default App;


