console.log('function2입니다');


//Member member = new Member();
const member = {
    name : "홍길동",
    age : 18,
    height : 178.9,
    showInfo : function() {
        return `이름은 ${this.name}이고 나이는 ${this.age} 입니다`;
    }
}
member.showInfo();
const member1 = {
    name : "이길동",
    age : 19,
    height : 180.9,
    showInfo : function() {
        return `이름은 ${this.name}이고 나이는 ${this.age} 입니다`;
    }
}
const member2 = {
    name : "고길동",
    age : 33,
    height : 171.4,
    showInfo : function() {
        return `이름은 ${this.name}이고 나이는 ${this.age} 입니다 `;
    }
}

const members = [member, member1, member2];

let show = document.getElementById("show");  
// table>thead>tr>th*2 + tbody>tr>td*2엔터치면 구조가 자동완성됨
let str = "";
//코드작성

str += '<table border=1><tbody>';
members.forEach(function(member, index, ary){
    str += makeTr(member);
})
str += '</tbody></table>';

show.innerHTML = str;  //table>tbody>(tr>td*4)*3

function makeTr(member={name, age, height, showInfo}) {
    let html = '';
    html += '<tr>';
    html += '<td>' + member.name + '</td>';
    html += '<td>' + member.age + '</td>';
    html += '<td>' + member.height + '</td>';
    html += '<td>' + member.showInfo() + '</td>';
    html += '</tr>';
    return html;
}

// console.log(str);