function greet(name) {
    console.log('Hello, ' + name);
}
(greet("Pedro"));

function circumference(diameter) {
    const pi = Math.PI;
    return pi * diameter;
}

console.log(circumference(12));

function balloon() {
    console.log('the balloons are coming');
    monkey();
    console.log('*balloon popping noises')

}

function monkey() {
    console.log('monkey spots balloons and throws dart')
}

balloon() // When ran, the first console.log in the balloon function appears first then followed by the console.log in the monkey function and lastly the second console.log in the balloon function
// The reason it appears in this order is because the call (monkey) after the first console.log in the balloon function outputs the console.log in the monkey function

function java() {
    console.log('JavaScript')
    java()
}

java()