export const createServer = server => {
    return $.ajax({
        method: "POST", 
        url: "/api/servers",
        data: {
            server
        }
    })
}

export const updateServer = (serverId, server) => {
    return $.ajax({
        method: "PATCH", 
        url: `/api/servers/${serverId}`,
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