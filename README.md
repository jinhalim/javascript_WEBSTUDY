# javascript_WEBSTUDY
생활코딩
<https://opentutorials.org/course/3085>

실행: CTRL + SHIFT + B
### 목차
1. [ex1](#ex1)
2. [ex2](#ex2)
3. [ex3](#ex3)
4. [ex4](#ex4)


## ex1
`script tag`
~~~ html
<script>
    document.write(1+1+1);
</script>
~~~
-----------------------
## ex2
`event`
~~~ html
<input type="button" value="hi" onclick="alert('hi')">
<input type="text" value="여기에 작성하면 됨" onchange="alert('changed')">
<input type="text" onkeydown="alert('key down!')">
~~~
------------------
## ex3
`console`
![ex3](/ex3_console/console_1.PNG)

----------------
## ex4 
##### 자바스크립트 자료형
[Data type 설명](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures "Data type")
~~~javascript
var foo = 42; //type : number
var foo = "bar"; //type : string
var foo = true; //type : boolean
~~~
##### DATA TYPE
1. Boolean
    * `true`
    * `false`
2. Null
    * `null`
3. Number
    * `Infinity`, `-Infinity`, `NaN`
    * `Number.MAX_VALUE` : 최대 부동 소수점
    * `Number.MIN_VALUE` : 최소 부동 소수점
    * `Number.isSafeInteger()`
    : 숫자가 배정밀도 부동소수점 숫자인지 확인하는 용도
    * `Number.MAX_SAFE_INTEGER` : 가능한 최대 수
    * `Number.MIN_SAFE_INTEGER` : 가능한 최소 수
4. String
    * `String.substr()` : 문자열에서 글자 추출 
    * `String.concat()`, `+` : 문자열 합치기
5. Symbol
6. Undefined
    * `undefined`
7. Object

