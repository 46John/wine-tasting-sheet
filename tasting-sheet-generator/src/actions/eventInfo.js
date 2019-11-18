export const UPDATE_EVENT_INFO = 'UPDATE_EVENT_INFO';

export const updateEventInfo = (key, text) => {
    return {
        type : UPDATE_EVENT_INFO,
        key,
        text
    }
}
