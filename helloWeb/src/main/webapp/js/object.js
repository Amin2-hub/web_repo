//object.js
console.log('object start...');

let obj1 = {
	name: 'Hong',
	age: 20
}

let obj2 = obj1; //obj1의 주소값을 참조! 같은객체임
console.log(obj1);
obj2.age = 22;
console.log(obj1);

let obj3 = { ...obj1 }; //obj1의값을 가지고 새로운객체를 만든것  복사!
obj3.age = 24;
console.log(obj1);

//클래스
class Member {

	constructor(name, age, height) {
		this.name = name;
		this.age = age;
		this.height = height;
	}
	setWeight(weight) {
		this.weight = weight;
	}
	getWeight() {
		return this.weight;
	}
	showInfo() {
		return `이름은 ${this.name}, 나이는 ${this.age}세 입니다.`;
	}
	//학생의 정보 : 학생번호, 이름, 영어점수, 수학점수
	makeTr(student = { sno, sname, engScore, mathScore }) {
		//tr>td*4  리턴
		let tr = '';
		tr += '<tr>';
		tr += '<td>' + student.sno + '</td>';
		tr += '<td>' + student.sname + '</td>';
		tr += '<td>' + student.engScore + '</td>';
		tr += '<td>' + student.mathScore + '</td>';
		tr += '</tr>';
		return tr;
	}
	makeHtml(studAry = []) { //배열을 받아와서 들어있는 학생 수 만큼 html을 만들어줌
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
	}
	showPage(dom) {
		//innerHtml 속성에 html 저장. 출력
		dom.innerHTML += this.html;
	}
}

const mem1 = new Member('홍길동', 20, 156.7);
console.log(mem1.showInfo());
mem1.setWeight(58.5);
console.log('홍길동의 몸무게는 ', mem1.getWeight(), 'kg입니다.');