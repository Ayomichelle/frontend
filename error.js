const square = function(n){
    if(typeof n != Number)
        console.log("Numbers are required")
    else{
        return n**2
    }   
}

console.log(square(4))
console.log(square("Jhon Doe"))
console.log("Good Morning")

try{
    console.lo(square(3,5,6))
}
catch(error){
    console.log(`${error.name}:${error.messsage}`)
}


try{
    console.log(square("halo"))
     if (error==NaN){
     console.log("please input a number")
    }
}
catch(error){
    console.log(`${error.name}:${error.messsage}`)
   
}

 

let city = "jabi"
if(city == "Abuja"){
    console.log("you live in Abuja")
}
else if(city == "Gwarinpa"){
    console.log("You live in Gwarinpa")

}
else if(city == "Jahi"){
    console.log("You live in Jahi")
}
else{console.log("You live in Kaduna")}


let city2 = 3
switch(city2){
    case 1:
        console.log("you live in abuja")
        break;
    case 2:
        console.log("you live in Gwarinpa")
        break;
    case 3:
        console.log("you live in Jahi")
        break;
    case 4:
        console.log("you live in Kaduna")
        break;
    default: 
    console.log("You live in Nigeria")
}

let jambScore = 220

if ( jambScore >= 200) {
  console.log("You may apply for any universitiy")
} 
else if (jambScore <= 150){
  console.log("You may have to rewrite");
} 
else{
  console.log("You may be admitted to some universities");
}

