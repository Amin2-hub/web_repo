/**
 * js/student.js
 */

//페이지 로딩되면 바로 실행.
fetch('../studentList.do')
	.then(resolve => resolve.json())
	.then(result => {
		console.log(result);
		let tbody = document.querySelector('#list');
		result.forEach(student => {
			tbody.append(makeTr(student));
		})
	})
	.catch(err => console.log('error=> ', err));

//등록버튼 이벤트
document.querySelector('#addBtn').addEventListener('click', addCallback);

//수정버튼 이벤트. 서블릿(db변경) => 화면변경
document.querySelector('#modBtn').addEventListener('click', modifyCallback);


//callback함수
function addCallback(e) {
	//학생아이디입력값
	let sid = document.querySelector('input[name=sid]').value;
	let sname = document.querySelector('#sname').value;
	let pass = document.querySelector('input[name=spass]').value;
	let dept = document.querySelector('select[name=sdept]').value;
	let birth = document.querySelector('input[name=sbirth]').value;

	let param = `id=${sid}&name=${sname}&password=${pass}&dept=${dept}&birth=${birth}`;
	console.log(param);
	// ajax 호출
	//get방식 : default임 url주소에 다 보여짐 담을수있는 값에 제한이 있음
	//post방식: 파라미터표현x 값의제한x, 다만 content-type 지정해줘야됨
	// fetch('../addStudent.do?' + param)  
	fetch('../addStudent.do?', {
		method: 'post',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: param
	}).then(resolve => resolve.json())
		.then(result => {
			if (result.retCode == 'OK') {
				alert('성공');
				let tr = makeTr({ studentId: sid, studentName: sname, studentBirthday: birth });
				document.querySelector('#list').append(tr);
			} else {
				alert('실패');

			}
		})
		.catch(err => console.log('error=> ', err));
}//end addCallback

function modifyCallback(e) {
	let sid = document.querySelector('.modal-body input[name=id]').value;
	let sname = document.querySelector('.modal-body input[name=name]').value;
	let pass = document.querySelector('.modal-body input[name=pass]').value;
	//let dept = document.querySelector('input[name=dept]').value;
	let birth = document.querySelector('.modal-body input[name=birth]').value;
	let param = `id=${sid}&name=${sname}&password=${pass}&birth=${birth}`;
	console.log(param);
	fetch('../editStudent.do?', {
		method: 'post',
		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		body: param
	})
		.then(resolve => resolve.json())
		.then(result => {
			console.log('결과' + result);

		//	if (result.retCode == 'OK') {
		//		alert('수정 완료');
		//		//result.vo.studentId;
		//		let targetTr = document.querySelector('tr[data-sid='+result.vo.studentId+']');
		//		let newTr = makeTr(result.vo);
		//		let parentElem = document.querySelector('#list');
		//		parentElem.replaceChild(newTr, targetTr);
		//		document.getElementById("myModal").style.display = 'none';
		
			if(result.retCode == 'OK'){
				let trTags = document.getElementById('list').querySelectorAll('tr');
				trTags.forEach(obj => {
					if(obj.chileNodes[0].innerText ==id){
						obj.chileNodes[1].innerHTML == name;
						obj.chileNodes[2].innerHTML == birth;
					}
				})
				
			
			} else {
				alert('수정 실패');
			}
		})
		.catch(err => console.log('error: ', err));
}//end modifyCallback

//tr생성함수
function makeTr(obj) {
	let showFields = ['studentId', 'studentName', 'studentBirthday'];
	let tr = document.createElement('tr');
	tr.setAttribute('data-sid', obj.studentId);
	tr.addEventListener('dblclick', showModal);
	for (let prop of showFields) {
		let td = document.createElement('td');
		td.innerHTML = obj[prop];
		tr.append(td);
	}
	//삭제버튼
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.setAttribute('data-sid', obj.studentId);
	btn.innerHTML = '삭제';
	btn.addEventListener('click', function(e) {
		//ajax호출. -> 서블릿실행.
		fetch('../delStudent.do?sid=' + obj.studentId)
			.then(resolve => resolve.json())
			.then(result => {
				console.log(result);
				if (result.retCode == 'OK') {
					alert('삭제성공');
					tr.remove();
				} else {
					alert('삭제실패');

				}
			})
			.catch(err => console.log('error: ', err));
	})
	td.append(btn);
	tr.append(td);
	return tr;
}//end of makeTr.

//모달보여주기
function showModal(e) {
	console.log(e.target, this);
	let id = this.children[0].innerHTML;
	//let id = this.dataset.sid; //'data-sid' : std1
	console.log(id);
	
	var modal = document.getElementById("myModal");
	modal.style.display = "block";

	fetch('../getStudent.do?', {
		method: 'post',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: 'id='+id
	})
		.then(resolve => resolve.json())
		.then(result => {
			//console.log(result.id);
			//console.log(result.studentId);
			//let data = { id: result.studentId, name: result.studentName, pass: result.studentPw, dept: result.studentDept, birth: result.studentBirthday }
			document.querySelector('h2').innerHTML = result.studentId;
			document.querySelector('input[name=pass]').value = result.studentPw;
			document.querySelector('input[name=name]').value = result.studentName;
			document.querySelector('input[name=birth]').value = result.studentBirthday;
			//console.log(data.id, data.pass, data.name, data.birth);

		})
		.catch(err => console.log('error: ', err));

	//let data = { id: "std1", name: "홍길동", pass: "1234", dept: "컴퓨터공학과", birth: "2023-11-02" }
	//document.querySelector('h2').innerHTML = data.name;
	//document.querySelector('input[name=pass]').value = data.pass;
	//document.querySelector('input[name=name]').value = data.name;
	//document.querySelector('input[name=birth]').value = data.birth;
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}

}

