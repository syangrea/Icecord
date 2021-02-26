

export const getPrivateServers = state => {
    return Object.values(state.entities.servers).filter(server => {
            return server.directMessage
        })
}

export const getDMUsers = state => {
    let privateServers = getPrivateServers(state)

    let dmUserServers = Object.values(state.entities.userServers).filter(userServer => {
        return privateServers.some(server => {
            return server.id === userServer.serverId
        })
    })
    
    let users = {};
    dmUserServers.forEach(userServer => {
        users[userServer.serverId] = users[userServer.serverId] || [];
        users[userServer.serverId].push(state.entities.users[userServer.userId]);
    })
    return users

}

export const getDMChannels = state => {
    let privateServers = getPrivateServers(state)

    let channels = {};
    Object.values(state.entities.channels).filter(channel => {
        privateServers.forEach(server => {
            if(server.id === channel.serverId){
                channels[server.id] = channel;
            }
        })
        
    })
    return channels;
}