// dom3.js
//table>(thead>tr>th*5)+(tbody>tr>td*5)*건수
import table from './domTable.js';

let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=MGS5iosKwQvQBwRZzm2K9LKYDNI5iaOSpCsrBQ2HqgL%2Fs2pYhUQAhV9Rq2pH8ImNAts9W5ZWpk893u%2BL3CdEjQ%3D%3D';
let titles = ['센터id', '센터명', '시도', '연락처', '주소'];
fetch(url)
    //function(resolve){return resolve.json()}
    .then(resolve => resolve.json())
    .then(fetchCallback)
    .catch(err => console.log('error=> ', err));



// fetch 호출되는함수 .callback함수
function fetchCallback(result) {
    let rawData = result.data; //원데이터
    console.log(result.data);
    let sidoAry = []; //sidoAry에 시, 도 정보를 중복된 값 제외
    rawData.forEach(center => {
        if (sidoAry.indexOf(center.sido) == -1) {
            sidoAry.push(center.sido);
        }
    })
    console.log(sidoAry);
    let sidoSel = document.querySelector('#sidoList');
    sidoAry.forEach(sido => {
        let opt = document.createElement('option');
        opt.innerHTML = sido;
        // opt.setAttribute('value', sido);

        sidoSel.append(opt);
    })
    //select태그에 change 이벤트 발생
    sidoSel.addEventListener('change', changeCallBack);
    function changeCallBack(e) {
        console.log(e.target.value);
        let searchSido = e.target.value;
        // 선택된 시도 값에 맞는 센터명만 출력.
        let filterAry = rawData.filter(center => center.sido == searchSido);
        console.log(filterAry);
        genTable(filterAry);
    }
    //genTable(rawData); //초기데이터로 화면출력.
    // let filterAry = rawData.filter(center => center.sido == '대전광역시');
    let filterAry = rawData.filter((center, idx) => idx < 5);
    genTable(rawData);
}

function genTable(rawData = [], page = 1) {  //초기페이지 : 1페이지
    //초기화.
    document.querySelector('#show').innerHTML = '';

    //한페이지에서 첫번째, 마지막 => 계산.
    let startNo = (page - 1) * 5 ;      //1,   11,   21,....
    let endNo = page * 5;               //10,  20,   30,....

    // 첫번째, 마지막페이지 => 계산.
    let totalCnt = rawData.length;
    let lastPage = Math.ceil(totalCnt / 5);
    let endPage = Math.ceil(page / 10) * 10;
    let beginPage = endPage - 9;
    let prevPage, nextPage = false;
    if(beginPage > 1){
        prevPage = true;
    }
    if(endPage < lastPage){
        nextPage = true;
    }
    if(endPage > lastPage){
        endPage = lastPage;
    }
    document.querySelector('.pagination').innerHTML ='';

    //이전페이지 여부
    if(prevPage){
        let aTag = document.createElement('a');
        aTag.setAttribute('href', '#');
        aTag.innerHTML = '&laquo';
        aTag.addEventListener('click', function(e){
            genTable(rawData,beginPage-1);
        })
        document.querySelector('.pagination').append(aTag);
    }

    

    //전체페이지
    for(let i=beginPage; i<=endPage; i++){
        let aTag = document.createElement('a');
        aTag.setAttribute('href', '#');
        aTag.innerHTML = i+' ';
        if(i == page){
            aTag.setAttribute('class', 'active');
        }

        aTag.addEventListener('click', function(e){
            genTable(rawData, i);

        })
        document.querySelector('.pagination').append(aTag);
    }

    //전체 rawData로 출력
    let tbl = document.createElement('table');
    tbl.setAttribute('border', '1');
    let thead = table.makeHead(titles); //헤더정보
    // let mapData = rawData.map(center => { //매핑정보 출력
    //     let newCenter = {
    //         id: center.id,
    //         centerName: center.centerName.replace('코로나19 ', ''),
    //         org: center.org,
    //         phoneNumber: center.phoneNumber,
    //         lat : center.lat,
    //         lng : center.lng
    //     }
    //     return newCenter;
    // });
    ////reduce()함수로 변경
    let mapData = rawData.reduce((acc, obj, idx) => {
        if(idx >= startNo && idx <endNo){
            let newObj = {
                centerId: obj.id,
                centerName: obj.centerName.replace('코로나19', ''),
                sido: obj.sido,
                phoneNumber: obj.phoneNumber,
                address : obj.address,
                lat: obj.lat,
                lng: obj.lng
            }
            acc.push(newObj);
        }
		return acc; 
	},[]);
    
    let tbody = table.makeBody(mapData); //rawDate = [{},{},{}...{}]
    tbl.append(thead, tbody);
    document.querySelector('#show').append(tbl);

    //다음페이지 여부
    if(nextPage){
        let aTag = document.createElement('a');
        aTag.setAttribute('href', '#');
        aTag.innerHTML = '&raquo';
        aTag.addEventListener('click', function(e){
            genTable(rawData,endPage+1);
        })
        document.querySelector('.pagination').append(aTag);
    }

    //tr클릭 이벤트 등록.
    let targetTr = document.querySelectorAll('tbody tr');
    console.log(targetTr);
    targetTr.forEach(tr => {
        tr.addEventListener('click', function(e){
            console.log(tr);
            // console.log(tr.children[4].innerHTML, tr.children[5].innerHTML);
            let lat = tr.dataset.lat;    //tr.children[4].innerHTML;
            let lng = tr.dataset.lng;   //tr.children[5].innerHTML;
            window.open('daumapi.html?x=' + lat + '&y=' + lng);

        })
    })
}