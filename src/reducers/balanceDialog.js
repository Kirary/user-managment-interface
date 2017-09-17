/**
 * Created by Kirary on 02.09.2017.
 */
const initialState = {
  opened: false,
};

export default function balaneDialog(state = initialState, action) {
    switch (action.type){
        case 'DIALOG_OPEN':
            return {
                ...state,
                opened: true,
            };
        case 'DIALOG_CLOSE':
        case 'UPDATE_BALANCE':
            return {
                ...state,
                opened: false,
            };
        default: return state;
    }
}
