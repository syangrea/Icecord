export const SERVER_CLICK = "SERVER_CLICK";
export const LANDING_NAV_CLICK = "LANDING_NAV_CLICK"
export const CHANNEL_CLICK = "CHANNEL_CLICK"
export const SET_CURRENT_CHANNEL = "SET_CURRENT_CHANNEL"

export const serverClick = serverId => {
    return {
        type: SERVER_CLICK,
        serverId
    }
} 

export const landingNavClick = id => {
    return {
        type: LANDING_NAV_CLICK,
        id
    }
}

export const channelClick = channelId => {
    return {
        type: CHANNEL_CLICK,
        channelId
    }
}

export const setCurrentChannel = channelId => {
    return {
        type: SET_CURRENT_CHANNEL,
        channelId
    }
}