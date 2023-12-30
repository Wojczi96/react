const initialState = {
    columns: [
        {
            id: 1,
            title: 'Books',
            icon: 'book',
        },
        {
            id: 2,
            title:'Movies',
            icon:'film',
        },
        {
            id:3,
            title:'Games',
            icon:'gamepad',
        }
    ],
    cards:[
        {id:1,columnId:1,title:'ThisisGoingtoHurt'},
        {id:2,columnId:1,title:'InterpreterofMaladies'},
        {id:3,columnId:2,title:'HarryPotter'},
        {id:4,columnId:2,title:'StarWars'},
        {id:5,columnId:3,title:'TheWitcher'},
        {id:6,columnId:3,title:'Skyrim'}
    ],
    searchString: "",

};
export default initialState;