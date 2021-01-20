export const parseErrors = state => {
    let email = state.errors.session.filter(error => {
        return error.includes("Email")
    }).join(", ");
    let username = state.errors.session.filter(error => {
        return error.includes("Username")
    }).join(", ");
    let password = state.errors.session.filter(error => {
        return error.includes("Password")
    }).join(", ");
    return {
        email, username, password
    }

}