
// На дом ! кто не сделал
/*
Напишите функцию которая будет возвращать объект
с свойством name, а значением будет первый аргумент функции
*/
var name;
var objUser = {};

function user(name) {
    objUser.name = name;
    return objUser;
}
console.log(user('Vladimir'));

/*
Функция будет принимать 1 аргумент - ОБЪЕКТ у которого
будет свойство name
и возвращать новый объект изменяя свойство name
в большой регистр
*/

function upUser(obj) {
    return {name: obj.name.toUpperCase()};
}
console.log(upUser({name: 'vladimir'}));

/*
1. Напишите функцию которая принимает в 
качестве аргумента массив
и элемент массива и добавляет элемент в конец массива
*/

let arr = ['zero', 'one', 'two', 25];

function addToArray(arr, last) {
    arr[arr.length] = last;
    return arr;
}
console.log(addToArray(arr, 'posledniy'));
 // без естественных способов добавления


/*
2. Напишите функцию которая получает 3 параметра 
и возвращает объект типа:    
    {
      argument1: param1,
      argument2: param2,
      argument3: param3,
    }    
*/
function simpleObjectGenerator(param1, param2, param3) {
    return {'argument1': param1, 'argument2': param2, 'argument3': param3};
};
console.log(simpleObjectGenerator('protocol', { url: '22' }, 8000));

/* {
   argument1:'protocol',
   argument2:{url:'22'},
   argument3:8000
}*/

var userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];

console.log(simpleObjectGenerator(77, userNames, 'privet kak dela chto novogo'.toUpperCase()));
/* {
 argument1:'77',
 argument2:[{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }],
 argument3:PRIVET KAK DELA CHTO NOVOGO
 }*/


///////////////////////////////////////////////
/*
3.  Напишите функцию которая принимает 3 аргумента, 
     третий аргумент - это объект.
    
    Функция создает новый объект и добавляет ключ 
    это первый аргумент, а значение - второй аргумент
    Проверяет если есть свойство name в переданном объекте, 
    тогда добавляет данное свойство и возвращает новый объект

var myName = { name: 'Oleg' };

function addNameToUser(newKey, newValue, userName) {

}
*/
var myName = { name: 'Oleg' };

 function addNameToUser(newKey, newValue, userName) {
    let obj = {};
    if (userName.name != undefined){
         obj['name'] = userName.name;
     }
     obj[newKey] = newValue;
     return obj;
 }
console.log(addNameToUser('family', '%Lustenko%', myName));
/* {name:'Oleg', family:'%Lustenko%'} */

console.log(myName);
/* {name:'Oleg'} */

/////////////////////////////////

/*
-> @@ SUPER
  Напишите функцию, которая будет возвращать 'Fizz' 
   если передаваемый параметр кратен 3,
   'Buzz', если передаваемый параметр кратен 5, 
   'FizzBuzz' - если параметер кратен 3 и 5
   Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
*/

function fizzBuzz(num) {
  var rez = "";
  if (num % 3 == 0){
    rez += "Fizz";
  }
  if (num % 5 == 0){
    rez += "Buzz";
  }
  console.log(rez || num);
}

fizzBuzz(1); // 1
fizzBuzz(2); // 2
fizzBuzz(3); // 'Fizz'
fizzBuzz(5); // 'Buzz'
// ...
fizzBuzz(15); // 'FizzBuzz'
fizzBuzz(21); // 'Fizz'

/* -> @@ SUPER 2
Напишите функцию, которая будет принимать 4 аргумента, 
последний всегда функция.
Добавьте первые 3 аргумента в массив и вызовите переданную функцию с данным массивом

*/

