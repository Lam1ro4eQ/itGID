//Task 2
//Работаем в нативном JS. Создайте класс Car описывающий машину. 
//Класс должен содержать свойства brand, name, weight, fuel_type, color, img.
//Типы данных определите самостоятельно. Создайте объект на основе класса и заполните данными. 
//Выведите в консоль. Все классы подключать отдельным файлом.

class Car {
    constructor (brand, generation, mass, fuelType, color, pfoto) {
        this.brand = brand;
        this.generation = generation;
        this.mass = mass;
        this.fuelType = fuelType;
        this.color = color;
        this.pfoto = pfoto;
    }
    render (div) {
        let out = '';
        out += `<div class="package">`
        out += `<p class="package-name">${this.brand}</p>`;
        out += `<p class="package-name">${this.generation}</p>`;
        out += `<hr>`;
        out += `<p class="price">${this.mass}</p>`;
        out += `<hr>`;
        out += `<ul class="features">
                    <li>${this.fuelType}</li>
                    <li>${this.color}</li>
                    <li><img src="${this.pfoto}" alt=""></li>
                </ul>`;
        out +=`<button class="button-primary">Купить</button>`;
        document.getElementById(div).innerHTML = out;
    }

}

const brand = 'Lexus',
      generation = 'LS300',
      mass = '25990$',
      fuelType = 'Бензин',
      color = 'black',
      pfoto = 'https://clck.ru/RQePH';

let car = new Car (brand, generation, mass, fuelType, color, pfoto);
let car2 = new Car (brand, generation, '13599$', fuelType, 'Синий', pfoto);

console.log(car);
console.log(car2);
car.render('car');
car2.render('car2');