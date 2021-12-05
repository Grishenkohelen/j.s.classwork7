// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.produser = produser;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    }
    this.info = function () {
        console.log(`модель- ${this.model},  виробник - ${this.produser}, рік випуску - ${this.year},  максимальна швидкість ${this.maxSpeed},  об'єм двигуна ${this.volume} `)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newValue){
        this.year = newValue;
    }
    this.addDriver = function (driver) {
        this.drive = driver;
    }
    };



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class carClass{
constructor(model, producer, year, maxSpeed, volume){
    this.model = model;
    this.produser = produser;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
}
    drive(){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    }
    info(){
        console.log(`модель- ${this.model},  виробник - ${this.produser}, рік випуску - ${this.year},  максимальна швидкість ${this.maxSpeed},  об'єм двигуна ${this.volume} `)
    }
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    changeYear(newValue) {
        this.year = newValue;
    }
    addDriver(driver) {
        this.drive = driver;
    }};


// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, size){
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

const cinderellasArray = [
    new Cinderella('1Cinderella', 18, 36),
    new Cinderella('2Cinderella', 19, 37),
    new Cinderella('3Cinderella', 20,38),
    new Cinderella('4Cinderella', 21,39),
    new Cinderella('5Cinderella', 22,39),
    new Cinderella('6Cinderella', 23,40),
    new Cinderella('7Cinderella', 24,39),
    new Cinderella('8Cinderella', 25,41),
    new Cinderella('9Cinderella', 26,39),
    new Cinderella('10Cinderella', 27,38)
];
console.log(cinderellasArray);

// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
class Princ {
    constructor(name, age, shose){
        this.name = name;
        this.age = age;
        this.shoe = shose;
    }
}

const princ = new Princ ('artur', 31, 41);
//
//
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.


     const newPara = (cinderellasArray, princ) => {
    for (const item of cinderellasArray) {
        if (item.size === princ.shose) {
            return `tvoya cinderella: ${item.name}`
        }
    }
};
    console.log(newPara(cinderellasArray, princ))

//
//
//     // Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
let cinderella = cinderellasArray.find(value=>value.size === princ.shoes)

console.log(cinderella);



