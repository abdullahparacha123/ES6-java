// const alertfunction = () => {
//     const number = prompt("select any number?");

//     if (number) {
//         document.write(`multiplication of the table ${number}:<br> `);
//         document.write(`${number} x 1 = ${number * 1}<br>`);
//         document.write(`${number} x 2 = ${number * 2}<br>`);
//         document.write(`${number} x 3 = ${number * 3}<br>`);
//         document.write(`${number} x 4 = ${number * 4}<br>`);
//         document.write(`${number} x 5 = ${number * 5}<br>`);
//         document.write(`${number} x 6 = ${number * 6}<br>`);
//         document.write(`${number} x 7 = ${number * 7}<br>`);
//         document.write(`${number} x 8 = ${number * 8}<br>`);
//         document.write(`${number} x 9 = ${number * 9}<br>`);
//         document.write(`${number} x 10 = ${number * 10}<br>`);
//     }
//     else{
//         document.write(`you did'nt enter any number..`)
//     }
// }




const tablegenrate = () => {
    let num = prompt("enter a number");
    let num2 = prompt("enter a second number");
    for (let index = 1; index <=num2; index++) {
        document.write(`${num} x ${index} = ${num * index}<br>`)

    }
}