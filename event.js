// Destructuring - a way of unpacking a colletion or variable
const fruits = ["Apple","Banana","Cherry","Orange","Kiwi"]
const [a,b,c,d,e] = fruits
console.log(e)
const [x,,,,y]=fruits
console.log(x)
console.log(y)


const student ={
    name: "Mary Doe",
    email: "marydoe@gmail.com",
    age:35,
    phone: 234578503983
} 

const{name,email,age,phone} = student
console.log(name)
console.log(phone)