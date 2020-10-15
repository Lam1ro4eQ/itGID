// шаблон, выступают классы

class Header1 {
    constructor (img, h1, h2) {  // коструктор это спец функция, внтру что я хочу видеть в классе
        this.src = img;   // this - ссылка на будующий объект
        this.h1 = h1;
        this.h2 = h2;
    }
    render (x) {         // создаем метод, будет отрисовывать страницу в html
        // x - куда будем отрисовывать
        let out = '';
        out += `<img src="${this.src}" alt="" class="logo">`;
        out += `<h1>"${this.h1}"</h1>`;
        out += `<h2>${this.h2}</h2>`;
        document.getElementById(x).innerHTML = out;
    }
    static hello(a) {                        // статический метод
        console.log('привет, я cтатический метод' + a);
    }

}

const img = 'https://cutt.ly/hgfrzXE';
       

let header = new Header1(img, 'Hello', 'World'); // new - вызов функции конструктора, header новый объект

header.render('header'); // вызов метода header - id в html
console.log(header);

// класс -> объект
// метод -> рисует страницу // render (что рисовать, куда рисовать)



class Header2 extends Header1  {        //  класс Header2 будет расширять возможности  Header1, наследование
        constructor(img, h1, h2, hero){
            super(img, h1, h2);     // уже имеющиеся super - наследование
            this._hero = hero;    // новое
        }
        get hero() {       // метод для изменения защищенного свойства, контроль над вводимыми
            return this._hero;
        }
        set hero(c) {      // проверка свойства перед сохранением. контроль над выводимыми
            this._hero = c;
        }

    }

const header2 = new Header2(img, 'new hello', 'new site', 'gogogo');
console.log(header2);
header2.render('header'); // обращаемся к методу рендер в родительском классе Header1
Header1.hello(', передаю вам привет'); // вызов статического метода и передаем параметр 


console.log(header2.hero); // вызов метода геттера (обращение к свойству через посредника) какие то проверки могут быть



