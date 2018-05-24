interface Person { 
   age:number 
} 
interface Musician extends Person { 
   instrument:string 
} 
var drummer = <Musician>{}; 
drummer.age = 27 
drummer.instrument = "Drums" 
console.log("Age:  "+drummer.age)
console.log("Instrument:  "+drummer.instrument)

var guitarist:Musician;
guitarist.age = 57;
guitarist.instrument = "Keyboard";
console.log("Age:  "+guitarist.age)
console.log("Instrument:  "+guitarist.instrument)