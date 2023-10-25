//fuction3.js

function Member(name, age, height) {
    console.log(this);
    this.name = name;
    this.age = age;
    this.height = height;
    this.showInfo = function () {
        return `이름은 ${this.name}이고 나이는 ${this.age}입니다.`;
    }
}
var myName = 'Hong';
const member = new Member('홍길동', 20, 123.4);
console.log(member);
console.log(member.showInfo());

// window.alert('ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ');

const members = [
    new Member('홍길동', 18, 123.3),
    new Member('김길동', 19, 174.3),
    new Member('박길동', 20, 146.3)
];

// let str = '';
// //함수:table 생성.
// function makeTable(memberAry = []) {
//     memberAry.forEach(funtion(member) {
//         let html = '';
//         html += '<tr>';
//         html += '<td>' + member.name + '</td>';
//         html += '<td>' + member.age + '</td>';
//         html += '<td>' + member.height + '</td>';
//         html += '<td>' + member.showInfo() + '</td>';
//         html += '</tr>';
//         return html;
//     })
// };
//     str += '<table><tbody>';
//     str += makeTable(members);
//     str += '</tbody></table>';
let str = '';
function makeTable(memberAry = []) {
    //html생성부분
    str += '<table border="1"><tbody>';
    memberAry.forEach(function(item){
        str += makeTr(item);
    })
    str += '</tbody></table>';
    document.getElementById('show').innerHTML = str;


    function makeTr(member ={}) {
        let html = '';
        html += '<tr>';
        html += '<td>' + member.name + '</td>';
        html += '<td>' + member.age + '</td>';
        html += '<td>' + member.height + '</td>';
        html += '<td>' + member.showInfo() + '</td>';
        html += '</tr>';
        return html;
    }
}
makeTable(members);
