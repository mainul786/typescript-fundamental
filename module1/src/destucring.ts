{
    // destrucring of Object

    const user = {
        name: 'Najiya Islam',
        user1: {
            firstName: 'najiya',
            lastName: 'islam'
        }
    }

    const {name, user1:{firstName}} = user;

    // Array Destructring 

    const friends = ['jakir', 'rinku', 'sagir', 'arif', 'mahatab'];
    const [,,loserfriend, ...rest] = friends;
}