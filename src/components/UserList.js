/**
 * Created by Kirary on 27.08.2017.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import {userList} from '../wallet';
import User from './UserComponent';

class UserList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 1,
            data: []
        };
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }
    componentDidMount(){
        let test = userList((this.state.page-1)*10, 10);
        console.log(test);
        test.then( response=>{
            this.setState({data:response.data.data});
        })
            .catch( error=>{
                console.log(error);
            });
    }

    previousPage(){
        if (this.state.page>1){
            this.setState({page:this.state.page-1})//TODO переделать на функцию. Добавить проверку на первую страницу
        }
    }
    nextPage(){
        this.setState({page:this.state.page+1})//TODO переделать на функцию. Добавить проверку на последнюю страницу
    }

    render(){
        let userArray = this.state.data.map(user=><User key={`user_${user.user_id}`} id={user.id} name={user.user_name} custom={user.user_custom} email={user.email} />);
        return (
            <Paper style={{flexGrow: 1, marginRight: 15, padding: '15px 10px', display: 'flex', flexDirection: 'column'}}>
                Список пользователей:   "+"
                {userArray}
                <div style={{marginTop:'auto', display: 'flex', justifyContent:'space-between'}}>
                    <span
                        style={{padding: 5}}
                        onClick = {this.previousPage}
                    >
                        назад
                    </span>
                    {`${(this.state.page-1)*10+1}-${this.state.page*10}`}
                    <span
                        style={{padding: 5}}
                        onClick = {this.nextPage}
                    >
                        вперед
                    </span>
                </div>
            </Paper>
        )
    }
}
export default UserList
