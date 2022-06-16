interface Alarm {
  alert: () => void;
}

interface Light {
  lightOn: () => void;
  lightOff: () => void;
}

class Car implements Alarm, Light {
  alert() {
    console.log('Car alert');
  }
  lightOn() {
    console.log('Car light on');
  }
  lightOff() {
    console.log('Car light off');
  }
}

const car = new Car();

car.alert();
car.lightOn();
car.lightOff();
