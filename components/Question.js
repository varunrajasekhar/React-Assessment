import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import RadioButton from './RadioButton';
import {optionSelect} from '../actions/optionSelect';

class Question extends React.Component {

  constructor(props){
    super(props);
    this.prevQuestion = this.prevQuestion.bind(this);
    //this.loadQues = this.loadQues.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.optionSelection = this.optionSelection.bind(this);
  }

  loadQues(){
    const params = this.props.match.params;
    //console.log(this);
    let question = null;
    //console.log(this.props.questions.answers);
    question = this.props.questions.map((item, index) => {
        if (item.id === params.id)  {
            return (
                <div key={index}>
                    <p>{params.id+". "}{item.question}</p>
                    {this.loadAns(params.id, item.submittedAnswer,item.options)}
                </div>
            );
        }
    });
    return(
        <div>
          {question}
          <div className="right">
            <div style={{"display":"inline"}}>
              <input className="btn" type="button" name="previous_btn" value="Previous" onClick={this.prevQuestion}/>
            </div>
            <div style={{"display":"inline"}}>
              <input className="btn margin-left-one" type="button" name="next_btn" value="Next" onClick={this.nextQuestion}/>
            </div>
          </div>
        </div>
    );
  }

  loadAns(paramsId, submittedAns,options){
    console.log(this);
    let optionsHTML = null;
    optionsHTML = options.map((item, index) => {
        //console.log(item);
        const selected = index === parseInt(submittedAns);
        //console.log(selected);
        return(
          <li key={index}>
            <label>
              <input type="radio" name={"ques_"+paramsId} value={index} defaultChecked={selected} onChange={this.optionSelection}/>
              <span style={{"paddingLeft":"1em"}}>{item}</span>
            </label>
          </li>
        )
    });
    return(
      <ul style={{"listStyle":"none"}}>{optionsHTML}</ul>
    )
  }

  prevQuestion(){
      let oldId = this.props.match.params.id;

      let newId = parseInt(oldId,10)-1;

      if(newId < 1){
          this.props.history.push('/');
      }else if(newId == null && newId == NaN && newId == undefined){
          this.props.history.push("/");
      } else{
          this.props.history.push('/quiz/'+newId);
      }
  }

  nextQuestion = () => {
    let oldId = this.props.match.params.id;

    let newId = parseInt(oldId,10)+1;

      if(newId <= this.props.questions.length){
          this.props.history.push('/quiz/'+newId);
      }else if(newId == null && newId == NaN && newId == undefined){
          this.props.history.push("/");
      } else{
          this.props.history.push('/results');
      }
  }

  optionSelection = (e) =>{
    let queNum = e.target["name"].split("_")[1];
    let selectedOptions = {};
    selectedOptions.queNum = queNum;
    selectedOptions.value = e.target.value;
    this.props.optionSelect(selectedOptions);
    console.log(this);
 }

  render() {
      return (
          <div className="g g--full">
              <div>{this.loadQues()}</div>
          </div>
      );
  }
}


function mapStateToProps(state){
  console.log("inside question com  mapStateToProps",state);
    return(
        {
            questions: state.submittedAns
        }
    )
}

function mapDispatchToProps (dispatch, ownProps) {
   return bindActionCreators({optionSelect:optionSelect},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
