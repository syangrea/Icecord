export const getChannelsInServer = (state, serverId) => {
    return Object.values(state.entities.channels).filter(channel => {
        return channel.serverId === serverId
    })
}