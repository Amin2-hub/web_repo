//string3.js

let today =new Date(); // Date 내장객체.
today.getFullYear(); //년도를 가져옴
today.getMonth()+1; // 월
today.getDate(); // 일

today.setFullYear(2022);  //원하는 연.월.일.시간으로 셋팅
today.setMonth(0);
today.setDate(1); 
today.setHours(10); 

console.log(today.toString());
console.log(today.toLocaleDateString());

function dateFormat(today){
    // yyyy-MM-dd hh24:mm:ss
    return today.getFullYear() + '-' 
           + ('0' + (today.getMonth() + 1)).slice(-2) + '-' 
           + ('0' + today.getDate()).slice(-2) + ' ' 
           + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
}

console.log(dateFormat(today));
