/**
 * Created by joon-seokmoon on 2017. 9. 3..
 */

// one 을 전역 변수로 100을 설정
one = 100;

function get(){
    one = 300;
    console.log('함수:', one);
}

get();
console.log('글로벌 : ', one);

/*

1. get() 에서 one=300을 실행 했을때

    - one이 지역 변수가 아니므로
    - 함수 밖에서 검색

2. 글로벌 오브젝트에 one 존재 300설정

3. 여기까지는 문제 없음

4. 의도적을 클로저 사용 가능성 있음

5. 문제는 모든 프로그램에서 공유하는 글로벌 변수라는 것

 */