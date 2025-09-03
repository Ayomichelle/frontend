const person = {
    Name: "jhon doe",
    Email:"johndoe@gmail.com",
    Age:20,
}
console.log(person)
console.log(person["Name"])
console.log(person["Email"])
console.log(person["Age"])
console.log(person.Name)

for (let a in person ){
    console.log(`${a}: ${person[a]}`)
}

person.Age= 25
person["Name"]= "Peter Doe"
person["Email"]= "peterdoe@gmail.com"
person["Favcolor"] = "Red"
console.log(person)
delete person.Age
console.log(person)

const person2 = new Object({name: "Mary Doe", email:"marydoe@gmail.com",age:19})
console.log(person2)

const car = {
    Name:"Honda",
    Year: 2025,
    Color:"Black",
    Details:function(){
        return `the name of the car is ${this.Name},produced in ${this.Year} wih ${this.Color} color`
    }
}
console.log(car.Details())


function Person(name, email, age){
  this.name =  name
  this.email = email
  this.age = age
  this.detail = function(){
    return`My name is ${this.name}, send me an email on ${this.email}, i am ${this.age}`
  }
}
const ade = new Person("Ademide Ademola","ademideademola@gmail.com",17)
console.log(ade.name)
console.log(ade.email)
console.log(ade.age)
console.log(ade.detail())


function Car(name,year,color){
  this.name = name
  this.year = year
  this.color = this.color
  this.speed = function(n){
    return `${this.name} has a speed of ${n} KM/HR`
  }
}
const Toyota =  new Car("Toyota", 2025, "black")
console.log(Toyota.name)
console.log(Toyota.speed(180))

function Animal(name,legs){
  this.name = name
  this.legs = legs
  this.sound = function(n){
    return`The ${this.name} makes a ${n} sound`
  }
}
const Dog = new Animal("Dog", 4)
console.log(Dog.name)
console.log(Dog.legs)
console.log(Dog.sound("barking"))

function Account(name,accNumber,balance=0){
  this.name = name
  this.accNumber = accNumber
  this.balance  = balance
  this.balanceEnquiry = function(){
    return `$${this.balance}`
  }
  this.deposit = function(amount){
    this.balance += amount
  }
  this.withdraw = function(amount){
    if (this.balance<amount){
      return `Insufficient Funds`
    }
    else{
      return this.balance -= amount
    }
  }
}
const Peter = new Account("Peter Doe", 43833)
console.log(Peter.balanceEnquiry())
Peter.deposit(500)
console.log(Peter.balanceEnquiry())
console.log(Peter.withdraw(600))
console.log(Peter.balanceEnquiry())


// if...else, switch case,ternary

// if...else
const age = 29;
console.log('Age:'+ age);
if (age > 17) {
  console.log('You are an adult');
} else {
  console.log('You are not an adult');
}


//switch
let fruit = "apple";
switch (fruit) {
  case "apple":
  case "banana":
    console.log("This is a pome fruit.");
    break;
  case "pear":
    console.log("This is a tropical fruit.");
    break;
  default:
    console.log("Unknown fruit.");
}

//ternary
let score = 85;
let grade = score >= 90 ? "A" : score >= 75 ? "B" : "C";
console.log(grade)

//if...else if...else
let time = 20;

if (time < 12) {
  console.log("Good morning!");
} else if (time < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

function Product(name,price,quantity){
  this.name  = name
  this.price = price
  this.quantity = quantity
  this.buy = function(number){
    if(this.quantity >= number){
      return this.quantity -= number
    }
    else{
      console.log("the amount is not available")
    }
  }
  this.restock = function(number){
    return this.quantity+= number
  }
}
 
const Bag = new Product("Bag", 1000,10)

console.log(Bag.buy(3))
console.log(Bag.restock(5))

date = new Date()
console.log(date)

hour = new Date().getHours()
console.log(hour)
if(hour<12){
  console.log("Good Morning")
}
else if(hour<16){
  console.log("Good Afternoon")
}
else if(hour<20){
  console.log("Good Evening")
}
else{
  console.log("Good Night")
}


days = new Date().getDay()
console.log(days)
switch(days){
  case 0:
    console.log("Sunday")
    break;
  case 1:
    console.log("Monday")
    break;
  case 2:
    console.log("Tuesday")
    break;
  case 3:
    console.log("Wednesday")
    break;
  case 4:
    console.log("Thursday")
    break;
  case 5:
    console.log("Friay")
    break;
  case 6:
    console.log("Saturday")
    break;
  default:
    console.log("No match found")
}

let count = 0
const action = {
  type : "increment"
}

switch(action.type){
  case "increment":
    count ++
    break;
  case "decrement":
    count --
    break;
}
console.log(count)

const age2 = 25


hour<12?console.log("Good Morning"):console.log("Have a nice day")
age2<20?console.log("You're a youth"):console.log("You're an adult")

// shorcircuit conditional
age2 >18 && console.log("Young adult")
