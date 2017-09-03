import React, { Component } from 'react';

import UserList from './components/UserList';
import OperationsList from './components/OperationsList';
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

        return (
              <div className="App">
                <span style={{fontWeight:600, fontSize: 20, textAlign: 'center'}}>User Management Interface</span>
                <p>Интерфейс для взаимодействия с информацией о пользователях</p>
                <div style={{display:'flex', height: '85vh'}}>
                  <UserList getUserOperations={this.getUserOperations}/>
                  <OperationsList getUserOperations={this.getUserOperations}/>
                </div>
              </div>
        );
    }
}

export default App;
