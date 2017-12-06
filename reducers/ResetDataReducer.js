import quesAndAns from './QuestionsReducer';
let initialState = quesAndAns();

export default function(state= initialState,action){
  switch(action.type){
  case "QUIZDATA_RESET":    
    console.log("inside the quizdata reset reducer",action.payload);
    break;
  default:
    return state;
  }
  return state;
}
