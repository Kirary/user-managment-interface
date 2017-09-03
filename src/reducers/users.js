/**
 * Created by Kirary on 02.09.2017.
 */
const initialState = [

];

export default function users(state = initialState, action) {
    switch (action.type){
        case 'GET_USER_LIST':
            return state;
        default: return state;
    }
}
