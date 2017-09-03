/**
 * Created by Kirary on 03.09.2017.
 */

import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import {getUserOperations} from '../wallet';
import OperationCard from '../components/OperationCard';



class OperationsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            userOperationsList: [],
            user_name: null
        };
        this.getUserOperations = this.getUserOperations.bind(this);
    }

    getUserOperations(user_id, user_name){
        getUserOperations(user_id).then( response=>{
            this.setState({userOperationsList:response.data, user_name:user_name});
        })
            .catch( error=>{
                console.log(error);
            });
    }

    render() {
        let userOperationsArray = this.state.userOperationsList.map(operation=>{
            return <OperationCard operation={operation}/>
        });

        return (
            <Paper style={{padding: '15px 10px', flexGrow: 2}}>
                <p>Окно просмотра операций пользователя.</p>

                <ol>
                    Функции интерфейса:
                    <li>* Просмотр списка пользователей</li>
                    <li>Создание пользователя</li>
                    <li>Редактирование данных пользователя</li>
                    <li>* Просмотр операций пользователя</li>
                    <li>Изменение баланса пользователя</li>
                </ol>

                Операции пользователя <span style={{fontWeight: 600}}>{this.state.user_name}</span>:
                {userOperationsArray}

            </Paper>
        );
    }
}

export default OperationsList;
