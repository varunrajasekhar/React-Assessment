import quesAndAns from './QuestionsReducer';

//console.log("this is inside option select reducer",quesAndAns());

let initialState = quesAndAns();

export default function(state=initialState, action) {
    switch(action.type){

        case "OPTION_SELECT":
          //console.log(action);
          ///console.log(state);
        let updated = state[(parseInt(action.payload.queNum) - 1)].submittedAnswer = action.payload.value;
        //console.log("this is inside the optionselect reducer",state);
        return state;
        break;
    }

    return state;
}
