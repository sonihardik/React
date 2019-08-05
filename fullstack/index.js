/* let fname = "Hardik";
let lname = "Soni";
let age = prompt("What's Hardik's age ?");

let result = `${fname} ${lname} is ${age} years old`;
alert(result); */

/* function welcome(userName= "Guest", message="Good Day"){
    alert(`Hello ${userName} ${message}`);
}

//welcome("Harshita", 'Good Afternoon');
welcome(); */

let createBlog = (title, body) => {
    if(!title){
        throw new Error("A title is required");
    }
    if(!body){
        throw new Error("Body can't be empty");
    }
    return alert(`${title} - ${body}`);
};

createBlog("Title", "body");

