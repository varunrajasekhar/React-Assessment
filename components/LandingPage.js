import React from 'react';
import PropTypes from 'prop-types'; // ES6
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {resetData} from '../actions/resetData';

class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.beginClick = this.beginClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.quizDataReset = this.quizDataReset.bind(this);
        console.log(this);
    }

    componentWillMount() {
      this.quizDataReset();
    }

    beginClick() {
        this.props.history.push('/quiz/1');
    }

    onInputChange() {
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    quizDataReset(){
      this.props.resetQuizData();
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
                                    <label htmlFor="userName" className="gi--1-1">Email:</label>
                                    <input type="text" name="password" onChange={this.onInputChange} className="margin-bottom-one"/>
                                    <label htmlFor="userName" className="gi--1-1">Phone Number:</label>
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

function mapDispatchToProps (dispatch, ownProps) {
  //console.log(dispatch);
  //console.log(ownProps);
   return bindActionCreators({resetQuizData:resetData},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(LandingPage);
