//calendar => table
//makeHead();
//makeBody();
//makeCalendar();


function makeHead(month) {
    let day = ['일', '월', '화', '수', '목', '금', '토'];

    let head = '';
    head += '<thead><h3>' + month + '월</h3><tr>';
    for (let prop in day) {
        head += '<th>' + day[prop] + '</th>';
    }
    head += '</tr></thead>';
    return head;
}

function makeBody(month) {
    let dates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let cbody = '';

    cbody += '<tbody>';
    let sum = 1;
    console.log(sum);
    for (let i = 1; i <= (dates[month - 1] / 7 + 1); i++) {
        cbody += '<tr>';
        for (let j = 1; j <= 7; j++) {
            if(sum <= dates[month-1]){
                cbody += '<td>' + sum + '</td>';
                sum++;
            }
        }
        cbody += '</tr>';
    }
    cbody += '</tbody>';

    return cbody;
}

function makeCalendar(month) {
    let cal = '';
    cal += '<table border="1">';
    cal += makeHead(month);
    cal += makeBody(month);
    console.log(makeBody(month));
    cal += '</table>';
    return cal;
}

document.getElementById('show').innerHTML += makeCalendar(10);




