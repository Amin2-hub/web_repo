//array2.js : MOCK_DATA.json 파일의 데이터 활용
 //백틱으로 하면 줄바꿔도 하나의 문자열로 인식됨
const json = ` 
[{"id":1,"first_name":"Callie","email":"curquhart0@opera.com"},
{"id":2,"first_name":"Sari","email":"sbollins1@lulu.com"},
{"id":3,"first_name":"Ogdan","email":"omcilmurray2@is.gd"},
{"id":4,"first_name":"Ewell","email":"emccrohon3@opensource.org"},
{"id":5,"first_name":"Lemuel","email":"lgosdin4@vistaprint.com"},
{"id":6,"first_name":"Marcille","email":"mfrean5@sciencedirect.com"},
{"id":7,"first_name":"Crosby","email":"cglaisner6@nifty.com"},
{"id":8,"first_name":"Killy","email":"kgordon7@vk.com"},
{"id":9,"first_name":"Maggy","email":"msouthgate8@bloomberg.com"},
{"id":10,"first_name":"Celisse","email":"coldrey9@technorati.com"}]
`; // json -< object.JSON.parse()사용

let members = JSON.parse(json);
console.log(members);

let delMember = "Lemuel";

for(let i=0; i<members.length; i++){
    if(members[i].first_name == delMember){
        members.splice(i,1, {id: 5, first_name:"Jun", email : "wnstjd20@nate.com"});
    }
}
// members.forEach((member, i) => {
//     if(member.first_name == delMember){
//         members.splice(i,1);
//     }
// })


console.log(members);

// let inpVal = prompt("이름과 이메일을 입력하세요  예)홍길동, hong@email.com");
// console.log(inpVal);  //hong@email.com
// inpVal = inpVal.replace(" ", "");
// let check = inpVal.split(",");
// let nid = members[members.length-1].id +1;
// let newMember = {id : nid, first_name : check[0], email : check[1]};
//
// members.push(newMember);
// console.log(members);

console.table(members);
const dupAry = [["라이언", 5],["어피치", 3],["콘", 2],["무지", 4]];
console.log(dupAry);
console.table(dupAry);

