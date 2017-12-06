import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {optionSelect} from '../actions/optionSelect';

class Result extends React.Component {
  constructor(props){
    super(props);
  }

  loadResult(){
    console.clear();
    console.log(this);
    let score = 0;
    let correctAnswers = 0;
    this.props.questions.map(function(elem, index) {
      console.log(elem.submittedAnswer);
        if((parseInt(elem.submittedAnswer,10) == parseInt(elem.correctAnswer,10))){
          correctAnswers = correctAnswers + 1;
          score = score + 3;
        } else{
          correctAnswers = correctAnswers;
          score = score - 1;
        }
    })

    return(
      <div>
        <ul>
          <li>Correct Answers: {correctAnswers}</li>
          <li>Score: {score}</li>
        </ul>
      </div>
    )
  }

  render() {
        return (
            <div className="class-name">
                {this.loadResult()}
            </div>
        );
    }


}

function mapStateToProps(state){
  return(
        {
            questions: state.submittedAns
        }
  )
}

function mapDispatchToProps (dispatch, ownProps) {
   return bindActionCreators({optionSelect:optionSelect}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
