/**
 * Created by Kirary on 03.09.2017.
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';

import OperationCard from '../components/OperationCard';



class OperationsList extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let userOperationsArray = this.props.list.map(operation=>{
            return <OperationCard operation={operation} key={`operation_${operation.operation_id}`}/>
        });

        return (
            <Paper style={{padding: '15px 10px', flexGrow: 2, overflow: 'auto'}}>
                <p>Окно просмотра операций пользователя.</p>

                <ol>
                    Функции интерфейса:
                    <li>* Просмотр списка пользователей</li>
                    <li>Создание пользователя</li>
                    <li>Редактирование данных пользователя</li>
                    <li>* Просмотр операций пользователя</li>
                    <li>Изменение баланса пользователя</li>
                </ol>

                Два поля ввода даты:
                Период поиска операций
                <br/>
                Операции пользователя <span style={{fontWeight: 600}}>{this.props.name}</span>:
                {userOperationsArray}

            </Paper>
        );
    }
}

export default connect(
    state => ({
        list: state.operationList.list,
        name: state.operationList.name,
        data: state.operationList.data
    }),
    dispatch =>({})
)(OperationsList);
