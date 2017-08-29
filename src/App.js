import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import UserList from './components/UserList';
import {getUserOperations} from './wallet';

import './App.css';

class App extends Component {
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
            return <Paper style={{marginBottom:10, padding:'10px 15px', fontSize: 12}} key={`operation_${operation.operation_id}`}>
                <div>STATUS: {operation.status}</div>
                <div style={{display:'flex'}}>
                    <div>operation_id: {operation.operation_id}</div>
                    <div style={{marginLeft:'auto'}}>{new Date(operation.date).toLocaleString()}</div>
                </div>
                <div style={{display:'flex'}}>
                    <div>
                        amount:
                        <span style={{color: operation.amount >= 0 ? 'green' : 'red'}}>
                            {operation.amount}
                        </span>
                    </div>
                    <div style={{marginLeft: 25}}>
                        user_balance:
                        <span style={{color: operation.user_balance >= 0 ? 'green' : 'red'}}>
                            {operation.user_balance}
                        </span>
                    </div>
                    <div style={{marginLeft: 25}}>sum: {operation.sum}</div>
                    <div style={{marginLeft: 25}}>currency: {operation.currency}</div>
                </div>
                <div>comment: {operation.comment}</div>
                <Divider/>
                Купон
                <div style={{display:'flex'}}>
                    <div>coupon_id: {operation.coupon_id}</div>
                    <div style={{marginLeft:'auto'}}>coupon_code {operation.coupon_code}</div>
                </div>
                <Divider/>
                <div style={{display:'flex'}}>
                    <div>transaction_id: {operation.transaction_id}</div>
                    <div style={{marginLeft:'auto'}}>transaction_type {operation.transaction_type}</div>
                </div>
            </Paper>
        });

        return (
            <MuiThemeProvider>
              <div className="App">
                <span style={{fontWeight:600, fontSize: 20, textAlign: 'center'}}>User Management Interface</span>
                <p>Интерфейс для взаимодействия с информацией о пользователях</p>
                <div style={{display:'flex', height: '85vh'}}>
                  <UserList getUserOperations={this.getUserOperations}/>

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
                </div>



              </div>

            </MuiThemeProvider>
        );
    }
}

export default App;
