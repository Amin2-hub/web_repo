//array3.js

let pos = "Hello, World".indexOf(",");
console.log(pos);

let names = ["콘", "무지", "라이언", "어피치"];
pos = names.indexOf("무시");
if(pos == -1){
    console.log("없는 이름입니다");
}else{
    console.log("무지는 " + (pos+1) + "번째 위치에 있습니다.");
}

//{name : "", age : 20}
let members = [
    {name : "김민식", age : 22},
    {name : "최민식", age : 23},
    {name : "김우현", age : 26}
];

let search = "민식";
let count = 0;
members.forEach((val, i) => {
    if(val.name.indexOf(search) != -1){
        console.log(val);
        count++;
    }
});
if(count >=1 ){
    console.log(`${search}라는 이름을 가진사람은 ${count}명 있습니다.`);
}
