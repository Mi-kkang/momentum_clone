// let a = 5;
// const b = 2;
// const myName = 'sh';

// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log('hello '+myName);


// const player = {
//     name:'seunghui',
//     points: 10,
//     age: 26,
//     student: true,
// };
// console.log(player);
// console.log(player.name);
// console.log(player['name']);

// console.log(player);
// player.points = 20;
// console.log(player);

// player.home = 'Incheon';
// console.log(player);


// function sayHello(name){
//     console.log('Hello my name is ' + name);
// }

// sayHello('Ritsu');

const player = {
    name : 'Ritsu',
    sayHello:function(otherName){
        console.log('Hello ' + otherName + ' nice to meet you!');
    },
};

console.log(player.name);
player.sayHello('Roku');