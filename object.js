// Object is used to store related data in keys and values but arrays is like a cpontainer that store things just like div in html 

const obj ={
    name:"James Ebube ThankGod",
    gender:'male',
    age:'guess',
    complexion:'light skin'
};

let Phone ={
    brand:'samsung',
    model:'A26 utra',
    Price:800000,
}

// OBLJECT PROPERTY 
// Adding new property to an object using dot

Phone.colour='Blue'
console.log(Phone)

// Destructuring is a shortcut for pulling out values from an object and storing them in seperate variables. instead of writing object.key many times, 
// you extract them in one line

const {name,role, gende,age} =obj;
console.log(obj[name])


// SPREAD OPERATOR = TTo make copy of already existing object into another object is uses three dot (...)
let compound={
    outsidePaint:'Brown',
    insidePaint:'Yellow'
}

let room ={
    ...compound,
    width:'3m',
    height:'6ms',

}
console.log(room)
 