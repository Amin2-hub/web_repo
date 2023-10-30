const table = {

    makeHead(titleAray = ['도서코드', '도서명', '저자', '출판사', '가격', '삭제']) {
        let thead = "<thead><tr>";
        thead += "<th>□</th>"

        titleAray.forEach(title => {
            thead += "<th>" + title + "</th>";
        })
        thead += "</tr></thead>";
        return thead;
    },
    
    makeTr(member = {}) {
        let trTag = "<tr>";
        trTag += "<td>□</td>"
        for (let prop in member) {
            trTag += "<td>" + member[prop] + "</td>";
        }
        trTag += "<td><button>삭제</button></td>";
        trTag += "</tr>";
        return trTag;
    },

    makeBody(dataAry = []) {
        let tbody = "<tbody id = 'list'>";
        dataAry.forEach(item => {
            tbody += this.makeTr(item);
        })
        tbody += "</tbody>";
        return tbody;
    },
    
    makeTable(titleAray, dataAry) {
        let tableTag = "<table border = '1'>"
        tableTag += this.makeHead(titleAray) + this.makeBody(dataAry);
        tableTag += "</table>";
        return tableTag;
    }
}

export { table };