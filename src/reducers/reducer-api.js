export function get_resume(state="", action){
    switch (action.type) {
        case "API_GET_RESUME":
            return {data: action.payload,type: 'API_GET_RESUME'}
        default:
            return state
    }
}

export function get_tasks(state="", action){
    switch (action.type) {
        case "API_GET_TASKS":
            return {data: action.payload,type: 'API_GET_TASKS'}
        default:
            return state
    }
}