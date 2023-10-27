//array4.js

const json = ` 
[{"id":1,"first_name":"Callie","email":"curquhart0@opera.com"},
{"id":2,"first_name":"Sari","email":"sbollins1@lulu.com"},
{"id":8,"first_name":"Killy","email":"kgordon7@vk.com"},
{"id":9,"first_name":"Maggy","email":"msouthgate8@bloomberg.com"},
{"id":10,"first_name":"Celisse","email":"coldrey9@technorati.com"}]
`;  // json -< object.JSON.parse()사용
let members = JSON.parse(json);

// let ary = members.find(function(item, idx, ary){
//     console.log(item, idx, ary);
//     return false;
// })
//1)find 
let result = members.find(function(item, idx, ary){
    return item.id == 2;
})
console.log(result);

result = members.find(function(item, idx, ary){
    return item.id > 5;  //조건에 맞는 첫번째 항을 리턴
})
console.log(result);

result = members.find(function(item, idx, ary){
    if(item.id>5){
        return true;
    }
    return false;  
});
console.log(result);
console.clear();
//2)filter
result = members.filter(function(item, idx, ary){  //조건에 맞는 값 다 찾아줌
    console.log(item, idx, ary);
    return true;
});
console.log("filter") 
console.log(result);

result = members.filter(function(item, idx, ary){
    return item.id > 5;
});
console.log(result);

// result = members.filter(function(item, idx, ary){
//     return idx >= 1 && idx <3; //true값을 반환
// });
// console.log(result);
//화살표 함수로 변경
result = members.filter((item, idx) => { return idx >= 1 && idx <3;});
console.log("화살표 함수");
console.log(result);

//3)reduce 함수로 변경
result = members.reduce((acc, item, idx) => {
    if(idx >= 1 && idx <3){
        acc.push(item);
    }
    return acc;
}, [])
console.log("reduce");
console.log(result);

console.clear();
//4) some(하나만 만족), every(모든걸 만족) => true/false
result = members.some((member) => {
    console.log(member);
    return member.first_name.length > 5;
})
console.log(result);

result = members.every((member) => {
    console.log(member);
    return member.first_name.length > 5;
})
console.log(result);

// *) map : A -> B
result = members.map(member => {
    let obj = {id: member.id, name: member.first_name, email: member.email, grade: 'C'};
    return obj;    
})
console.log(result);