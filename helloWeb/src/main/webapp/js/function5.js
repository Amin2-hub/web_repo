//function5.js
//교재 70p
// function sum(a, b, c){
// 	return a + b + c;
// }
// console.log(sum(10));
//이경우 b,c는 undefiend가됨 -> 초기값 지정
let sum1 = 0;
[10, 20, 30].forEach(function(num){
	sum1 += num; // consumer타입 : 매개값을 소진, 반환값은 없는타입
})
console.log('forEach:', sum1);
sum1 = 0;
sum1 = [10, 20, 30].reduce(function(acc, item, idx, ary){  //reduce : 배열메소드
	// console.log(acc, item, idx);
	return acc+item; //function타입 : 매개값을 소진, 반환값을 생성.
}, 0);
//[].reduce(function(누적값(리턴되는값,처음에는 초기값이 들어옴), 배열의요소, 인덱스){}, 초기값); 
console.log('reduce:', sum1);

// function sum(a = 0, b = 0, ...args) { //parameters 매개변수
// 	console.log(args);
// 	// return a + b + args.reduce(function(acc,item){return acc+item}); 
// 	return a + b + args.reduce((acc,item) => acc+item); //화살표(arrow)함수로 변경
// }
// console.log(sum(10, 20, 30, 40, 50, 60)); //arguments 매개변수값  매개값이 초과될때?

function sum(a = 0, b = 0, ...args) {
	console.log(args);
	let result = 0;
	result = a + b;
	// args.forEach(function(num) {result += num});
	args.forEach(num => result += num);
	return result;
}
console.log(sum(10, 20, 30, 40, 50, 60));

//reduce 연습
const numAry = [4, 2, 6, 9, 1, 7];
let max = 0;
console.log('acc val max');
numAry.reduce(function(acc, val){
	console.log(acc,' ', val,' ', max);
	if(max > val){
		max = acc;
	}
	return val;
},0)


console.log('최대값 : ', max)
