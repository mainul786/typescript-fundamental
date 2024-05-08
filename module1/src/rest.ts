{
    // rest operator and spreed operator
const user: string[] = ["najiya", 'ramiz', 'attab'];
const user1: string[]= ["sonamuni", 'asma', 'rajib'];

console.log(user.push(...user1))

const obj = {
    name:'saban',
    age: 20,
    isadmin: true
}
const obj1 = {
    name:'sabana khatun',
    ageName: 45,
    isAmi: false
}

const allobj = {
    ...obj,
    ...obj1
}

const greetFriends = (...friends:string[]) =>{
    friends.forEach((friend:string) => console.log(friend));
}

greetFriends('najiya', 'sabana', 'hadisa')

}

