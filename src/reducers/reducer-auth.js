export default function (state="", action){
    switch (action.type) {
        case "AUTH_LOGIN":
            console.log("Payload",action.payload);
            return action.payload
        case "AUTH_LOGOUT":
            return action.payload
        default:
            return state
    }
}