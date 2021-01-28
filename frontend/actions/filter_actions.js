export const SERVER_CLICK = "SERVER_CLICK";
export const LANDING_NAV_CLICK = "LANDING_NAV_CLICK"

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