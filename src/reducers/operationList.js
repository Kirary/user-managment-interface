/**
 * Created by Kirary on 03.09.2017.
 */

const initialState = {
    loading: false,
    list: [],
    name: '',
    data: 0,
    amount: 0,
    updateList: false
};

export default function operationList(state = initialState, action) {
    switch (action.type){
        case 'OPERATION_LIST_LOADING':
            return {
                ...state,
                loading: true,
                name: action.payload.name,
                data: action.payload.data,
                // amount: action.payload.data.balance,
                updateList: false
            };
        case 'INIT_AMOUNT':
            return {
                ...state,
                amount: action.payload.balance
            };
        case 'OPERATION_LIST_SUCCESS':
            return {
                ...state,
                loading: false,
                list: action.payload
            };
        case 'OPERATION_LIST_ERROR':
            return state;
        case 'UPDATE_BALANCE':
            debugger;
            return {
                ...state,
                amount: action.payload.amount,
                updateList: true
            };
        default: return state;
    }
}
