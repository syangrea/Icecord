

export const serversNotAMember = state => {
    let currentUserId = state.session.id;
    let userServers = Object.values(state.entities.userServers);
    return Object.values(state.entities.servers).filter(server => {
        return !userServers.some((userServer) => {
            return userServer.serverId === server.id && userServer.userId === currentUserId
        }) 
    })
}

// export const defaultChannelId = serverId => {
//     return Object.values(state.entities.channels).filter(channel => {
//         return channel.serverId === serverId
//     })[0].id
// }