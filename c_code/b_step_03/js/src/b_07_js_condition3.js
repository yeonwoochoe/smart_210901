// b_07_js_condition3.js

var rel = !true;
if (rel) {
  // 참인경우에 수행
  console.log('값은 참입니다.');
} else {
  // 참이 아닌 경우 수행
  console.log('정답은 거짓입니다.');
}

var count = 10;
if (count <= 5) {
  console.log('숫자는 5이하 입니다. ');
} else if (count > 10) {
  console.log('숫자는 10보다 크다');
} else {
  console.log('5보다크고 10보다 작거나 같은 수');
}

// ---------------------------------
var count2 = 30;
if (count2 > 20) {
  console.log('20보다 큰수');
} else if (count2 >= 10) {
  console.log('10보다 큰수');
} else {
  console.log('다른수');
}

// ----------------------------------------
// 문제: 100이하의 숫자를 입력하면 
// 결과는 3자리(001~100)의 형태로 결과를 도출하시오.
var n = parseInt(Math.random() * 100) + 1;

var num;
if (n > 0) {
  if (n < 10) {
    num = '00' + n;
  } else if (n < 100) {
    num = '0' + n;
  } else {
    num = n
  }
} else {
  num = '양수로 작성하세요.'
}
console.log(num);

console.log(n, '확인', '------------------------');
var parS = n.toString();
var nn = parS.padStart(10, '0');
var cut = nn.slice(-3);
var num2 = cut;
console.log(num2);


