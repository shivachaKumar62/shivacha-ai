import React from 'react'

const ConvertTime = ({datetime}) => {
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }
  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("-");
  }
  let numOfDaata = formatDate(new Date(datetime));
  return numOfDaata;
  
}

export default ConvertTime
