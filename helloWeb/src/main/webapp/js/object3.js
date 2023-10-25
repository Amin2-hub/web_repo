//object3.js

const member = {
    name : '홍길동',
    age : 20,
    height : 123.4,
    showInfo : function(){
        return ``;
    },
    html: '',
    makeTr: function(student){
        let tr = '';
        tr +='<tr>'
		for(let prop in student){
            tr += '<td>' + student[prop] + '</td>';
        }
        tr +='<td><button id="delBtn" onclick="this.parentElement.parentElement.remove()">삭제</button></td>'
        tr +='</tr>'
		return tr;
    },
    makeHtml(studAry){
        //html생성. => this.makeTr(std);
		let table = '';
		// let obj = this;
		table += '<table border="1"><tbody>';

		table += studAry.reduce((acc, stud) => acc + this.makeTr(stud), '');

		// table += studAry.reduce(function (acc, stud) {
		// 	return acc + obj.makeTr(stud);
		// }, '');

		table += '</tbody></table>';
		this.html = table;
    },
    showPage(dom){
        dom.innerHTML += this.html;
    }
}

//객체의 속성. for ..in
for (let prop in member){
    // member.name/ member.age  또는 member['age']
    // console.log(prop);
    // console.log(member[prop]);
    // console.log(typeof member[prop]);
    if(typeof member[prop] != 'function'){
        console.log(member[prop]);
    }
}

const students = [
    { sno: '001', sname: "최해주", engScore: 80, mathScore: 85 },
    { sno: '002', sname: "김채민", engScore: 82, mathScore: 82 },
    { sno: '003', sname: "최다예", engScore: 84, mathScore: 88 }
];

member.makeHtml(students);
member.showPage(document.getElementById('show'));