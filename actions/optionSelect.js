export function optionSelect(answers) {
    //console.log("you selected something", quizData);
    return (dispatch) => {
        dispatch({
          "type":"OPTION_SELECT",
          "payload":answers
        })
    }
}
