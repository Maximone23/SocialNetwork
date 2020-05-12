
let initialState =  {
    friends: [{
        id: 1,
        name: 'Dmitry'
    },
        {
            id: 2,
            name: 'Andrey'
        },
        {
            id: 3,
            name: 'Alexandra'
        },
        {
            id: 4,
            name: 'Victor'
        },
        {
            id: 5,
            name: 'Anna'
        }
    ]
};
const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;