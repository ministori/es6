///**
// * Created by joon-seokmoon on 2017. 9. 3..
// */
//
//'use strict';
//
//let book;
//// 값을 할당하지 않고 변수만 선언
//// 초기값으로 undefined가 할당됨
//
//let sports = '축구';
//// sports  변수를 선언하고 초깃값 할당
//
//sports = '농구';
//// 글로별 변수에 선언
//// 바로ㅟ의 sports 변수 값 변경
//
//// let sports = '배구'
//// 위에 let sports를 선언했으므로 중복 에러
//
//let one = 1, onetwo = 2
//// 콤마로 구분하여 여러개 선언
//
//// let four = 4, let = 5;
//// 여러개 선언시 let 한번만 사용
//
///***********/
//
//let sprots = 'soccer';
//
//if(sports){
//    let sports = 'basket';
//    console.log(sporst);
//}
//
///*
//1. if(){} 에 중괄호 {} wkrtjd
//2. 블록{} 안과 밖에 let sports 작성
//- 스코프가 다르므로 별개로 인식
//3. 블록 밖에서 블록안의 sports에 접근 불가
//- private 변수로 사용 가능
//4. 콘솔에 블록 농구 출
// */
//
//
//// let this
//
//var music = 'music';
//console.log(this.music);
//
//현재 위치는 글로벌 오브젝트
//var 키워드로 변수 선언
//this가 글로벌 오브젝트 참조
//console에 음악 출력
//
//let sports = 'soccer';
//console.log(sports);
//
//let 키워드로 변수 선언
//console에 축구 출력
//
//console.log(this.sports);
//글로벌 오브젝트의 let변수를 this로 액세스
//undefined 반환
//
//// let function
//
//let sports = 축구
//let music = jazz
//
//function get(){
//    let music = classic
//    console.log(music);
//    console.log(sports);
//    console.log(this.music);
//};
//
//window.get()
////호출은 문제 없음
//get()
//// 으로 호출하면 this.music에서 에러 발생
//
//
//window.get();
//window.get() 형태로 호출하면 this가 window참조
//music 변수가 window에 존재하지 않음
//따라서 undefined 출력
//ES6에서 get() 앞에 오브젝트를 작성하지 않고 get()형태로 호출하면 this참조 값이 undefined 로 설정됨
//undefined.get() 형태가 되어 에러 발생
//
//
