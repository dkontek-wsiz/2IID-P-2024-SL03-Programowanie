//Zad 1
const book = {
    title: 'Przykladowy tytuł książki',
    author: 'Przykładowy autor książki',
    publishYear: 2010
};

function getInfo(element) {
    return `${element.title} - ${element.author} (${book.publishYear})`;
}

console.log(getInfo(book));

//Zad 2
const student = {
    name: 'test',
    surname: 'test',
    albumNumber: 'w12312',
    grades: {
        math: 4,
        it: 5,
        pe: 4
    }
};

//console.log((student.grades.math + student.grades.it + student.grades.pe) / 3);
console.log( Object.values(student.grades).reduce((a, b) => a + b) / Object.keys(student.grades).length);


//Zad3 

function Car(markIN, model, productionYear, color, speed) {
    this.mark = markIN;
    this.model = model;
    this.productionYear = productionYear;
    this.color = color;
    this.speed = speed;
    this.increaseSpeed = (value) => this.speed += value; // this.speed = this.speed + value;
    this.decreaseSpeed = function(value) {
        this.speed -= value;
    }
    this.getAge = () => {
        const date = new Date();
        return date.getFullYear() - this.productionYear;
    }
}


const car = new Car('test', 'test', 1111, 'rd', 10);
car.increaseSpeed(10);
console.log(car.speed);

class Car2 {
    constructor(markIN, model, productionYear, color, speed) {
        this.mark = markIN;
        this.model = model;
        this.productionYear = productionYear;
        this.color = color;
        this.speed = speed;
    }

    increaseSpeed(value) {
        this.speed += value
    };
}

//Zad5
function Rectangle(a, b) {
    this.a = a;
    this.b = b;
    this.calcPerimeter = () => 2*a + 2*b;
    this.calcArea = () => a * b;
    this.isSquare =() => a === b;
}

const aInput = document.getElementById('a');
const bInput = document.getElementById('b');
const resultElm = document.getElementById('result');
//Zad6
function create() {
    const a = Number(aInput.value);
    const b = Number(bInput.value);
    const rectangle = new Rectangle(a, b);

    resultElm.innerHTML = `${rectangle.isSquare()? 'Kwadrat': 'Prostokąt'} o obwodzie ${rectangle.calcPerimeter()} i polu ${rectangle.calcArea()}`;
}