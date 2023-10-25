//object.js
console.log('object start...');

let obj1 = {
	name : 'Hong',
	age : 20
}

let obj2 = obj1; //obj1의 주소값을 참조! 같은객체임
console.log(obj1);
obj2.age = 22;
console.log(obj1);

let obj3 = { ...obj1}; //obj1의값을 가지고 새로운객체를 만든것  복사!
obj3.age = 24;
console.log(obj1);

//클래스
class Member {
	constructor(name, age, height){
		this.name = name;
		this.age = age;
		this.height = height;
	}
	setWeight(weight){
		this.weight = weight;
	}
	getWeight(){
		return this.weight;
	}
	showInfo(){
		return `이름은 ${this.name}, 나이는 ${this.age}세 입니다.`;
	}
}

const mem1 = new Member('홍길동', 20, 156.7);
console.log(mem1.showInfo());
mem1.setWeight(58.5);
console.log('홍길동의 몸무게는 ', mem1.getWeight(),'kg입니다.');