//calendar => table
//makeHead();
//makeBody();
//makeCalendar();


function makeHead(month){
    let day = ['일', '월', '화', '수', '목', '금', '토'];

    let head = '';
    head += '<thead><h3>' + month + '월</h3><tr>';
    for(let prop in day){
        head += '<th>' + day[prop] + '</th>';
    }
    head += '</tr></thead>';
    return head;
}

function makeBody(){
    let dates = [];
    addDate = function(date){
        for(let i=1; i<=31; i++){
            this.dates.push(i);
            console.log(i);
        }
    }
}

function makeCalendar(month){
    let cal = '';
    cal += '<table border="1">';
    cal += makeHead(month);
    cal += '</table>';
    return cal;
}

document.getElementById('show').innerHTML += makeCalendar(10);
makeBody();



