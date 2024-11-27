const carchar = ['toyota','LC 200','2007'];
let [name, model, year] = carchar;

function sum(...numbers) {
    return numbers.reduce((acc, number) => acc + number, 0);
  }
  
const person = ['Іван'];
const jobInfo = ['Інженер'];
const Worker = [...person, ...jobInfo];

console.log(name, model, year);
console.log(sum(1,4,5,6));
console.log(Worker);