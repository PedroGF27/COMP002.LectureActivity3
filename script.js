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
    console.log('monkey spots balloons')
}

balloon()

function java() {
    console.log('JavaScript')
    java()
}

java()