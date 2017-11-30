import {combineReducers} from 'redux';
import QuestionReducer from './QuestionsReducer';
import OptionSelectReducer from './OptionSelectReducer';

const allReducers = combineReducers({
    questions: QuestionReducer,
    submittedAns: OptionSelectReducer
});

console.log("inside all reducers");

export default allReducers;
