const sayHello = () => {
    return "Hello";
};
console.log(sayHello());
const sayHelloToPerson = (greeter, person) => {
    return greeter() + "" + person;
};
console.log(sayHelloToPerson(sayHello, "jack"));