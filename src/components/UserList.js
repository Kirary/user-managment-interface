/**
 * Created by Kirary on 27.08.2017.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import IconButton from 'material-ui/IconButton';
import AddUser from 'material-ui/svg-icons/social/person-add';

import {getUserList, getUserOperations} from '../actions/usersActions';
import UserComponent from './UserComponent';

const iconStyle={width: 20, height: 20};
const iconButtonStyle={width: 20, height: 20, padding: 0, marginRight: 5};

class UserList extends React.Component {
    constructor(props){
        super(props);
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    componentDidMount(){
        this.props.onGetList(this.props.page, 10);
    }

    previousPage(){
        this.props.onGetList(this.props.page-1, 10);
    }
    nextPage(){
        this.props.onGetList(this.props.page+1, 10);
    }

    render(){
        let userArray = this.props.userList.map(user=><UserComponent key={`user_${user.user_id}`}
                                                        id={user.user_id} name={user.user_name}
                                                        custom={user.user_custom}
                                                        email={user.email} data={user}
                                                        getOperations={this.props.onGetOperationList} />);

        let page = this.props.loading ? <CircularProgress style={{margin: '150px auto'}}/>: userArray;

        return (
            <Paper style={{flex: 'none', width: 300, marginRight: 15, display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', flex: 'none', background: '#8D7BB7', padding: '15px 10px', color: 'white', fontWeight: 600}}>
                    <span>Список пользователей:</span>
                    <IconButton
                        iconStyle={iconStyle}
                        style={iconButtonStyle}
                        onClick={(e)=>{ e.stopPropagation(); alert('add'); }}
                    >
                        <AddUser color="lightgrey" hoverColor="white"/>
                    </IconButton>
                </div>
                <div style={{padding: '15px 10px', flexGrow:1}}>
                    {page}
                </div>
                <div style={{marginTop:'auto', display: 'flex', justifyContent:'space-between'}}>
                    <RaisedButton
                        onClick = {this.previousPage}
                        label = 'Назад'
                        primary={true}
                        disabled = {this.props.previous}
                    />
                    {`${(this.props.page-1)*10+1}-${this.props.page === this.props.lastPage ? this.props.recordsTotal : this.props.page*10}`}
                    <RaisedButton
                        onClick = {this.nextPage}
                        label = 'вперед'
                        primary={true}
                        disabled = {this.props.next}
                    />
                </div>
            </Paper>
        )
    }
}
export default connect(
    state => ({
        userList: state.userList.list,
        previous: !state.userList.previous,
        next: !state.userList.next,
        page: state.userList.page,
        lastPage: state.userList.lastPage,
        loading: state.userList.loading,
        recordsTotal: state.userList.recordsTotal
    }),
    dispatch =>({
        onGetList: (offset, limit) => {
            dispatch(getUserList(offset, limit));
        },
        onGetOperationList: (user, tFrom, tTo) => {
            dispatch(getUserOperations(user, tFrom, tTo));
        }
    })
)(UserList);
