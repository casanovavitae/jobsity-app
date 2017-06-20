export const increment = (data) => {
    return{
        type: "COUNTER_INCREMENT",
        payload: data
    }
}

export const decrement = (data) => {
    return{
        type: "COUNTER_DECREMENT",
        payload: data
    }
}