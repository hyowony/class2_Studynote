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
