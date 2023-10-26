//object5.js
const obj1 = {
    name : 'Hong',
    age : 20,
    weight: 66.8
    //bloodType
}
obj3 = obj1;
const obj2 = Object.assign({name: "Hwang", age: 22, height: 123.4}, obj1);

//상속
const obj4 = Object.create(obj1);
//상속을 통해 자식 객체를 생성하면 부모객체를 참조하고있음
console.log(obj2);
console.log(obj4);
console.log(obj4.name);
console.log(obj4.age);
obj4.name = "Kim"; //자식속성이 변경이 되면 부모가 가지고 있는 값과 달라짐
obj4.age = 23;
obj1.name = "Gang";
console.log(obj4.name);

//객체의 속성을 정의하는 방법. 객체의 속성기술자.
// obj1.bloodType = "O";
Object.defineProperty(obj1, 'bloodType', {
    set : function(bt){
        if(bt == 'A' || bt == 'B' || bt == 'AB' || bt == 'O'){
            this._bloodType = bt;
        }else{
            console.log('잘못된 유형입니다');
            this._bloodType = "A";
        }
    },
    get : function(){
        return this._bloodType;
    }
});

obj1.bloodType = "C";
console.log(obj1.bloodType);

//속성 정의시 속성값과 this 객체의 속성을 달리하는 이유??
//객체의 속성 정의시 get/set을 어디서 확인하는지?