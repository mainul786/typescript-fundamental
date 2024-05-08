{
    // extend korar por id, name, email gulo parameter hisabe pathatei hobe
    const addCourseToStudent = <T extends {id:number, name:string, email: string}>(student:T) =>{
        const course = "Next Level Web development Course";
        return {
            ...student,
            course,
        }
    }

    const student1 = addCourseToStudent({id:333, name:'Najiya Islam', email:'something@gmail.com'})
}