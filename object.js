// Object is used to store related data in keys and values but arrays is like a cpontainer that store things just like div in html 

const obj = {
    name: "James Ebube ThankGod",
    gender: 'male',
    age: 'guess',
    complexion: 'light skin'
};

let Phone = {
    brand: 'samsung',
    model: 'A26 utra',
    Price: 800000,
}

// OBLJECT PROPERTY 
// Adding new property to an object using dot

Phone.colour = 'Blue'
console.log(Phone)

// Deleting property in an object
delete Phone.colour
console.log(phone)

// Destructuring is a shortcut for pulling out values from an object and storing them in seperate variables. instead of writing object.key many times, 
// you extract them in one line

const { name, role, gende, age } = obj;
console.log(obj[name])


// SPREAD OPERATOR = TTo make copy of already existing object into another object is uses three dot (...)
let compound = {
    outsidePaint: 'Brown',
    insidePaint: 'Yellow'
}

let room = {
    ...compound,
    width: '3m',
    height: '6ms',

}
console.log(room)



////    FROM ESTER
const obj = {
    name: 'OGBU UZOMA ESTHER',
    gender: 'non-binary',
    age: 30,
    complexion: 'dark'
};

//adding props to the object
let phone = {
    brand: "Samsung",
    model: "Galaxy S22",
    price: 350000
};

phone.color = "Black";
console.log(phone);

let student = {
    name: "Godwin",
    regNo: "C8/001",
    course: "JavaScript",
    year: 2024,
    friends : ["John", "Jane", "Doe"]
}
console.log(student);
student.gender = "Male";
console.log(student);
student.course = "Node.js";
console.log(student);
delete student.year;
console.log(student);

let employee = {
    name: "Tunde Balogun",
    role: "Frontend Developer",
    salary: 450000,
    city: "Lagos"
};

let hisName = employee.name;
let hisRole = employee.role;
let hisSalary = employee.salary;
let hisCity = employee.city;

const { name:userName, role:job, salary, city } = employee;

let DNA = {
    gender : "XY",
    complexion : "Dark"
}

let offSpring = {
    ...DNA,
    name : "OGBU UZOMA ESTHER",
    age : 30
}
console.log(offSpring);

console.log(Object.keys(offSpring));
console.log(Object.values(offSpring));
console.log(Object.entries(offSpring));