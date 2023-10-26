//Map,Set
const map = new Map();
map.set("홍길동", 80);
map.set("김길동", 85);
map.set("김길동", 90);
// map.delete("김길동");
const refval = [12];
map.set(refval, 88);
console.log(map.get(refval));

console.log(map.get("홍길동"));
for(let ent of map.entries()){ //entries() : 키와 값을 배열타입으로 반환해주는 함수
    console.log('이름 : ',ent[0], '점수 : ', ent[1]);

}

map.forEach(function(val, key, map){
    if(val > 80){
        console.log(val, key, map);
    }
    if(key == "홍길동"){
        console.log(val, key, map);
    }
})

//맵 <-> 배열
const ary = [['프로도', 3], ['라이언', 5], ['어치피', 4]];
const fmap = new Map(ary); //Map(생성자:배열);

const entries = fmap.entries();
console.log(entries);
for(let ent of fmap.entries()){ 
    console.log('키 : ', ent[0], ' 값 : ', ent[1]);
}

console.log(Array.from(fmap)); //맵->배열로 변화
console.clear;
//Set : 중복값 허용x
const set1 = new Set();
set1.add("라이언");
set1.add("프로도");
set1.add("어피치");
set1.add(["어피치", 4]);
set1.add(["어피치", 4]);

console.log(set1.size);

set1.forEach(function(val, item, set){
    console.log(val, item, set);
})

//셋 <-> 배열
const setAry = ['라이언', '프로도', '어피치', '무지', '무지'];
const set2 = new Set(setAry);
console.log(set2.size);

console.log(Array.from(set2));