{
    const age: number = 18;

    if (age > 18) {
        console.log('your are elegible for Votting')
    } else {
        console.log(`not elegible for vote`)
    }

    const ageAll = age > 18 ? 'Elegible' : 'not Elegible';
    console.log(ageAll);

    //nullish 
    const isAuthenticated = null;

    const authenticated = isAuthenticated ?? 'gaste';
    console.log(authenticated)
}