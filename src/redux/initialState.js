const initialState = {
    columns: [
        {
            id: '1',
            listId: '1',
            title: 'Books',
            icon: 'book',
        },
        {
            id: '2',
            listId: '1',
            title:'Movies',
            icon:'film',
        },
        {
            id: '3',
            listId: '1',
            title:'Games',
            icon:'gamepad',
        },
        {
            id: '4',
            listId: '2',
            title: 'Songs',
            icon: 'music',
        }
    ],
    cards:[
        {id:'1',columnId:'1',title:'ThisisGoingtoHurt'},
        {id:'2',columnId:'1',title:'InterpreterofMaladies'},
        {id:'3',columnId:'2',title:'HarryPotter'},
        {id:'4',columnId:'2',title:'StarWars'},
        {id:'5',columnId:'3',title:'TheWitcher'},
        {id:'6',columnId:'3',title:'Skyrim'}
    ],
    lists: [
        {
          id: '1',
          title: 'Things to do...',
          description: 'Interesting things I want to check out'
        },
       {
          id: '2',
          title: 'Test list',
          description: 'Lorem Ipsum'
       }
    ],
    searchString: "",

};
export default initialState;