export const increment = (data) => {
    console.log("Increase by One",data);
    return{
        type: "COUNTER_INCREMENT",
        payload: data
    }
}

export const decrement = (data) => {
    console.log("Decrement by One",data);
    return{
        type: "COUNTER_DECREMENT",
        payload: data
    }
}