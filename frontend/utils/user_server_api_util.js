export const joinServer = link => {
    return $.ajax({
        method: "POST",
        url: "/api/user_servers",
        data: {
            user_server: {
                link
            }
        }
    })
}

export const leaveServer = userServerId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/user_servers/${userServerId}`,

    })
}