/**
 * Created by Kirary on 02.09.2017.
 */
import { combineReducers } from 'redux';
import userList from './userList';
import operationList from './operationList';
import balanceDialog from './balanceDialog';
import userInfo from './userInfo';

export default combineReducers({
    userList,
    operationList,
    balanceDialog,
    userInfo
})