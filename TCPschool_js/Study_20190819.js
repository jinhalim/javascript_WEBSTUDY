/**
 * 전역 객체  (global object)
 : 자바스크립트에 미리 정의된 객체로 전역 property나 전역 function를 담는 공간
 전역 범위에서 this연산자 를 통해 접근할 수 있다.

 * 래퍼 객체 (wrapper object)
 :  숫자, 문자열, 불리언 등 원시 타입에 접근시 생성되는 임시 객체
*/

//[래퍼 객체, wrapper object]
let str = '문자열'
let len  = str.length
// console.log(str +'의 길이 : '+ len )
//객체가 아닌데도 length를 사용할 수 있다.
//그 이유는 new String(str)을 호출 한것 처럼 문자열 리터럴을 객체로 자동 변환해주었기 떄문이다.
//이렇게 생성된 임시 객체는 참조가 끝나면 자동으로 삭제됨.

/** [표준 객체]
 * 1. Number object
 * 2. Math object
 * 3. Date object
 * 4. String object
 * 5. Array object
 */

//  1. Number 객체 : 정수와 실수를 따로 구분하지 않고 실수로만 표현
let x = 999999999999999
let y = 9999999999999999
let z = 0.1 + 0.2
// console.log(x)
// console.log(y)
// console.log(z)
/**output
999999999999999
10000000000000000
0.30000000000000004
 */

z = (0.2 * 10 + 0.1 * 10) / 10
// console.log(z)
//0.3

x = 0xAB  //10진수 : 171
y = 29  //10진수 : 29
// console.log(x + y) 
//200

let num = 256
// console.log(num.toString(2)) //2진법 100000000
// console.log(num.toString(8)) //8진법 400
// console.log(num.toString(16)) //16진법 100

let x1 = 10 / 0
let y1 = Infinity * 1000
let z1 = 1/Infinity

// console.log(x1)
// console.log(y1)
// console.log(z1)
/**output
Infinity
Infinity
0
 */
let num1 = 100 - '10'
let num2 = 0/0
// console.log(num1)
// console.log(num2)
//90
//NaN
if (isNaN(num2)) {
    // console.log(true)
}
else{
    // console.log(false)
}

/**
값	        Boolean 문맥	Number 문맥	    String 문맥
null	    false	        0	            "null"
undefined	false	        NaN	            "undefined"
NaN	        false	        NaN	            "NaN"
Infinity	true	        Infinity	    "Infinity" 
*/


let x2 = 100
let y2 = new Number(100)
// console.log(x2+':'+ typeof x2)
// console.log(y2+':'+ typeof y2)

// 100:number
// 100:object

// console.log(x == y)
// console.log(x === y)

// true
// false


/** Number method 
 * 대표적인 method
1. Number.parseFloat()
2. Number.parseInt()
3. Number.isNaN()
4. Number.isFinite()
5. Number.isInteger()
6. Number.isSafeInteger()
*/

// console.log(Number.parseFloat('1222.221'))
// console.log(Number.parseFloat('12문자열')) // 첫번째 숫자만 숫자로 변환함 
// console.log(Number.parseInt("122"))
// console.log(Number.parseInt(122.22))

/**output
1222.221
12
122
122
 */

// console.log(Number.isNaN("NaN"))
// console.log(Number.isNaN(undefined))
// console.log(Number.isNaN("문자열"))
//Number.isNaN()은 오직 숫자만 NaN인지 확인함

// console.log(isNaN("NaN"))
// console.log(isNaN(undefined))
// console.log(isNaN("문자열"))
//isNaN() 함수가 가지고 있던 숫자로의 강제 변환으로 인해 잘못된 값을 반환하는 예제임

/**output
false
false
false
true
true
true
 */

// console.log(Number.isFinite(111)) //true
// console.log(Number.isFinite(Infinity)) //false

// console.log(isFinite("0")) //true


// console.log(Number.isInteger(0))        // true
// console.log(Number.isInteger(-100))     // true
// console.log(Number.isInteger(0.1))      // false
// console.log(Number.isInteger("문자열")) // false
// console.log(Number.isInteger(Infinity)) // false
// console.log(Number.isInteger(true))     // false



//2. Math object: 다른 객체와 달리 constructor가 존재하지 않는다

/** Math method
1. Math.min()
2. Math.max()
3. Math.random()
4. Math.round()
5. Math.floor()
6. Math.ceil()
7. Math.sin()
 */

// console.log(Math.min(1, 10, -100, -10, 1000, 0))
// console.log(Math.min())
// -100
// Infinity


// console.log(Math.max(1, 10, -100, -10, 1000, 0))
// console.log(Math.max())
// 1000
// -Infinity

// console.log(Math.random())
// console.log(Math.random() * (20 - 10) + 10) // [10,20) 10 <= x <20

//반올림
// console.log(Math.round(10.49)) //10
// console.log(Math.round(10.55)) //11

//내림
// console.log(Math.floor(10.95)) //10
// console.log(Math.floor(11.01)) //11
// console.log(Math.floor(-10.95)) //-11

//올림
// console.log(Math.ceil(10.95)) //11
// console.log(Math.ceil(11.05)) //12
// console.log(Math.ceil(-10.95)) //-10

//sin 함수
// console.log(Math.sin(0)) //0
// console.log(Math.sin(Math.PI / 2)) // 1


// 3. Date object : 연월일, 시분초, millisecond의 정보도 함께 제공
//유의 사항 : -> 월(month) : 1월(0) ~ 12월(11) 


let date = new Date()
// console.log(date)
//2019-08-19T11:40:12.259Z


