import {Car} from 'updated_example_ws/car_pb';

const car = new Car();
car.setMake('Porsche');

const el: HTMLDivElement = document.createElement('div');
el.innerText = `Car from server: ${car.getMake()}`;
el.className = 'ts1';
document.body.appendChild(el);
