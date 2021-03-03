export const patchUser = user => {
    return $.ajax({
        method: "PATCH",
        url: `/api/users/${user.id}`,
        data: {
            user: user
        }
    })
}
export const patchUserPhoto = (userFormData,currentUserId) => {
    // debugger
    return $.ajax({
        method: "PATCH",
        url: `/api/users/${currentUserId}`,
        data: userFormData,
        contentType: false,
        processData: false
    })
}