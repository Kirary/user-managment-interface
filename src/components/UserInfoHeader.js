/**
 * Created by Kirary on 05.09.2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AddMoney from 'material-ui/svg-icons/editor/monetization-on';

import {submitBalanceChange} from '../actions/usersActions';

const iconStyle={width: 24, height: 24};
const iconButtonStyle={width: 32, height: 32, padding: 4};

class UserInfoHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            balanceField: "",
            commentField: ""
        };
    }

    onFieldChange = e => {
        this.setState({
            balanceField: e.target.value.replace(/[^-.\d]/g,"").replace(/^-/g,'x')
            .replace(/-/g,'').replace(/x/g,'-').replace( /^([^\.]*\.)|\./g, '$1')
        });
    };

    onCommentChange = e => {
        this.setState({commentField: e.target.value})
    };

    openBalanceDialog = () => {
        this.setState({balanceField: "", commentField: ""});
        this.props.openDialog();
    };

    render(){
        const actions = [
            <FlatButton
                label="Отмена"
                primary={true}
                onClick={this.props.closeDialog}
            />,
            <FlatButton
                label="Подтердить"
                primary={true}
                onClick={()=>{
                    this.props.submit(
                        this.props,
                        this.state.balanceField,
                        this.state.commentField)
                }}
            />,
        ];
        return (
            <div style={{padding: '15px 10px', flex: 'none', height: 120, background: '#8D7BB7', color: 'white'}}>
                <div style={{textAlign:'center', fontWeight: 600, marginBottom: 10}}>Окно просмотра операций пользователя</div>
                {
                    !this.props.userInfo.selected ? <div style={{textAlign:'center', fontSize: 14}}>выберите пользователя из списка</div> :
                        this.props.userInfo.loading ? <div style={{textAlign:'center', fontSize: 14}}>загрузка информации о пользователе</div> :
                        <div style={{fontSize: 14}}>
                            <div>
                                Пользователь <span className="fontBold">{this.props.userInfo.user_name}</span> ({this.props.userInfo.user_custom})
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>Почта: {this.props.userInfo.email}</div>
                                <div>дата регистрации: {new Date(this.props.userInfo.register_date).toLocaleString()}</div>
                            </div>
                            <Divider style={{marginTop: 5, marginBottom: 5}}/>

                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <div>На игровом счету: <span className="fontBold" style={{color: this.props.userInfo.balance >= 0 ? '#AAFFAA' : '#FFAAAA'}}>{this.props.userInfo.balance}</span></div>
                                    <div>Кошелек:<span className="fontBold"> {this.props.userInfo.wallet_amount} {this.props.userInfo.wallet_currency}</span></div>
                                </div>
                                <IconButton
                                    iconStyle={iconStyle}
                                    style={iconButtonStyle}
                                    onClick={this.openBalanceDialog}
                                >
                                    <AddMoney color="#CCAAFF" hoverColor="white"/>
                                </IconButton>
                            </div>


                            <Divider style={{marginTop: 5, marginBottom: 5}}/>
                            <div>Операции пользователя:<span style={{color:'lightgrey', fontSize: 12}}>(начиная с последних)</span></div>
                        </div>
                }
                <Dialog
                    actions={actions}
                    open={this.props.opened}
                    onRequestClose={this.props.closeDialog}
                >
                    Изменение баланса пользователя <span className="fontBold">{this.props.userInfo.user_name}</span> ({this.props.userInfo.user_custom}) на:
                    <br/>
                    <TextField
                        hintText="Введите число"
                        value={this.state.balanceField}
                        onChange={(e)=>{this.onFieldChange(e)}}
                    />
                    <br/>
                    <TextField
                        hintText="Введите комментарий"
                        value={this.state.commentField}
                        fullWidth={true}
                        multiLine={true}
                        rows={1}
                        rowsMax={3}
                        onChange={(e)=>{this.onCommentChange(e)}}
                    />
                </Dialog>
            </div>



        )
    }
}
export default connect(
    state => ({
        opened: state.balanceDialog.opened,
        userInfo: state.userInfo
    }),
    dispatch =>({
        openDialog: ()=>{
            dispatch ({type: "DIALOG_OPEN"})
        },
        closeDialog: ()=>{
            dispatch ({type: "DIALOG_CLOSE"})
        },
        submit: (data, amount, comment)=>{
            dispatch(submitBalanceChange(data, amount, comment));
        }
    })
)(UserInfoHeader);
