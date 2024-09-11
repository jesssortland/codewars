//Hello, Name or World!
//https://www.codewars.com/kata/57e3f79c9cb119374600046b

function hello(name) {
    return name ? 'Hello, ' + name[0].toUpperCase() + name.substr(1).toLowerCase() + '!' : 'Hello, World!';
};

console.log(hello('jEss'));