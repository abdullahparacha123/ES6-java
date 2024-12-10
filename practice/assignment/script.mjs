const alertFunction = () => {
    const name = prompt("What is your name?", "Name");
    if (name) {
        document.write(`My name is ${name}`);
    }
    
    const age = prompt("What is your age?", "18");
    if (age < 18) {
        return document.write(` i am ${age} years old and is a minor.`);
    } 
    if (age > 18) {
        return document.write(` i am  ${age} years old and is an adult.`);
    }
    };