import { UPDATE_EVENT_INFO } from '../actions/eventInfo';

const defaultState = {
        eventName : "",
        eventDate : "",
        eventTime : "",
        eventVenue : "",
        eventPresenter: ""
}

export const eventInfo = (state = defaultState, action) => {
    switch(action.type){
        case UPDATE_EVENT_INFO:
            return { ...state, [action.key] : action.text};
        default:
            return state;
    }
}