import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import {userList} from './wallet';
import UserList from './components/UserList';

import './App.css';

const usersJSON = [
    {
        "user_id": "-00001",
        "user_name": "Алексей",
        "user_custom": "Алексей Степанов DD",
        "email": "BssClient@gmail.com",
        "register_date": "2017-08-14T18:10:13+00:00",
        "balance": 1256,
        "wallet_amount": 0,
        "wallet_currency": "USD",
        "enabled": true
    },
    {
        "user_id": "-00001",
        "user_name": "Алексей",
        "user_custom": "Алексей Степанов DD",
        "email": "BssClient@gmail.com",
        "register_date": "2017-08-14T18:10:13+00:00",
        "balance": 1256,
        "wallet_amount": 0,
        "wallet_currency": "USD",
        "enabled": true
    },
    {
        "user_id": "-00001",
        "user_name": "Алексей",
        "user_custom": "Алексей Степанов DD",
        "email": "BssClient@gmail.com",
        "register_date": "2017-08-14T18:10:13+00:00",
        "balance": 1256,
        "wallet_amount": 0,
        "wallet_currency": "USD",
        "enabled": true
    }
];

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
              <div className="App">
                <span style={{fontWeight:600, fontSize: 20, textAlign: 'center'}}>User Management Interface</span>
                <p>Интерфейс для взаимодействия с информацией о пользователях</p>

                <div onClick={()=>[userList(0,10)]}>
                  test
                </div>

                <div style={{display:'flex', height: '85vh'}}>
                  <UserList/>

                  <Paper style={{padding: '15px 10px', flexGrow: 2}}>
                    <p>Окно просмотра операций пользователя.</p>
                    <p>окно создания пользователя/</p>
                    <p>редактирования пользователя.</p>

                    <ol>
                      Функции интерфейса:
                      <li>Просмотр списка пользователей</li>
                      <li>Создание пользователя</li>
                      <li>Редактирование данных пользователя</li>
                      <li>Просмотр операций пользователя</li>
                      <li>Изменение баланса пользователя</li>
                    </ol>

                  </Paper>
                </div>



              </div>

            </MuiThemeProvider>
        );
    }
}

export default App;
