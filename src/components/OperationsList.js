/**
 * Created by Kirary on 03.09.2017.
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';

import OperationCard from '../components/OperationCard';
import UserInfoHeader from '../components/UserInfoHeader';




class OperationsList extends Component {
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

        let userInfoHeader = this.props.data ? <UserInfoHeader {...this.props.data} /> : <div style={{textAlign:'center', fontSize: 14}}>выберите пользователя из списка</div>;

        return (
            <Paper style={{flexGrow: 2, display: 'flex', flexDirection: 'column'}}>
                <div style={{padding: '15px 10px', flex: 'none', height: 120, background: '#8D7BB7', color: 'white'}}>
                    <div style={{textAlign:'center', fontWeight: 600, marginBottom: 10}}>Окно просмотра операций пользователя</div>
                    {userInfoHeader}
                </div>

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
        loading: state.operationList.loading
    }),
    dispatch =>({})
)(OperationsList);
