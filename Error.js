
// Syntax error
// let add = 2+3-(4+5
// console.log(add);



// // Reference error 
// let myName ="James Ebube ThankGod"
// console.log(name)


// Type error means that you are using a value or method in a wrong way


// Try and Catch


// try {
//     let result = 10 / 2;
//     console.log(result);
//     undefinedFunction();
//     console.log("This line will not run");

//     let fire = "MY personality";
//     console.log(water)
// } catch (err) {
//     // This runs Only if something is wrong
//     console.log("An error occcured: " + err.message + " " + err.name);
// }
// console.log("The Program continues here.")



// function loadUserData() {
//     console.log("Starting to load data...")

//     try {
//         if (userId <= 0){
//             throw new Error("User ID must be greater than 0");
//         }
//         console.log("Data loaded for user:" + userId);
//     } catch (error) {
//         console.log("Failed: " + error.message);
//     } finally {
//         console.log("Loading complete. closing connecetion."); // ALWAYAS RUNS
//     }
// }

// loadUserData(5);
// // loadUserData(-1)

function registerNewStudent (name, age){
    try{
        if (!name){
            throw new Error("Nam must not be empty!");
        }
        if(age <16 || age >60) {
            throw new Error("Age must be between 16 and 60. Got:" + age);
        }
        console.log("Student registered: "+ name +", Age:" + age );
    } catch(error){
        console.log("Registerion failed : " + error.message)
    }
}

registerNewStudent("JET", 28);
registerNewStudent("",22)
registerNewStudent("kemi", 12)
registerNewStudent()



try {
    // Code that might fail goes here
    let result = 10 / 2;
    console.log(result);
    console.log("This line will NOT run.");
} catch (err) {
    // This runs ONLY if something goes wrong
    console.log("An error occurred: " + err.message + " " + err.name);
}

console.log("The program continues here.");

function loadUserData(userId) {
    console.log("Starting to load data...");
    try {
        if (userId <= 0) {
            throw new Error("User ID must be greater than 0");
        }
        console.log("Data loaded for user: " + userId);
    } catch (error) {
        console.log("Failed: " + error.message);
    } finally {
        console.log("Loading complete. Closing connection."); // ALWAYS runs
    }
}

loadUserData(5);   // Data loaded for user: 5  -->  Loading complete.
loadUserData(-1);  // Failed: User ID must be...  -->  Loading complete.


function registerStudent(name, age) {
    try {
        if (!name) {
            throw new Error("Name cannot be empty!");
        }
        if (age < 16 || age > 60) {
            throw new Error("Age must be between 16 and 60. Got: " + age);
        }
        console.log("Student registered: " + name + ", Age: " + age);
    } catch (error) {
        console.log("Registration failed: " + error.message);
    }
}

registerStudent("Bola Okafor", 22); // Student registered: Bola Okafor, Age: 22
registerStudent("", 22);            // Registration failed: Name cannot be empty!
registerStudent("Kemi", 12);        // Registration failed: Age must be between 16 and 60.

