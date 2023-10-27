//array1.js
const arr1 = []; //자바스크립트에서는 어떠한유형이든 상관없이 배열에 담을수 있음
arr1.push(10);
arr1.push('ten');
arr1.push({name: "Hong", age: 20});

arr1.unshift(20);  //배열의 제일 앞에 추가

console.log('크기 : ' + arr1.length);
arr1.length = 5; //배열의 크기 변경 줄이면 마지막 데이터 삭제, 늘리면 undefined

arr1.pop();  //뒤에서 부터 제거    arr1.shift() => 앞에서 부터 제거

arr1.splice(1, 0, 30);  //추가 삭제 수정   splice(시작번호, 삭제개수, 추가요소)
arr1.splice(1, 0, 50, 60); //여러개의 데이터도 한번에 추가 가능

for (let arr of arr1){
    console.log(arr);
}
