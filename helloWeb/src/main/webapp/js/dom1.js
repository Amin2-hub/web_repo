//dom1.js

const fruits = ['수박', '사과', '복숭아', '포도'];

//#show>ul>li:수박 + li:사과 +....
//createElement, appendChild, innerHTML 속성활용
// let li1 = document.createElement('li');
// let li2 = document.createElement('li');
// let li3 = document.createElement('li');
// let li4 = document.createElement('li');
// li1.innerHTML = fruits[0];
// li2.innerHTML = fruits[1];
// li3.innerHTML = fruits[2];
// li4.innerHTML = fruits[3];
// let ul = document.createElement('ul');
// document.getElementById('show').appendChild(ul);
// document.querySelector('ul').appendChild(li1);
// document.querySelector('ul').appendChild(li2);
// document.querySelector('ul').appendChild(li3);
// document.querySelector('ul').appendChild(li4);

const ul = document.createElement('ul');
fruits.forEach(fruit => {
    const li = document.createElement('li');;
    li.innerHTML = fruit;
    ul.appendChild(li);
})
document.getElementById('show').appendChild(ul);

