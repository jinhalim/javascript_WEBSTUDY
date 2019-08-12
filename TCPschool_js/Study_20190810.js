var x = 10;
var result = x + 3

// console.log(x);
// console.log(result)
// ";" 없이도 있어도 가능

var javascript = 10
var Javasrcipt = 20

// console.log(javascript)
// console.log(Javasrcipt)

// 리터럴(literal)
// 리터럴은 직접 표현되는 값 그 자체를 의미
// number,string, boolean literal

/* 
식별자(identifier)
식별자는 변수나 함수의 이름을 작성할 때 사용하는 이름을 의미
영문자(대소문자), 숫자, 언더스코어(_) 또는 달러($)만을 사용
*/

/* 
identifier 작성 방식
1.Camel case 방식 : 
    첫 번째 단어는 모두 소문자로 작성하고, 
    그다음 단어부터는 첫 문자만 대문자로 작성하는 방식
2.Underscore Case 방식 
*/

var firstVar = 10;           // Camel Case 방식
function my_first_func() {     // Underscore Case 방식
    var firstLocalVar = 20;  // Camel Case 방식
}
// alert("hi");


var firstVar = 10;
var secondVar = 10.00;
var thirdVar = 10e6;
var fourthVar = 10e-6;
// console.log(firstVar)
// console.log(secondVar)
// console.log(thirdVar)
// console.log(fourthVar)
//number를 정수, 실수를 구분하지 않음.

var fourthStr = '나의 이름은 "홍길동"이야.'
// console.log(fourthStr)

var firstNum = 2
var secondNum = 3
var firstStr = 'hi'
// console.log(firstNum+secondNum)
// console.log(firstNum+firstStr)
/* 
output:
5
2hi
*/

var sym = Symbol("javascript");  // symbol 타입
var symObj = Object(sym);        // object 타입
// console.log(typeof sym)
// console.log(typeof symObj)
//typeof: 타입 확인


var str = null //object 타입이며 값이 아직 정해지지 않은 것
// console.log(typeof str) //: object
// console.log(typeof str1) //정의되지 않는 변수에 접근시 undefined return함.


// console.log(null == undefined) //true (동등 연산자)
// console.log(null === undefined) //false (일치 연산자)

var dog = {name: '해피', age: 3}  // Object
// console.log(dog)
// console.log(dog.name + '\t' + dog.age)


// 묵시적 타입 변환(implicit type conversion)
var autoStr = 10 + "문자열"
var autoNum = "3" * "5"
// console.log(autoStr)  //10문자열
// console.log(autoNum)  //15
// 1 - "문자열";  // NaN : No a Number

// 명시적 타입 변환(explicit type conversion)
// 1. Number()
// 2. String()
// 3. Boolean()
// 4. Object()
// 5. parseInt()
// 6. parseFloat()

// console.log(typeof (toString(245252))) //string으로 변환
var numObj = 3
// console.log(typeof (Number.parseFloat(numObj).toExponential()))
// console.log(Number.parseFloat(numObj).toExponential())


var booleanStr1 = String(true)
var booleanStr2 = false.toString() 
// console.log(booleanStr1 +'\t'+ typeof booleanStr1)  //true    string
// console.log(booleanStr2 +'\t'+ typeof booleanStr2)  //false   string

// Date
// console.log(Date())
var date = new Date()
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getTime())
// console.log(date.getMilliseconds())

//Number함수 사용해서  str -> num
// console.log(Number.parseInt('1234567'))
// console.log(Number.parseFloat('0.191989'))
// console.log(typeof Number.parseFloat('0.191989'))

// console.log(Number(true))
// console.log(Number(false))


day = 10; //date라는 이름의 변수를 묵시적으로 선언
// console.log(day)
var date = 25; // 변수의 선언과 동시에 초기화

var num
// console.log(num) //undefined

num = 0
// console.log(num)
num += 3
// console.log(num)
num -= 2
// console.log(num)
num *= 3
// console.log(num)
num /= 3
// console.log(num)
num %= 1
// console.log(num)


// console.log( true && false) //and
// console.log( true || false) //or
// console.log(!true) //not

//비트 연산자
var bit = 7
// console.log(bit >> 1)
// console.log(bit << 1)
// console.log(~bit)


//삼항 연산자
var result = (3 > 5)? "true": "false"
// console.log(result)

//for 문
for (let i = 0; i < 3; i++) {
    // console.log("*")
}

//delete 연산자
var arr = [1,2,3]
delete arr[2]
// console.log(arr) //[ 1, 2, <1 empty item> ]
delete arr
// console.log(arr)  //[ 1, 2, <1 empty item> ]
// console.log(arr.length)

var strObj = new String("문자") //이항 연산자: 두개의 피연산자응 가지는 연산자
// console.log(str instanceof Object) //true
// console.log(str instanceof String) //true
// console.log(str instanceof Number) //false
// console.log(str instanceof Array) //false
// console.log(str instanceof Boolean) //false

// void 연산자
// void 연산자는 피연산자로 어떤 타입의 값이 오던지 
// 상관없이 언제나 undefined 값만을 반환
// console.log(void(4567)) //undefined

// if 문
if(3 == 3){
//  console.log("hihi")
}
else if(2==2){

}

if(3 === "3"){
//  console.log("hihi2")
}
else{
    // console.log("3 and '3' no same!")
}

//switch 문
num = 1
switch (num) {
    case 0:
        num = 2
        break;
    case 1:
        num =3
        break;
    default:
        break;
}
// break: case, default 절에 포함하고 있어야하고 
// 실행된 뒤에 전체 switch 문을 빠져나가게 해줍니다.
//만약 break를 붙이지 않는다면 모든 case가 실행된다.


var day = new Date().getDay(); 
switch (day) {
    case 1: // 월요일인 경우
    case 2: // 화요일인 경우
    case 3: // 수요일인 경우
    case 4: // 목요일인 경우
    default: // 0부터 6까지의 값이 아닌 경우
        console.log("0부터 6까지의 값이 아닌 경우")
        break;
    case 5: // 금요일인 경우
        console.log("금요일인 경우");
        break;
    case 6: // 토요일인 경우
    case 0: // 일요일인 경우
        console.log("일요일인 경우");
        break;
}

//for in 문
arr = [3,4,5,6]
for (var i in arr) {
    console.log(i + ':\t' + arr[i])
}
var obj = {name : '홍길동', age: 40}
for (var i in obj) {
    console.log(i + ":\t" + obj[i])
}

//for of 문
for (var i of arr) {
    console.log(i)
}
//반복할 수 있는 객체 :Array, Map, Set, arguments 등에만 사용 가능

// continue 문
// continue;
// continue <라벨>;
for (var i = 0; i < 3; i++) {
    if(i == 0){
        continue
    }
    console.log(i)
}
// 1
// 2
for (var j = 0; j < 3; j++) {
    dan:
    for (var i = 0; i < 3; i++) {
        if(i == 0){
            continue dan
        }
        console.log(i)
    }
}
// 1
// 2
// 1
// 2
// 1
// 2


// break 문
// break;
// break <라벨>;



