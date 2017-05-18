/*
 1. Составить предложение из нижестоящих переменных:
 "Сколько нужно программистов чтобы сделать проект ? 1, 25, команда"
 */
let numbers = [25, 1];
let project = 'проект';
let team = `команда`;
let howMuch = 'Сколько';
let sentence = 'нужно программистов чтобы сделать проект ?';

let newSentence = sentence.replace('проект', project); //не знаю насколько это нужно
let task1 = howMuch + ' ' + newSentence + ' ' + numbers[1] +', ' + numbers[0] + ', ' + team;
let task1es6 = `${howMuch} ${newSentence} ${numbers[1]}, ${numbers[0]}, ${team}`;
console.log(task1);
console.log(task1es6);

/*
 2. Составьте предложение из представленного массива 
 и выведите предложение в консоль;
 "Так, когда Будда достиг Просветления, он обнаружил, что больше не ощущает себя мишенью. 
  Он не был больше ни телом, к которому рано или поздно ..."
 */

let array = [
  'Он',
  'был больше ни телом, к которому рано или поздно',
  'он обнаружил',
  'не',
  'Так, когда Будда достиг Просветления',
  '...',
  'что больше',
  'ощущает себя мишенью',
  'не'
];

let homeSentence = `"${array[4]}, ${array[2]}, ${array[6]} ${array[3]} ${array[7]}.
${array[0]} ${array[3]} ${array[1]} ${array[5]}"`; //добавил двойные кавычки .. типа цитата
console.log(homeSentence);

/*
 3. Добавьте свойста 4 новых свойства в объект используя 
    квадратные скобки и точку.
 */

let myObj = {};
myObj['firstName'] = 'Vladimir';
myObj['phoneNumbers'] = [+380975569646, +380502856737];
myObj.age = 40;
myObj.businesGroup = true;
console.log(myObj);

/*
 4. Используя метод .slice, добавьте недостающие символы в строку
 */

let sliceString = 'Ytube'; //
console.log(sliceString.slice(0, 1) + 'ouT' + sliceString.slice(2)); // YouTube

/*
 5. Преобразуйте строку x, 
    в максимально удобно читаемый для программиста вид
 */

let frameworks = [4.7, 'Angular', '4Angular', 'React/Redux'];
let x = `google released new version ${frameworks[1]} ${Math.floor(frameworks[0])}.
But real speed is ${frameworks[frameworks.length - 1]}.`;
console.log(x);  