/**
 * Created by Kirary on 02.09.2017.
 */
const initialState = {
    loading: true,
    next: true,
    previous: false,
    list: [],
    recordsTotal: 10,
    page: 1
};

export default function userList(state = initialState, action) {
    switch (action.type){
        case 'USERS_GET_LIST_LOADING':
            return {
                ...state,
                loading: true,
                next: false,
                previous: false,
                page: action.payload
            };
        case 'USERS_GET_LIST_SUCCESS':
            let lastPage = Math.floor(action.payload.recordsTotal/10+1);
            return {
                ...state,
                loading: false,
                list: action.payload.data,
                recordsTotal: action.payload.recordsTotal,
                previous: state.page>1,
                next: state.page<lastPage,
                lastPage: lastPage
            };
        case 'USERS_GET_LIST_ERROR':
            return state;
        default: return state;
    }
}
