//함수선언.
        // function myFunc(std, score = 60) {
        //     // if(score == undefined){
        //     //     score = 0;
        //     // }
        //     console.log(`${std} 점수는 ${score}점 입니다`);
        //     return score; //undefined
        // }
        //함수표현식.
        var myFunc = function myFunc(std, score = 60) {
            console.log(`${std} 점수는 ${score}점 입니다`);
            return score; //undefined
        }
        // let myFunc = myFunc('홍길동');  <<-오류남
        console.log(myFunc('홍길동'));