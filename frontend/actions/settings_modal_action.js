export const OPEN_SETTINGS_MODAL = "OPEN_SETTINGS_MODAL";
export const CLOSE_SETTINGS_MODAL = "CLOSE_SETTINGS_MODAL";

export const openSettingsModal = componentName => {
    return {
        type: OPEN_SETTINGS_MODAL,
        componentName
    }
}

export const closeSettingsModal = componentName => {
    return {
        type: CLOSE_SETTINGS_MODAL
    }
}