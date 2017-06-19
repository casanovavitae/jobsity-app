export function get_resume(state="", action){
    switch (action.type) {
        case "API_GET_RESUME":
            console.log("get resume");
            return {data: action.payload,type: 'API_GET_RESUME'}
        default:
            return state
    }
}

export function get_tasks(state="", action){
    switch (action.type) {
        case "API_GET_TASKS":
            console.log("get tasks");
            return {data: action.payload,type: 'API_GET_RESUME'}
        default:
            return state
    }
}

export function put_task(state="", action){
    switch (action.type) {
        case "API_PUT_TASKS":
            console.log("put tasks");
            return {data: action.payload,type: 'API_PUT_TASKS'}
        default:
            return state
    }
}
