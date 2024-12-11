const alertfunction = () => {
    const name = prompt("What is your name?", "Name");
    if (name) {
        document.write(`My name is ${name}.<br>`);
    }
    const age = prompt("What is your age?", "age" );
    if (age < 20) {
        document.write(`I am ${age} years old and I am not adult .<br>`);
    }
    if (age > 20) {
        document.write(`I am ${age} years old and I am adult .<br>`);
    }
    const surname = prompt("what is your surname?", "surname")
    if (surname) {
        document.write(`My surname is ${surname}.<br>`)
    }
    const language = prompt("what is your language?", "language")
    if (language) {
        document.write(`My language is ${language}.<br>`)
    }
    const cast = prompt("what is your cast?", "cast")
    if (cast) {
        document.write(`My cast is ${cast}.<br>`)
    }

}