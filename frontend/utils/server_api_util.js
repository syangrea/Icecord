export const createServer = server => {
    return $.ajax({
        method: "POST", 
        url: "/api/servers",
        data: {
            server
        }
    })
}

export const updateServer = (server) => {
    return $.ajax({
        method: "PATCH", 
        url: `/api/servers/${server.id}`,
        data: {
            server
        }
    })
}

export const deleteServer = serverId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/servers/${serverId}`
    })
}

export const fetchServer = serverId => {
    return $.ajax({
        method: "GET",
        url: `/api/servers/${serverId}`
    })
}

export const joinServer = (link,id) => {
    return $.ajax({
        method: "POST",
        url: "/api/user_servers",
        data: {
            user_server: {
                link,
                id
            }
        }
    })
}

export const leaveServer = userServerId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/user_servers/${userServerId}`

    })
}