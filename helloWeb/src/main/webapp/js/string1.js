//string1.js

let str1 = "Hello"; //기본데이터 타입.
let str2 = new String("Hello"); //객체

console.log(typeof str1, typeof str2);
console.log(str1==str2); // == : 자바는 값만 비교
console.log(str1===str2); // === : 값과 타입 비교

console.log(str1.toUpperCase());

let result = "공백제거합니다.     ".trim();
console.log(result, '  문자갯수:', result.length);

//trim(), trimStart(), trimEnd()
//replace(), split(), slice(), substring(), substr()
//toString(), indexof(), lastIndexOf(), cahrAt(), includes()
//concat()

result = "Hello, World".replace('World','java');
console.log(result);
result = "Hello, World, Nice, World".replace(',','.');
console.log(result);
result = "Hello, World, Nice, World".replace(/,/g, '.');
console.log(result);
result = "Hello, World, Nice, World".replace(/\s/g, '');
console.log(result);