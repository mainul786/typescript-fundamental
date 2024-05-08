{
    // Asynchronous Typescript

    type Todo = {
        userId: number;
        id: number;
        title: string;
        completed: boolean
    }

    // const todo = async ()  =>{
    //     const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    //     const data = await res.json()
    //    console.log(data)
    // }
    const todo = async (): Promise<Todo> => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        const data = await res.json()
        return data;
    }

    todo();
}