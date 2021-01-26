export const SERVER_CLICK = "SERVER_CLICK";

export const serverClick = serverId => {
    return {
        type: SERVER_CLICK,
        serverId
    }
} 