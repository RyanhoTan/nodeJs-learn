const username = 'ryanho';

function sayHello() {
    console.log(`Hello, ${username}!`);
    console.log('Welcome to Node.js module system!');
}

module.exports = {
    nickname: 'Ryan',
}

module.exports.username = username;
module.exports.sayHello = sayHello;