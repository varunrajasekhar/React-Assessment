//import ''

export function resetData(quizData) {    
    return (dispatch) => {
        dispatch({
          "type":"QUIZDATA_RESET",
          "payload":quizData
        })
    }
}
