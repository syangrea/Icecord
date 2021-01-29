export const getChannelMessages = (state, channelId) => {
    // debugger
    let channelMessages = Object.values(state.entities.messages).filter(message => {
        return message.channelId === channelId
    })

    return channelMessages;

}