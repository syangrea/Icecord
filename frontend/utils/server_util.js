export const getMembers = (state, serverId) => {
    
    return Object.values(state.entites.userServers).filter(userServer => {
            return userServer.serverId === serverId;
        }).map(userServer => {
            return state.entities.users[userServer.userId];
        })
    
}