/**
 * Created by Kirary on 02.09.2017.
 */
import axios from 'axios';

export const getUserList = (page, limit) =>  dispatch => {
    dispatch({type: 'USERS_GET_LIST_LOADING', payload: page});
    axios.get('https://livedemo.xsolla.com/fe/test-task/baev/users', {
        params: {
            offset: (page-1)*10,//вычислять
            limit: limit
        }
    })
        .then( response=>{
            dispatch({type: 'USERS_GET_LIST_SUCCESS', payload: response.data});
        })
        .catch( error=>{
            dispatch({type: 'USERS_GET_LIST_ERROR', payload: error});
        });



};