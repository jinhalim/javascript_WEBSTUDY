// [객체]
/** 객체(object)
-property (name 과 value로 구성됨)
-method
*/  

// property 참조 방법
var cat = {name: '나비', age: 5};
// console.log(cat.name)
// console.log(cat['age'])
/**output
나비
5
 */
var person = {
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

 인스턴스(instance): 위의 방법으로 생성되어 메보리에 대입된 객체
*/

//1. literal notation 방법
var kitty = {
    name : '나비',
    age : 1,
    weight : 0.1
}
// console.log('우리 고양이의 이름은 '+kitty.name+'이고 나이는 '+kitty.age+'살 입니다.')
// 우리 고양이의 이름은 나비이고 나이는 1살 입니다.

// 2. constructor function를 이용한 방법
var day = new Date()
// console.log(day.getDate())
// 17

// 3. Object.create() 메소드를 이용한 방법
var obj = Object.create(null, {
    x: {value :100 ,enumerable: true}, // x좌표를 나타내는 properity
    y: {value :200 ,enumerable: true}  // y좌표를 나타내는 properity
})
// console.log('X 좌표 : '+ obj.x)
// console.log('Y 좌표 : '+ obj.y)
// console.log(Object.getPrototypeOf(obj)) //객체의 프로토 타입 반환

/**output
X 좌표 : 100
Y 좌표 : 200
null
 */
