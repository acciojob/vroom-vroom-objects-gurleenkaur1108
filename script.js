function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Method added to Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// SportsCar constructor
function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Set SportsCar constructor
SportsCar.prototype.constructor = SportsCar;

// Method added to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

window.Car = Car;
window.SportsCar = SportsCar;