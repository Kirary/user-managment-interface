/**
 * Created by Kirary on 27.08.2017.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import {getUserList} from '../wallet';
import User from './UserComponent';
import RaisedButton from 'material-ui/RaisedButton';

class UserList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 1,
            data: [],
            lastPage: 10
        };
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.newList = this.newList.bind(this);
    }
    componentDidMount(){
        let test = getUserList((this.state.page-1)*10, 10);
        test.then( response=>{
            this.setState({data:response.data.data, lastPage: Math.floor(response.data.recordsTotal/10+1), recordsTotal: response.data.recordsTotal });
        })
            .catch( error=>{
                console.log(error);
            });
    }

    previousPage(){
        if (this.state.page>1){
            this.setState(prevProps=>{
                this.newList(prevProps.page-1);
                return ({page:prevProps.page-1})
            });
        }
    }
    nextPage(){
        if (this.state.page<this.state.lastPage){
            this.setState(prevProps=>{
                this.newList(prevProps.page+1);
                return ({page:prevProps.page+1})
            });
        }
    }
    newList(page) {
        let test = getUserList((page-1)*10, 10);
        test.then( response=>{
            this.setState({data:response.data.data, lastPage: Math.floor(response.data.recordsTotal/10+1), recordsTotal: response.data.recordsTotal });
        })
            .catch( error=>{
                console.log(error);
            });
    }

    render(){
        let userArray = this.state.data.map(user=><User key={`user_${user.user_id}`}
                                                        id={user.user_id} name={user.user_name}
                                                        custom={user.user_custom}
                                                        email={user.email} data={user}
                                                        getUserOperations={this.props.getUserOperations} />);
        return (
            <Paper style={{flex: 'none', width: 300, marginRight: 15, padding: '15px 10px', display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span>Список пользователей:</span>
                    <span style={{fontWeight:600}}>+</span>
                </div>
                {userArray}
                <div style={{marginTop:'auto', display: 'flex', justifyContent:'space-between'}}>
                    <RaisedButton
                        onClick = {this.previousPage}
                        label = 'Назад'
                        primary={true}
                    />
                    {`${(this.state.page-1)*10+1}-${this.state.page === this.state.lastPage ? this.state.recordsTotal : this.state.page*10}`}
                    <RaisedButton
                        onClick = {this.nextPage}
                        label = 'вперед'
                        primary={true}
                    />
                </div>
            </Paper>
        )
    }
}
export default UserList
