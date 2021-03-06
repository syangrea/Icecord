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
    
    return $.ajax({
        method: "PATCH",
        url: `/api/users/${currentUserId}`,
        data: userFormData,
        contentType: false,
        processData: false
    })
}

export const fetchUser = userId => {
    return $.ajax({
        method: "GET",
        url: `/api//users/${userId}`
    })
}