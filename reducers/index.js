import {combineReducers} from 'redux';
import QuestionReducer from './QuestionsReducer';
import OptionSelectReducer from './OptionSelectReducer';

const allReducers = combineReducers({
    questions: QuestionReducer,
    submittedAns: OptionSelectReducer
});

//console.log("inside all reducers");

const rootReducer = (state,action) => {
  if(action.type == "QUIZDATA_RESET"){
      state.submittedAns = state.questions
      confirm('do you want to leave the quiz');
    return state;
  }
  return allReducers(state,action);
}

export default rootReducer;
