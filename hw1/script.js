// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

    let hello = 'hello'
console.log(hello); //виводить в консоль
document.write(hello); // виводить на сторінку
window.alert(hello); // виводить в вискакуюче вікно

let owu = 'owu'
console.log(owu);
document.write(`<div>${owu}</div>`);
alert(owu);

let nine = -999
console.log(nine);
document.write(nine);

let com = 'com'
console.log(com);
document.write(com);

let ua = 'ua'
console.log(ua);
document.write(ua);

let xxx = 1
console.log(xxx);
document.write(xxx);

let ten = '10'
console.log(ten);
document.write(ten);

let onetwothree = 123
console.log(onetwothree);
document.write(onetwothree);

let point1 = 3.14
console.log(point1);
document.write(point1);
alert(point1);

let point2 = 2.7
console.log(point2);
document.write(point2);

let sixteen = 16
console.log(sixteen);
document.write(sixteen);

let bulean0 = true
console.log(bulean0);
document.write(bulean0);

let bulean1 = false;
console.log(bulean1)
document.write(bulean1)


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

    //kонкатенація
let firstName='Vovk ';
let middleName='Yaroslav ';
let lastName='Olegovich';
let allName= firstName + middleName + lastName;
console.log(allName)

   //інтерполяція
let namee = 'Yaroslav'
let surname = 'Vovk'
let fatherName = 'Olegovich'
let sent = `${surname} ${namee} ${fatherName}`
console.log(sent)


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a= 100;
console.log(a, typeof a); // typeof-визначає тип

let b= '100';
console.log(b, typeof b);

let c= true
console.log(c, typeof c);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('Enter name');
let mn = prompt('Enter your middleName');
let ln = prompt('Enter your lastName');
console.log(name);
console.log(mn);
console.log(ln);
