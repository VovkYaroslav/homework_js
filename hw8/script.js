// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone){
    this.id=id
    this.name=name
    this.surname=surname
    this.email=email
    this.phone=phone
}
let arr=[];

    let user1 = new User('3882993', 'Vasya', 'err', 'err@gmail,com', '097883457');
    let user2 = new User('2221111','Kolya','ayr','ayr@gmail.com','097123455');
    let user3 = new User('3333333','Anna','sss','sss@gmail.com','0974679532');
    let user4 = new User('2222222','Olya','xxx','xxx@gmail.com','0974123588');
    let user5 = new User('1111111','Vika','ccc','ccc@gmail.com','0975345432');
    let user6 = new User('1234567','Masha','vvv','vvv@gmail.com','0971009090');
    let user7 = new User('1122334','Vlad','bbb','bbb@gmail.com','0972007030');
    let user8 = new User('1112223','Vanya','nnn','nnn@gmail.com','097600403132');
    let user9 = new User('4445556','Yarik','www','www@gmail.com','0971009049');
    let user10 = new User('7778889','Misha','rrr','rrr@gmail.com','0979999924');

    arr.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)


//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)


// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

