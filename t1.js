//객체구조분해 할당 연습

/// 구조 분해 할당을 사용하지 않을 때

const user = { name: " 이효원", age: 30 };

// console.log(user.name);
// console.log(user.age);

//구조 분해 할당 사용할 때

const id = { name: "ai", age: 1 };
const { name, age } = id;

console.log(name);
console.log(age);

const H = { num: 1, nickname: "샤크" };
const { num, nickname } = H;

console.log(num);
console.log(nickname);

///배열 구조분해 할당 코드 비교
// 구조분해 할당을 사용하지 않을 때

const games = ["토탈워", "롤", "심즈", "피파"];

console.log(games[0]); //토탈워
console.log(games[1]); // 롤

//구조분해 할당 사용

const [battleGround, Lol] = games;
console.log(battleGround); //토탈워??
console.log(Lol); //롤??
