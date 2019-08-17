// [객체]
/** 객체(object)
-property (name 과 value로 구성됨)
-method
*/  

// property 참조 방법
let cat = {name: '나비', age: 5};
// console.log(cat.name)
// console.log(cat['age'])
/**output
나비
5
 */
let person = {
    name: '홍길동',
    birthday: '990101',
    pld: '1234567',
    age: 23,
    fullld: function() {
        return this.birthday + this.pld
    }
};
// console.log(person.fullld())
//9901011234567


/**객체 생성 방법
1. literal notation를 이용한 방법
2. constructor function를 이용한 방법
3. Object.create() 메소드를 이용한 방법

 인스턴스(instance): 위의 방법으로 생성되어 메모리에 대입된 객체
*/

//1. literal notation 방법
let kitty = {
    name : '나비',
    age : 1,
    weight : 0.1
}
// console.log('우리 고양이의 이름은 '+kitty.name+'이고 나이는 '+kitty.age+'살 입니다.')
// 우리 고양이의 이름은 나비이고 나이는 1살 입니다.

// 2. constructor function를 이용한 방법
let day = new Date()
// console.log(day.getDate())
// 17

// 3. Object.create() 메소드를 이용한 방법
let obj = Object.create(null, {
    x: {value :100 ,enumerable: true}, // x좌표를 나타내는 property
    y: {value :200 ,enumerable: true}  // y좌표를 나타내는 property
})
// console.log('X 좌표 : '+ obj.x)
// console.log('Y 좌표 : '+ obj.y)
// console.log(Object.getPrototypeOf(obj)) //객체의 프로토타입 반환

/**output
X 좌표 : 100
Y 좌표 : 200
null
 */



 /**상속(inheritance)
 : 새 class에서 기존 class의 모든 property와 method를 사용할 수 있는 것
 -> 상속은 추상화, 캡슐화와 더불어 객체 지향 프로그래밍을 구성하는 중요한 특징이 됨
 
 javascript : 프로토타입 기반(prototype-based)의 객체 지향 언어
 따라서 C++, C#과 다른 상속 개념을 가지고 있다.

 javascript에서의 상속 개념? : 현재 존재하고 있는 객체를 프로토타입으로 사용하여, 
 해당 객체를 복제하여 재사용하는 것을 상속
 
 프로토타입(prototype) :
 자바스크립트의 모든 객체는 최소한 하나 이상의 다른 객체로부터 상속을 받으며,
이때 상속되는 객체를 말함.
 */



 //프로토타입 체인(prototype chain)
 let obj1 = new Object(); //Object.prototype
 let arr = new Array(); //Array.prototype & Object.prototype
 let date = new Date(); //Date.prototype & Object.prototype

 //프로토타입의 생성
 function Dog(color, name, age){
     this.color = color
     this.name = name
     this.age = age
 }

 let myDog = new Dog('검정','검둥이',3);
//  console.log(myDog.name+'는 '+ myDog.age +'살 이고, '+myDog.color+'색 이다.')
//  검둥이는 3살 이고, 검정색 이다.

//프로퍼티 및 메소드 추가
myDog.family = '시베리안 허스키'
myDog.breed = function(){
    return this.color + this.family
}
// console.log(myDog.breed())
// 검정시베리안 허스키

// prototype 프로퍼티를 이용한 추가 -> 
// 표준 객체의 프로토타입를 임의로 수정하면 심각한 오류 발생할 수 있음
Dog.prototype.family = "시베리안 허스키";
Dog.prototype.breed = function() {
    return this.color + " " + this.family;
}

// 객체 프로퍼티의 삭제
delete myDog.family

// console.log(Object.keys(myDog))
// :해당 객체가 가진 고유 프로퍼티 중에서 
// 열거할 수 있는 프로퍼티의 이름을 배열에 담아 반환
// console.log(Object.getOwnPropertyNames(myDog))
// :해당 객체가 가진 모든 고유 프로퍼티의 이름을 배열에 담아 반환

// console.log(Object.defineProperty(myDog, 'color', {enumerable : false}))
// Dog { name: '검둥이', age: 3, breed: [Function] }


