/*export default function (state="", action){
    console.log("REDUCERRRR");
    console.log('Action',action);
    switch (action.type) {
        case "API_GET_TEXT":
            return {data: action.payload,type: 'API_GET_TEXT'}
        case "API_GET_RESUME":
            console.log("get resume");
            return {data: action.payload,type: 'API_GET_RESUME'}
        default:
            return state
    }
}*/



export function get_resume(state="", action){
    switch (action.type) {
        case "API_GET_RESUME":
            console.log("get resume");
            return {data: action.payload,type: 'API_GET_RESUME'}
        default:
            return state
    }
}


/*function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            })
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if (index === action.index) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        })
                    }
                    return todo
                })
            })
        default:
            return state
    }
}*/