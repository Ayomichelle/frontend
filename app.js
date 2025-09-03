const email = "ayomide@gmail.com"
console.log(email)

const welcome = function(){
    return "you are highly welcome"
}
console.log(welcome())

const welcome1 = function(){
    console.log('you are welcome')
}
welcome1()

const food=["rice","beans","yam","fish"]

for(let i=0; i<food.length;i++){
    console.log(food[i])
}
for(let i=food.length-1; i>=0;i--){
    console.log(food[i])
}

for(let i= email.length-1;i>=0;i--){
    console.log(email[i])
}

const names = ["Ayomide","Angel","Sam","Chris"]

for(let i=0;i<names.length;i++){
    console.log(names[i])
}
for(let i= names.length-1;i>=0;i--){
    console.log(names[i])
}

const num = [[1,2],[3,4],[5,6]]
for(let i =0; i< num.length;i++){
    for (let j=0;j<num[i].length;j++){
        console.log(num[i][j])
    }
}

let sum= 0
for(let i=0;i<num.length;i++){
    for(let j=0;j<num[i].length;j++){
        sum +=num[i][j]
    }
}
console.log(sum)

let a = 0
while(a<names.length){
    console.log(names[a])
    a++
}

const palindrome  = function(n){
    let info = ""
    let i = n.length-1
    while(i>=0){
        info +=n[i]
        i--
    }
    //return info
    if(n == info){
        console.log(`${n} is a palinndrome`)
    }
    else{
        console.log(`${n} is not a palindrom`)
    }
    }

palindrome("ayomide")
palindrome("level")

let o = 0 
do{
    console.log(names[o])
    o++
}
while(
    o<names.length
)

const person = "Jhon Doe"

let d = person.length-1
do{
    console.log(person[d])
    d--
}
while(
    d>=0
)
console.log(person.length)

const foods = ["yam","rice","beans","garri"]
for (let f of foods){
    console.log(f)
}

const students = {
    Name: "jhon doe",
    Email:"johndoe@gmail.com",
    Age:20,
    Favcolor:"red"
}

for(let a in students){
    console.log(`${a}: ${students[a]}`)
}

const people = new Array("Uche","Lawal","Ola","Nike")
console.log(people)
// pop(), push(),shift(),unshift(), LIFO FIFO

people.pop()// removes from the back of the array
console.log(people)
people.push("Dimeji")
console.log(people)
people.shift()// removes from the front of the array
console.log(people)
people.unshift("Emeka")
console.log(people)

people[1] = "Peter"
console.log(people)

let arr = ["Biz","Marrow","Tech"]
    for (let i=arr.length-1;i>=0;i--){
        console.log(arr[i])
    }

const r = [[3,4],[5,6],[7,8]]
for(let i =0; i< r.length;i++){
    for (let j=0;j<r[i].length;j++){
        console.log(r[i][j])
    }
}

let thesum= 0
for(let i=0;i<r.length;i++){
    for(let j=0;j<r[i].length;j++){
        thesum +=r[i][j]
    }
}
console.log(thesum)

r.push([1])
console.log(r)

const zigma = function(r){
    let thesum= 0
for(let i=0;i<r.length;i++){
    for(let j=0;j<r[i].length;j++){
        thesum +=r[i][j]
    }
}
return thesum
}
console.log(zigma(r))


const greet = ()=> "Good Morning"
console.log(greet())

const squre = n => n**2
console.log(squre(4))

const looper = (...r) => {
    let sum = 0
    for(let i = 0;i<r.length;i++){
        sum+= r[i]
    }
    return sum
}
console.log(looper(3,4,5,6,7,5))

const num2 = [1,2,3,4,5,6,7,8,9]
num2.forEach((v,i,a)=>{
    console.log(v**2)
})

num2.forEach((v,i,a)=>{
    console.log(`${v**2} : ${i} => ${a}`)
})


const persons = [
    {Name: " Jonh Doe", email: "johndoe@gmail.com", Age: 20},
    {Name: " Jane Doe", email: "janedoe@gmail.com", Age: 20},
    {Name: " Mary Doe", email: "marydoe@gmail.com", Age: 20},
    {Name: " Joel Doe", email: "joeldoe@gmail.com", Age: 20},
    {Name: " Matthew Doe", email: "matthewdoe@gmail.com", Age: 20},
]

let x = persons.map((n)=>{
    return`${n.Name} : ${n.email}`
})
console.log(x)

let q = num2.map((n)=>{
    return(n**3)
})
console.log(q)

let even = num2.filter((m)=>{
    return m%2 == 0 
})
console.log(even)

let odd = num2.filter((m)=>{
    return m%2 != 0 
})
console.log(odd)

let g = num2.filter((m)=>{
    return m>4
})

console.log(g)

let gg = num2.find((m)=>{
    return m>7
})

console.log(gg)

let i = num2.findIndex((m)=>{
    return m>3
})
console.log(i)


let demo = [1,"null",2,"null",3,"null",4,5,6,7,8,"null"]
    let numb = demo.filter((m)=>{
        return m != "null"
    })
console.log(numb)

let s = numb.map((m)=>{
 return m**2
})
console.log(s)

const Name = ["ade","ola","uche","yahaya"]
let n = Name.map((m)=>{
        return m.toUpperCase()
   })
console.log(n)


