// b_13_js_constructor_function.js

// 생성자 함수를 제작하려면, 함수의 이름이 PascalCase기법으로 처리


// var user = {};
// user.name = 'xido';
// user.age = 20;
// user.email = 'ido@naver.com';
// console.log( user );


var UserSetting = function(userName, userAge, userEmail){
  this.name = userName;
  this.age = userAge;
  this.email = userEmail;
};

// console.log( this.location );
// window.console.log( 'console 결과' );
// this.console.log( 'console 결과' );

// 인스턴스처리 : 기존에 만든 함수의 기능을 복제-객체로변환 (new 연산자)
var user1 = new UserSetting('xido', 30, 'xido@gmail.com'); 
user1.name = 'myX';
console.log( user1);

var user2 = new UserSetting('puppy', 10);
console.log( user2.email );

// prototype : 생성자에 담길 내용에 대한 별도의 처리되는 기본 객체
UserSetting.prototype.group = '가족 명단 체크';

console.log( user1 );

UserSetting.prototype.trueCkeck = function(){
  return this.age / 2;
};

console.log(user1.trueCkeck());

console.clear();
// this : window
console.log( this );

// this : 객체 이름
var ObjFn = function(a){
  this.alpha = a;
}
var alpha = new ObjFn('abcd');
console.log( alpha.alpha );

console.clear();
// --------------------------------------------------

var SetMenu = function(brand, type, narr, link){
  this.brand = brand;
  this.type = type;
  this.narr = narr;
  this.link = link;
};

// SetMenu에 기본 내장되어야 하는 값
SetMenu.prototype.title = '겨울에 어울리는 음료';

var coffeeList = [];

var drink1 = new SetMenu('nesspresso', 'coffee', '겨울에 따뜻하게 마실 수 있는 커피', 'http://nesspresso.com');

coffeeList.push(drink1);
// console.log( drink1.title );
console.log( coffeeList[0].title );

// -------------------------------------------
var ul = document.querySelector('ul');
var list = ul.children;
console.log( list );


// prototype은 재설정, 추가 옵션을 주는 개념
// 배열이 가지고있는 본연의 기능 중 값을 배열형식으로 처리하는 것
var listArr = Array.prototype.slice.apply(list);
console.log( listArr );

listArr.forEach(function(data, index){
  data.style.border = '1px solid #3df';
});
// --------------------------------------------

// prototype은 하나의 기능을 사용할 수 있는 환경을 구축하는 처리형태
// 사용하는 변수 값 자체에 있는 기능은 아니고, 본연의 타입형태에 담겨처리할 수 있도록 만드는 것.

// --------------------------------------------------
// 배열 형식을 가진 기능이 실제 배열이 아닌 형태는 유사배열로 불리고,
// 이는 배열의 고유 기능을 처리하지 못한다.(배열 메소드 기능)
// 그렇기에 강제로 배열로 처리하기 위해서는 배열의 고유기능을 처리해주어야 하는데
// 이때 필요한 형식이 prototype이다. (고유기능을 이용하여 강제 수행)

// 이처럼, 본래 가지고있지 않는 형식을 강제로 수행하기 위해서는 어떠한 설정을 주어야 하는데
// 이를 prototype에 내장시켜 처리 하도록 만든다.

// 생성자 함수
// this
// 배열/유사배열
// prototype


// 배열 메소드
var arr = [];
arr.push(1)
// console.log(  arr  );
// console.log( arr.unshift('data')  );

// arr = Array.prototype.push(1);
// Array.prototype.unshift('data');

var ListFn = function(type, color){
  this.type = type;
  this.color = color;
};
ListFn.prototype.store = 'anyang';

var coffee = new ListFn('americano', 'brown');
console.log( coffee.store );

// -----------------------------------------

