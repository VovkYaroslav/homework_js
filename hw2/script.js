//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [
    'rrr', 'gtrdd', '123', true, false, 123, 12.14, '123,12344', 12, 'wwww'
]
console.log(arr);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let parameters = {
    title : 'SOme name',
    pageCount : 'number',
    genre : 'gere',
}
console.log(parameters);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let b1 = {

    title : 'frgtj',
    pageCount : 12890,
    genre : 'eferh',
    authors:['Vasya', 41]

}

let b2= {

    title : 'www',
    pageCount : 123,
    genre : 'hhh',
    authors:['Sasha', 30]

}

let b3= {

    title : 'qqq',
    pageCount : 37597,
    genre : 'pppppp',
    authors:['Petya', 40]

}
console.log(b1);
console.log(b2);
console.log(b3);

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arrOfUsers = [
    { name : 'Vasya', username : 'sss',password : '1234567' },
    { name : 'Kolya', username : 'rrr',password : '567890' },
    { name : 'Vika', username : 'eee',password : '-0987654' },
    { name : 'Olya', username : 'ttt',password : '34567' },
    { name : 'Masha', username : 'yyy',password : '852369' },
    { name : 'Misha', username : 'iii',password : '147963' },
    { name : 'Petya', username : 'ooo',password : '852741' },
    { name : 'Vlad', username : 'ppp',password : '456321789+' },
    { name : 'Vova', username : 'aaa',password : '78753' },
    { name : 'Sasha', username : 'sss',password : '951357852' },
]
console.log(arrOfUsers[0].password);
console.log(arrOfUsers[1].password);
console.log(arrOfUsers[2].password);
console.log(arrOfUsers[3].password);
console.log(arrOfUsers[4].password);
console.log(arrOfUsers[5].password);
console.log(arrOfUsers[6].password);
console.log(arrOfUsers[7].password);
console.log(arrOfUsers[8].password);
console.log(arrOfUsers[9].password);


