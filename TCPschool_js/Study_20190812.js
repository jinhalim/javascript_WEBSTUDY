/** 2019/08/12
[배열] */


var arr = [1,2,3] 
var arr1 = Array(2,3,4) //Array 객체 생성자 이용
var arr2 = new Array(3,4,5) // new 연산자를 이용항 Array 객체 생성 

// console.log(arr)
// console.log(arr1)
// console.log(arr2)
/** output
[ 1, 2, 3 ]
[ 2, 3, 4 ]
[ 3, 4, 5 ] */

var arr = ["a"]
// console.log('first element: '+arr[0])
arr[1] = 10
arr.push('12일')
for (var i = 0; i < arr.length; i++) {
    // console.log((i+1)+'th element:'+arr[i]);
}
/** output
first element: a
1th element:a
2th element:10
3th element:12일*/


delete arr[1]
for (var i in arr) {
    // console.log(typeof i)
    const conut = Number.parseInt(i)+1 //여기서 i가 string type
    // console.log(conut+'th element:'+arr[conut-1]);
}
//for in 문은 아래와 같이 object일때 주로 사용함.
// let a = {a:1,b:2,c:3}
// var -> 이전 구세대 자바스크립트 변수 선언 키워드
// let,const -> 신세대 자바스크립트 변수 선언 키워드
// let -> 일반 변수
// const -> 값이 변하지 않는 상수

/** output
1th element:a
3th element:12일*/


let arr3 = new Array(); //create empty Array 
arr3[99] = 10
// console.log(arr3.length) //length를 이용해서 array의 길이를 알수 있다.
/**output
100
 */


let arr4 = new Array(3) // Array의 길이가 3인 Array 생성
for (let i = 0; i < arr4.length; i++) {
    const element = arr4[i];
    // console.log(element)
}
/**output 
undefined
undefined
undefined
*/

//2차원 Array
for (let i = 0; i < arr4.length; i++) {
    arr4[i] = new Array(4) //3x4인 array가 된다.
    for (let j = 0; j < arr4[i].length; j++) {
        const element = arr4[i][j];
        // console.log(element)
    }
}

/**output
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
 */
//  12개의 element

//associative array(연관 배열)

let arr5 = []
arr5['참'] = true
arr5['거짓'] = false
for (const i in arr5) {
    // console.log(i+' : '+arr5[i])
}
/**output
참 : true
거짓 : false
 */

let str = 'hello!'
// console.log(str.charAt(2))
// console.log(str[1])
/**output
l
e
 */
//  str[0] = ''  -> error
//javascript의 문자열은 읽기 전용으로 수정 불가
let strArr = str.split('') //split()로 Array로 변경 가능
// console.log(strArr)
/**output
[ 'h', 'e', 'l', 'l', 'o', '!' ]
 */


//Array 여부 확인 
//Array.isArray() 메소드 , instanceof 연산자 사용
// console.log(Array.isArray(strArr))
// console.log(Array.isArray(str))
// console.log(strArr instanceof Array)
// console.log(str instanceof Array)
/**output
true
false
true
false
 */

//constructor(객체 생성자) 함수를 이용해서 Array 라는것을 알 수 있다.
// console.log(strArr.constructor)
/**output
[Function: Array]
*/

//[함수]

function addNum(x,y) {
    return x+y;
}
// console.log('sum : '+ addNum(1,3))
/**output
sum : 4 */


/** Local variable (지역 변수)
: 함수 내부에서 선언된 변수로써 해당 함수가 종료되면 메모리내에서도 사라져진다. */

/** Global variable (전역 변수)
: 함수 외부에서 선언된 변수로써 어느 영역에서나 접근 가능하다.*/

// 내부함수 
const x = 5, y= 7
function parent(){
    const x = 1, y = 2
    function add() { // 전역 변수가 아닌 parent 함수에 접근해서 x,y에 접근함.
        return x+y
    }
    return add()
}
// console.log(parent())

/**output
3
 */


 /** hoisting(함수 호이스팅) 
 : javascript에서 함수의 유효범위는 함수안에서 선언된 모든 변수가 함수 전체에 유효하다는 의미
 만약 함수내에서 전역변수와 같은 이름의 지역변수가 선언된다면 hoisting되어 
 함수 내부는 지역변수 num이 선언되기전에 num을 찾지 못합니다. */ 
 const num = 3
 function printNum() {
    //  console.log(num) // error 
     const num = 2
    //  console.log(num)
 }
 printNum()
 /**output
 error
  */

let num1 = 3
function printNum1() {
    // console.log(num1) 
    num1 = 7
    // console.log(num1)
}
printNum1()
/**output
3
7
 */


 /** parameter(매개변수) */

 function addNum1(x,y,z) {
     return x+y+z
 }
//  console.log(addNum1(1,2,3)) //-> 6
//  console.log(addNum1(1,2))   //->NaN
//  console.log(addNum1(1))     //->NaN
//  console.log(addNum1())      //->NaN

function addNum2(x,y,z) {
    if (x == undefined) {
        x = 0
    }
    if (y == undefined) {
        y = 0
    }
    if (z ==undefined) {
        z = 0
    }
    return x+y+z
}
//  console.log(addNum2(1,2,3)) //-> 6
//  console.log(addNum2(1,2))   //-> 3
//  console.log(addNum2(1))     //-> 1
//  console.log(addNum2())      //-> 0


/**arguments 객체
: 함수가 호출될때 전달된 인수를 Array의 형태로 저장한 것 */

function addNum3() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {      
        sum += arguments[i];
    }
    return sum
}
//  console.log(addNum3(1,2,3)) //-> 6
//  console.log(addNum3(1,2))   //-> 3
//  console.log(addNum3(1))     //-> 1
//  console.log(addNum3())      //-> 0

/** default parameter(디폴트 매개변수) 
: 함수 호출 시, 인자가 전달되지 않는다면 default 값으로 undefined으로 설정된다.   
*/
function mul(a,b = 1) { // b의 인자가 전달되지 않는다면 b의 default value를 1로 한다. 
    return a*b
}
// console.log(mul(3,3))
// console.log(mul(5)) 
/**output
9
5 */

/**rest parameter (나머지 매개변수)
: 생략 접두사(...)를 사용하여 특정 위치의 인수부터 마지막 인수까지 한번에 지정 가능
*/

function sub(firstNum, ...restArgs) {
    for (let i = 0; i < restArgs.length; i++) {
        const element = restArgs[i];
        firstNum -= element
        console.log(element) // -> 2,2,3
    }
    return firstNum
}
// console.log(sub(11,2,2,3))
/**output
4
 */



