//calendar => table
//makeHead();
//makeBody();
//makeCalendar();
// function makeHead(month) {
//     let day = ['일', '월', '화', '수', '목', '금', '토'];

//     let head = '';
//     head += '<thead><h3>' + month + '월</h3><tr>';
//     for (let prop in day) {
//         head += '<th>' + day[prop] + '</th>';
//     }
//     head += '</tr></thead>';
//     return head;
// }

// function makeBody(month) {
//     let dates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     let cbody = '';

//     cbody += '<tbody>';
//     let sum = 1;
//     console.log(sum);
//     for (let i = 1; i <= (dates[month - 1] / 7 + 1); i++) {
//         cbody += '<tr>';
//         for (let j = 1; j <= 7; j++) {
//             if(sum <= dates[month-1]){
//                 cbody += '<td>' + sum + '</td>';
//                 sum++;
//             }
//         }
//         cbody += '</tr>';
//     }
//     cbody += '</tbody>';

//     return cbody;
// }

// function makeCalendar(month) {
//     let cal = '';
//     cal += '<table border="1">';
//     cal += makeHead(month);
//     cal += makeBody(month);
//     cal += '</table>';
//     return cal;
// }

// document.getElementById('show').innerHTML += makeCalendar(10);

//교수님하신거
const today = new Date();
console.log(today.getDate());
function makeHead(){
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    days.reduce((acc, day) => {
    return acc + '<th>' + day + '</th>';
}, '<thead><tr>')
}

function makeBody(){
    let tbody = '</tr></thead><tbody><tr>';
    for(let i = 1; i<=31; i++){
        //오늘날짜는 백그라운드 노란색, 폰트:bold;
        let styles = '';
        if(i%7 ==1){ //일요일일때
            styles = 'background: red; color:yellow;';
            if(i == today.getDate()){
                styles += 'font-weight:bolder'
            }
            tbody += '<td style ="' + styles + '" align = "right">' + i + '</td>';
        }
        else{
            if(i == today.getDate()){
                styles += 'font-weight:bolder; background: yellow;'
            }
            tbody += '<td style = "'+ styles + '" align = "right">' + i + '</td>';
        }
        if(i%7 ==0){
            tbody += '</tr><tr>';
        }
        
    }
    tbody += '</tr></tbody>';
    return tbody;
}

function makeCalendar() {
        let html = '';
        html += '<table border="1">';
        html += makeHead();
        html += makeBody();
        html += '</table>';
        document.getElementById('show').innerHTML += html;
    }

makeCalendar();


