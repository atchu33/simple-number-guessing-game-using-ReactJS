import React from "react";

function Result({secretNum,term}){
    let result;
    if(term>secretNum){
        result="higher";
    }else if(term<secretNum){
        result="lower";
    }else if(term==secretNum){
        result="yipee!correct";
    }else{
        result="enter valid number"
    }
    return<h1>you guessed: {result}</h1>
}

export default Result;