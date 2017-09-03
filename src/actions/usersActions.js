/**
 * Created by Kirary on 02.09.2017.
 */
import axios from 'axios';
import moment from 'moment';

export const getUserList = (page, limit) =>  dispatch => {
    dispatch({type: 'USERS_GET_LIST_LOADING', payload: page});
    axios.get('https://livedemo.xsolla.com/fe/test-task/baev/users', {
        params: {
            offset: (page-1)*10,
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

export const getUserOperations = (user, datetimeFrom, datetimeTo) => dispatch => {
    let datetime_from = moment(datetimeFrom).format();
    let datetime_to = moment(datetimeTo).format();
    dispatch({type: 'OPERATION_LIST_LOADING', payload: user});
    axios.get(`https://livedemo.xsolla.com/fe/test-task/baev/users/${user.id}/transactions`, {
        params: {
            datetime_from: datetime_from,
            datetime_to: datetime_to
        }
    })
        .then( response=>{
            dispatch({type: 'OPERATION_LIST_SUCCESS', payload: response.data});
        })
        .catch( error=>{
            dispatch({type: 'OPERATION_LIST_ERROR', payload: error});
        });
};
