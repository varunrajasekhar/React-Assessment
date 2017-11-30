export const optionSelect = (quizData) => {
    console.log("you selected something", quizData);
    return {
        "type":"OPTION_SELECT",
        "payload":quizData
    }
}