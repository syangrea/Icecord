export const getMembers = (state, serverId) => {
    
    let uServers = Object.values(state.entities.userServers).filter(userServer => {
            return userServer.serverId === serverId;
        })
        
    let users = uServers.map(userServer => {
            
            return state.entities.users[userServer.userId];
        })
    return users;
}

export const getUserServer = (state, serverId) => {
    
    return Object.values(state.entities.userServers)
        .find(userServer => {
            return userServer.userId === state.session.id
                && userServer.serverId === serverId
        })
}

export const getCurrentUserServers = state => {
    let currentUserId = state.session.id;
    let servers = state.entities.servers;
    let currentUserServers = [];
    Object.values(state.entities.userServers).forEach(userServer => {
        if(!!servers[userServer.serverId] && userServer.userId === currentUserId 
            && !servers[userServer.serverId].directMessage){
                currentUserServers.push(servers[userServer.serverId]);
            }
    })
    
    return currentUserServers;
}