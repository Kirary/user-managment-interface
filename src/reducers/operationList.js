/**
 * Created by Kirary on 03.09.2017.
 */

const initialState = {
    loading: false,
    list: [],
    name: '',
    data: 0
};

export default function operationList(state = initialState, action) {
    switch (action.type){
        case 'OPERATION_LIST_LOADING':
            debugger;
            return {
                ...state,
                loading: true,
                name: action.payload.name,
                data: action.payload.data,
            };
        case 'OPERATION_LIST_SUCCESS':
            return {
                ...state,
                loading: false,
                list: action.payload,
            };
        case 'OPERATION_LIST_ERROR':
            return state;
        default: return state;
    }
}
