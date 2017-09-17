/**
 * Created by Kirary on 02.09.2017.
 */
const initialState = {
    selected: false,
    loading: false
};

export default function userInfo(state = initialState, action) {
    switch (action.type){
        case 'SELECTED_USER_INFO_LOADING':
            debugger;
            return {
                ...state,
                selected: true,
                loading: true
            };
        case 'SELECTED_USER_INFO_LOADED':
            return {
                ...state,
                loading: false,
                ...action.payload
            };
        default: return state;
    }
}
