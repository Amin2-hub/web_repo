//ajax.js
//Asyncronous Javascript And XML;
//비동기 vs 동기
import { table } from './ajaxModule.js'

//동기방식
let friends = [];

friends.push('홍길동');

friends.push('김길동');

friends.push('최길동');

console.log(friends);

//비동기방식
friends = [];
setTimeout(function(){
    friends.push('홍길동');
},1000);  //지연함수 1초 뒤 실행    코드를 순차적으로 실행후 스택영역에 저장 먼저끝나는것부터 저장됨
setTimeout(function(){
    friends.push('김길동');
},500);  //0.5초뒤 실행
setTimeout(function(){
    friends.push('최길동');
},2000);  //2초뒤 실행

console.log(friends);




//보류
let newMember = {mid: "M009", pass: "9999", name: "민식이", phone: "010-9999-9999"}
//newMember값을 활용해서 tbody="list" 추가.

let xhtp = new XMLHttpRequest();
xhtp.open('get', '../MemberListServ2'); //서버의 세팅정보  
xhtp.send();
//xhtp.onload = loadXML;
xhtp.onload = loadJson;

function loadJson(){
	console.log(xhtp.responseText);
	let result = JSON.parse(xhtp.responseText);
	console.log(result);
	let titles = ["회원번호", "비번", "이름", "연락처"];
	let dataAry = [];
	result.forEach(member => {
		dataAry.push({mid: member.mid,  pass: member.pass,  name: member.name,  phone: member.phone})
	})
	result = table.makeTable(titles, dataAry);
	document.getElementById('show').innerHTML = result;
}



function loadXML(){
    //console.log(xhtp);
    //console.log(xhtp.responseXML);
    let doc = xhtp.responseXML;
    let records = doc.getElementsByTagName('record');
    console.log(records);
    let titles = ["회원번호", "비번", "이름", "연락처"];
    let dataAry = [];
    for(let record of records){
		let obj = {
			mid : record.children[0].textContent,  // mid.
			pass : record.children[1].textContent,  // pass.
			name : record.children[2].textContent,  // name.
			phone : record.children[3].textContent
			}
			dataAry.push(obj);  
	}
    let result = table.makeTable(titles, dataAry);
    console.log(result);
    // let addResult = table.makeTr(newMember);
    let tr = '<tr><td>' + newMember.mid + '</td>' 
    		+ '<td>' + newMember.pass + '</td>' 
    		+ '<td>' + newMember.name + '</td>' 
    		+ '<td>' + newMember.phone + '</td></tr>';
    
    document.getElementById('show').innerHTML += result;
	// document.getElementById('list').innerHTML += addResult;
	document.getElementById('list').innerHTML += tr;
}//end of onload

