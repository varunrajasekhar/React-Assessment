import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import RadioButton from './RadioButton';
import {optionSelect} from '../actions/optionSelect';

class Question extends React.Component {
    constructor(props){
        super(props);
        //console.log(optionSelect);
        this.prevQuestion = this.prevQuestion.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.optionSelection = this.optionSelection.bind(this);
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

    prevQuestion = () => {
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

    optionSelection = (e) =>{
        let queNum = e.target["name"].split("_")[1];
        let selectedOptions = {};
        selectedOptions.queNum = queNum;
        selectedOptions.value = e.target.value;
        this.props.optionSelect(selectedOptions);
    }

    componentWillMount(nextProps) {
      console.log("inside componentWillReceiveProps",this);
    }

    loadQuesAns = () => {
        let paramsId = this.props.match.params.id;
        //console.log("inside loadques",this);
        return (
            <div>
                <div>{this.props.questions[paramsId-1].question}</div>
                <div className="padding-top-one">
                    {this.props.questions[paramsId-1].options.map(
                        (option,key) => {
                            return(
                                <li key={key}>
                                    <label>
                                        <span>varun</span>
                                        <input type="radio" value={option} name={"que_"+paramsId} className="margin-right-half" onClick={this.optionSelection} defaultChecked={false}/>
                                        {option}
                                    </label>
                                </li>
                            )
                        }
                    )}
                </div>

                <div className="txt-r right" style={{"display":"inline-block"}}>
                    <div style={{"display":"inline-block"}}><input type="button" value="Previous" className="btn margin-right-half margin-left-half" onClick={this.prevQuestion}/></div>
                    <div style={{"display":"inline-block"}}><input type="button" value="Next" className="btn" onClick={this.nextQuestion}/></div>
                </div>
            </div>
        )
    }
    //loadOptions

    render() {
        return (
            <div className="g g--full">
                <div>{this.loadQuesAns()}</div>
            </div>
        );
    }
}


function mapStateToProps(state){
    return(
        {
            questions: state.questions
        }
    )
}

function mapDispatchToProps (dispatch, ownProps) {
   return bindActionCreators({optionSelect:optionSelect}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
