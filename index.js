// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(drivers, name){
  drivers.push(name);
  return drivers;

}

function destructivelyPrependDriver(drivers, name){
  drivers.unshift(name);
  return drivers;
}

function destructivelyRemoveLastDriver(drivers){
  drivers.pop();
  return drivers;
}

function destructivelyRemoveFirstDriver(drivers){
  drivers.shift();
  return drivers;
}