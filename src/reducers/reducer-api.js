export default function (state="", action){
    switch (action.type) {
        case "API_GET":
            return action.payload
        default:
            return state
    }
}