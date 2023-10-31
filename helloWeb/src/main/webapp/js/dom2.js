//dom2.js

// #show > table > tbody > tr > td:사과 + td:1000
const fruits = [
    {name: "사과", price: 1000, farmer: '홍길동'},
    {name: "복숭아", price: 1500, farmer: '김민서'},
    {name: "포도", price: 2000, farmer: '박현아'},
    {name: "수박", price: 3000, farmer: '우민혁'}
]

// const table = document.createElement('table','tbody');

// for(i=0; i<fruits.length; i++){
//     const tr = document.createElement('tr');
//     const td = document.createElement('td');
//     td.innerHTML = fruits[i].name;
//     tr.appendChild(td);
//     table.appendChild(tr);
//     td.innerHTML = fruits[i].price;
//     tr.appendChild(td);
//     table.appendChild(tr);
// }
// document.getElementById('show').appendChild(table);


const tbl = document.createElement('table');
const tbd = document.createElement('tbody');
tbl.setAttribute('border', '1');
fruits.forEach(fruit => {
    const tr = document.createElement('tr');
    for(let prop in fruit){
        const td1 = document.createElement('td');
        td1.innerHTML = fruit[prop];
        tr.appendChild(td1);
    }
    tbd.appendChild(tr);
})

tbl.appendChild(tbd);
document.getElementById('show').appendChild(tbl);