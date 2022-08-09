// Declared a javascript objects
let user = {
    name: 'Shubho Ahmed',
    age: 24,
    email: 'shabc@gmail.com',
    blog: 'this is a blog',
    login: function () {
        console.log('log in successful.')
    }
}
user.login();

// show js as output
console.log(user);
// show a single property value from objects
let seeSingle = user.age;
let anoterWay = user['blog'];
// console.log(seeSingle, anoterWay);

// change a property value from objects
user.age = 25;
user['age'] = 50;
console.log(user.age);
//using type
console.log(typeof user);
console.log(user['blog']);