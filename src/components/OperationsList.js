/**
 * Created by Kirary on 03.09.2017.
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';

import OperationCard from '../components/OperationCard';



class OperationsList extends Component {
    render() {
        let userOperationsArray = this.props.list.map(operation=>{
            return <OperationCard operation={operation} key={`operation_${operation.operation_id}`}/>
        });

        return (
            <Paper style={{padding: '15px 10px', flexGrow: 2, overflow: 'auto', display: 'flex', flexDirection: 'column'}}>
                <div>Окно просмотра операций пользователя.</div>

                <div>
                    Функции интерфейса:
                    <div>* Просмотр списка пользователей</div>
                    <div>Создание пользователя</div>
                    <div>Редактирование данных пользователя</div>
                    <div>* Просмотр операций пользователя</div>
                    <div>Изменение баланса пользователя</div>
                </div>
                <div>
                Два поля ввода даты:
                Период поиска операций
                </div>
                <div>
                Операции пользователя <span style={{fontWeight: 600}}>{this.props.name}</span>:
                </div>
                {this.props.loading ? <CircularProgress style={{margin: '150px auto'}}/> : userOperationsArray}
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
