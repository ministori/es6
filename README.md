# es6

- 개념이해가 중요 - 전체그림을 그리세요

- ES5 와 ES6 연계 설명

- ES6 전체 모습 파악이 더 중요

- ES6 설게자의 사상 이해

- 자바스크립트의 궁극적인 목적

    - 관련 기술을 제어, 통합하여 사용자에게 콘텐츠 제공
    

ES6 스펙

- 스펙 정식 명칭
- ECMAScript2015 Language Spec.
- ECMA-262 6차 Edition

스펙규모

- ES7 : 586 page
- ES6 : 566 page
- ES5 : 258 page

용어기

Buil-in object

- Fuction, Object, Array

Ex) 
Array.isAray();
Array.prototype.forEach();

object

- 빌트인 오브젝트로 생성한 오브젝트
- function(), [], {}

인스턴스

- new 연산자로 생성한 오브젝트
- new Book();

property key 와 name의 차이

- property name : String value( 문자열로 되어있는 property key : symbol을 사용하지 않겠다는 의도)

- property key : String value + Symbol value

- ES7 스펙 : the object type

함수 메소드

- Array.isArray() : static method

- Array.prototype.forEach() : method

- ES5 : 이 기준으로 구분

- ES6 : function, method, static method

# let, const

- 변수 선언 및 구분

    - 로컬 변수
    
    - 글로벙 변수
    
- 구분 목적

    - 스코프
    
    - 자신 영역에서만 사용
    
    - 공용에 따른 문제 방지
   

- 글로벌 변수 오해

    - 글로벌 오브젝트도 스코프
    
    - var one
    
        - var  키워드로 변수 선언이 정상
        
    - var  키워드를 작성하지 않으면
    
        - 글로벌 변수로 간주
        
        - 장도 있지만
        
        - 객체 지향 관점에서 보면 이상한 모습
        
- use strict 사용

    - ES5에서 도입
    
    - 함수 안에서 글로벌 변수 선언 방지
   
        - 근본적인 접근은 아님
    
    - ES6
    
        - 'use strit'가 디폴트 환경
    
        - 전체는 아님
    
    - node.js 에 ES6 사용
    
        - use strict 기본 사용
   
- let 변수

    - var 문제 해결
    
    - let sports = '스포'
    
        - 스코프를 가진 변수 선언
        
    - 스코프 범위
    
        - 블록{}, 문장, 표식
        
    - 블록{} 안의 블록{}도 스코프
    
        - 블록 밖의 변수는 스코프가 다름
        
        - 값이 대체되지 않음
        
    - let 변수는 호이스팅되지 않음
    
- let 작성

    - Syntax : name1[=value1][, name2[=value2]]
    
    - name1, name2dp 변수 이름 작성
    
        - 식별자로 사용
        
    - value1, vluae2에 초기값 작성
    
        - 표현식 작성 가능 평가 결과 사용
        
        - 겂을 할당하지 않고 변수선언만 가능
        
    - Temporal dead zone
    
        - rkㅌ은 스코프에 같은 이름 선언 불가
    
- 블록 스코프

    - let 의 가장 큰 목표
    
- function

     - funcition(){} 도 블록 스코프
     
     - function 안과 밖에
     
        - 같은 이름의 let 변수 선언 가능
        
        - 스코프가 다르기 때문에 가능
        
- try-catch














