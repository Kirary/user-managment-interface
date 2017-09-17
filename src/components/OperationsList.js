/**
 * Created by Kirary on 03.09.2017.
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';

import OperationCard from '../components/OperationCard';
import UserInfoHeader from '../components/UserInfoHeader';
import {getUserOperations} from '../actions/usersActions';




class OperationsList extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.updateList){
            this.props.onGetOperationList(
                {id: nextProps.data.user_id, name: nextProps.name, data: nextProps.data},
                nextProps.data.register_date,
                new Date().toISOString()
            );
        }
    }
    render() {
        let userOperationsArray = this.props.list.map(operation=>{
            return <OperationCard operation={operation} key={`operation_${operation.operation_id}`}/>
        });

        let dataShown='';
        if (userOperationsArray.length > 0){
            dataShown = userOperationsArray.reverse();
        } else if (this.props.data){
            dataShown = <div>У данного пользователя отсутствует история транзакций</div>
        }

        let chooseUser = !this.props.data;

        return (
            <Paper style={{flexGrow: 2, display: 'flex', flexDirection: 'column'}}>

                <UserInfoHeader {...this.props.data} chooseUser={chooseUser}/>

                {this.props.loading ?
                    <CircularProgress style={{margin: '150px auto'}}/> :
                    <div style={{overflow: 'auto', flexGrow: 1, padding: '15px 10px'}}>{dataShown}</div>
                }

            </Paper>
        );
    }
}

export default connect(
    state => ({
        list: state.operationList.list,
        name: state.operationList.name,
        data: state.operationList.data,
        loading: state.operationList.loading,
        updateList: state.operationList.updateList
    }),
    dispatch =>({
        onGetOperationList: (user, tFrom, tTo) => {
            dispatch(getUserOperations(user, tFrom, tTo));
        }})
)(OperationsList);
