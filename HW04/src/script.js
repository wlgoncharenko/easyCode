/*
 1. Напишите функцию которая принимает 2 числа 
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

function numbersBetween(a, b) {
    let arr = [];
    if (a < b) {
        for (let i = a + 1; i < b; i++) {
            arr.push(i);
        } 
    }
    if (b < a) {
        for (let i = a - 1; i > b; i--) {
            arr.push(i);
       }
    }
        return arr ;
}

console.log(numbersBetween(1, 5)); // 2,3,4
console.log(numbersBetween(3, 6)); // 4,5
console.log(numbersBetween(12, 15)); // 13,14
console.log(numbersBetween(10, 15)); // 11, 12, 13, 14
console.log(numbersBetween(20, 15)); // 19, 18, 17, 16

/*
 2. Перепешите задачу FizzBuzz, но с использованием цикла. 
 Расчет чисел должен идти до 100 
 */

function fizzBuzz(n) {
    for ( let num = n; num <= 100; num++) {
    let rez = "";
    if (num % 3 == 0){
    rez += "Fizz";
      }
    if (num % 5 == 0){
    rez += "Buzz";
      }
  console.log(rez || num);
    }
}
fizzBuzz(77);

/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */

var arr = [1, null, undefined, 'str', {}, [], function() {}];

function typeArray(arr) {
    let typeArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === null) {
            typeArr.push('null');
        } else if (Array.isArray(arr[i])) {
            typeArr.push('array');
        }
        else {
            typeArr.push(typeof arr[i]);
        }
    }
      return typeArr;
}

console.log(typeArray(arr));
/*
 @@SUPER@@. Вам дан массив array, содержащий внутри объекты. 
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если тип данных NaN, 
 тогда добавляет данному объекту свойство unknownAge: true

 На основании нового массива, создайте новую функцию, которая вернет новый массив 
  содержащий все объекты содержащие свойство unknownAge:true
 */

let array = Array.from({ length: 35 }).map(
  (value, index) => (index % 2 ? { age: index + 2 } : { age: NaN })
);

console.log(array); // [ {age:NaN}, {age:3}, {age:NaN}, {age:5}, {age:NaN}, {age:7} ....]
console.log(array.length); // 35
// не закончил ... думаю еще
function solution(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i].ege)) {
            arr[i]['unknownAge'] = true;
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(solution(array));

let arr = ['privet', 12, {}, [1, 2]];
let arr2 = ['privet', 12, {}, [1, 2]];

function returnArr(argument) {}
returnArr(arr);
returnArr(arr2);
