import quesAndAns from './QuestionsReducer';

console.log(quesAndAns());

let initialState = quesAndAns();

export default function(state=initialState, action) {
    switch(action.type){

        case "OPTION_SELECT":
          console.log(action);
        state[(parseInt(action.payload.queNum) - 1)].submittedAnswer = action.payload.value;
        return state;
        break;
    }
    return state;
}
