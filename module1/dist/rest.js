"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    // rest operator and spreed operator
    const user = ["najiya", 'ramiz', 'attab'];
    const user1 = ["sonamuni", 'asma', 'rajib'];
    console.log(user.push(...user1));
    const obj = {
        name: 'saban',
        age: 20,
        isadmin: true
    };
    const obj1 = {
        name: 'sabana khatun',
        ageName: 45,
        isAmi: false
    };
    const allobj = Object.assign(Object.assign({}, obj), obj1);
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(friend));
    };
    greetFriends('najiya', 'sabana', 'hadisa');
}
