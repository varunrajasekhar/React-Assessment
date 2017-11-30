import React from 'react';
import PropTypes from 'prop-types'; // ES6
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName:''
        };

       // console.log(this);  

        this.beginClick = this.beginClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    beginClick = () => {
        console.log(this.props);

        this.props.history.push('/quiz/1');
        //console.log(this);
        
        //console.log(this.state);
    }

    onInputChange= (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
       
    }

    render() {        
        return (
            <div className="gi">           
                <h1 className="subheading-2"> Welcome to React Quiz!</h1>
                <div className="g g--full">
                    <p className="txt-l">
                        Please click the button below to begin Quiz!!
                    </p>
                    <div className="gi--1-3">
                        <div className="g g--full">
                            <div className="gi gi--1-1">
                                <form>
                                    <label htmlFor="userName" className="gi--1-1">Name:</label>
                                    <input type="text" name="userName" onChange={this.onInputChange} className="margin-bottom-one"/>
                                    <label htmlFor="userName" className="gi--1-1">Password:</label>
                                    <input type="text" name="password" onChange={this.onInputChange} className="margin-bottom-one"/>
                                    <label htmlFor="userName" className="gi--1-1">Confirm Password:</label>
                                    <input type="text" name="confirmPassword" onChange={this.onInputChange} className=""/>
                                </form>
                            </div>
                        </div>
                    </div>    
                    <div className="gi gi--1-1">
                        <input className="btn" 
                        type="button" value="Begin Quiz"
                        onClick={this.beginClick}
                        />
                    </div>
                </div>
            </div>               
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps)(LandingPage);

