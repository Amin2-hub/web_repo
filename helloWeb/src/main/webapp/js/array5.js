//array5.js
//배열의 정렬, 역순정렬
const arr1 = ['펭수', '라이언', '어피치', '콘', '무지'];
console.log(arr1); 
arr1.sort();
console.log(arr1);  //배열자체를 변경시킴

const arr2 = [4, 8, 1, 12, 24, 9];
console.log(arr2);
arr2.sort(function(a,b){
    if(a < b){
        return -1;
    }else{
        return 1;
    }
});
console.log(arr2);

const json = ` 
[{"id":1,"first_name":"Callie","email":"curquhart0@opera.com"},
{"id":2,"first_name":"Sari","email":"sbollins1@lulu.com"},
{"id":8,"first_name":"Killy","email":"kgordon7@vk.com"},
{"id":9,"first_name":"Maggy","email":"msouthgate8@bloomberg.com"},
{"id":10,"first_name":"Celisse","email":"coldrey9@technorati.com"}]
`;  // json -< object.JSON.parse()사용
let members = JSON.parse(json);
members.sort(function(a,b){
    if(a.first_name <b.first_name)
        return -1;
    else
        return 1;
}).reverse();
console.log(members);