// Implicit return of an object
const registerUser = userid => ({
    type: "REGISTER_USER",
    payload: userid
})

export default registerUser