//string2.js

//1. 공백을 기준으로 가져온 단어의 크기가 5보다 큰 문장을 콘솔출력
const words = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque illum eveniet ipsam dolorum voluptas quisquam eos quis hic commodi officia blanditiis odit nesciunt illo placeat molestias, enim minima asperiores.';
let word = words.replace(/\./g,'').replace(/,/g,'');
let splits = word.split(' ');
for(let i=0; i<splits.length; i++){
    if(splits[i].length >= 5){
        console.log(splits[i]);
    }
}


//2. 주민번호의 값을 입력받고 남자인지 여자인지 구별
// 000000-_000000  =>  _ :1,3 남자  2,4:여자
let ssn = '910414-7345789';
function checkGender(ssn){
    //000000-000000   0000000000000    000000 0000000 어떤형태로 들어와도 반환하기
    ssn = ssn.replace(' ','');
    ssn = ssn.replace('\-','');
    let gender = ssn.charAt(6);
    if(gender == 1 | gender ==3){
        return '남자';
    }else if(gender == 2 | gender == 4){
        return '여자';
    }else{
        return '???';
    }
    // return '남자' || '여자 '
}
console.log(`성별 : ${checkGender(ssn)}`);

//3.파일명과 파일의 확장자.
let file = "d:/temp/sample/book.xls";
let fileName, fileExt; //콘솔창에출력하기
let start = file.lastIndexOf('/') + 1;
let end = file.lastIndexOf('.');
fileName = file.slice(start,end);
fileExt = file.slice(end+1,file.length);
console.log(`파일이름 : ${fileName}    확장자 : ${fileExt}`);
