// Task 1
//Работаем в нативном JS. Создайте класс Man описывающий человека.
//Класс должен содержать свойства height, weight, age, sex, name, passport, eye.
//Типы данных определите самостоятельно.
//Создайте объект на основе класса и заполните данными. Выведите в консоль. 
//Все классы подключать отдельным файлом.
class Men {
    constructor (height, weight, age, sex, name, passport, eye) {
    this.height = height;
    this.weight = weight;
    this.age = age;
    this.sex = sex;
    this.name = name;
    this.passport = passport;
    this.eye = eye;
    }
}

const height = '180',
      weight = '75',
      age = 25,
      sex = 'male',
      name = 'Alex',
      passport = true,
      eye = 'green';

let men = new Men (height, weight, age, sex, name, passport, eye);
console.log(men);