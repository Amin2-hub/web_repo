//calendarObj.js

const cal = {
    
    makeHead() {
        let day = ['일', '월', '화', '수', '목', '금', '토'];

            let head = '';
            head += '<thead><tr>';
            for (let prop in day) {
                head += '<th>' + day[prop] + '</th>';
            }
            head += '</tr></thead>';
            return head;
    },
    makeBody() {
        const today = new Date();
        let tbody = '</tr></thead><tbody><tr>';
        for (let i = 1; i <= 31; i++) {
            let styles = '';
            if (i % 7 == 1) { 
                styles = 'background: red; color:yellow;';
                if (i == today.getDate()) {
                    styles += 'font-weight:bolder'
                }
                tbody += '<td style ="' + styles + '" align = "right">' + i + '</td>';
            }else if(i%7==0){
                styles = 'background: blue; color:white;';
                if (i == today.getDate()) {
                    styles += 'font-weight:bolder'
                }
                tbody += '<td style ="' + styles + '" align = "right">' + i + '</td>';
            }
             else {
                if (i == today.getDate()) {
                    styles += 'font-weight:bolder; background: yellow;'
                }
                tbody += '<td style = "' + styles + '" align = "right">' + i + '</td>';
            }
            if (i % 7 == 0) {
                tbody += '</tr><tr>';
            }

        }
        tbody += '</tr></tbody>';
        return tbody;
    },
    makeCalendar() {
        let html = '';
        html += '<table border="1">';
        html += this.makeHead();
        html += this.makeBody();
        html += '</table>';
        return html;
    },
    showCalendar() {
        document.getElementById('show').innerHTML += this.makeCalendar();
    }
}

cal.showCalendar();

export {cal};