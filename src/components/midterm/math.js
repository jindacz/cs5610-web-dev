export const add = (a, b) => a + b
export const subtract = (a, b) => {
    return a - b
}
export const multiply = (a, b) => {
    const c = a * b
    return c
}

const api = {
    add: add,
    subtract,
    multiply: multiply,
    PI: 3.14159
}

export default api;