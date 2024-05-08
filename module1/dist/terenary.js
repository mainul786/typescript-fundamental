"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    const age = 18;
    if (age > 18) {
        console.log('your are elegible for Votting');
    }
    else {
        console.log(`not elegible for vote`);
    }
    const ageAll = age > 18 ? 'Elegible' : 'not Elegible';
    console.log(ageAll);
    //nullish 
    const isAuthenticated = null;
    const authenticated = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'gaste';
    console.log(authenticated);
}
