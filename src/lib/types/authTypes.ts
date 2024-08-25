export interface User {
    user: {
        id: number
        name: string
        email: string
    } 
    token: string
}
export interface signinParams {
    email: string
    password: string
}