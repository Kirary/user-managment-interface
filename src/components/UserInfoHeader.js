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

const iconStyle={width: 24, height: 24};
const iconButtonStyle={width: 32, height: 32, padding: 4};

class UserInfoHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            balanceField: ""
        };
    }

    onFieldChange = e => {
        //[-+]?[0-9]*[.,]?[0-9]+
        this.setState({balanceField: e.target.value});
    };

    render(){
        let test = this.props.user_id;
        const actions = [
            <FlatButton
                label="Отмена"
                primary={true}
                onClick={this.props.closeDialog}
            />,
            <FlatButton
                label="Подтердить"
                primary={true}
                onClick={this.props.closeDialog}
            />,
        ];
        return (
            <div style={{padding: '15px 10px', flex: 'none', height: 120, background: '#8D7BB7', color: 'white'}}>
                <div style={{textAlign:'center', fontWeight: 600, marginBottom: 10}}>Окно просмотра операций пользователя</div>
                {
                    this.props.chooseUser ? <div style={{textAlign:'center', fontSize: 14}}>выберите пользователя из списка</div> :
                        <div style={{fontSize: 14}}>
                            <div>
                                Пользователь <span className="fontBold">{this.props.user_name}</span> ({this.props.user_custom})
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>Почта: {this.props.email}</div>
                                <div>дата регистрации: {new Date(this.props.register_date).toLocaleString()}</div>
                            </div>
                            <Divider style={{marginTop: 5, marginBottom: 5}}/>

                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <div>На игровом счету: <span className="fontBold" style={{color: this.props.balance >= 0 ? '#AAFFAA' : '#FFAAAA'}}>{this.props.balance}</span></div>
                                    <div>Кошелек:<span className="fontBold"> {this.props.wallet_amount} {this.props.wallet_currency}</span></div>
                                </div>
                                <IconButton
                                    iconStyle={iconStyle}
                                    style={iconButtonStyle}
                                    onClick={this.props.openDialog }
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
                   //contentStyle={{width: 450}}
                    open={this.props.opened}
                    onRequestClose={this.props.closeDialog}
                >
                    Изменение баланса пользователя <span className="fontBold">{this.props.user_name}</span> ({this.props.user_custom}) на:
                    <br/>
                    <TextField
                        hintText="Введите число"
                        value={this.state.balanceField}
                        onChange={(e)=>{this.onFieldChange(e)}}
                    />
                </Dialog>
            </div>



        )
    }
}
export default connect(
    state => ({
        opened: state.balanceDialog.opened,

    }),
    dispatch =>({
        openDialog: ()=>{
            dispatch ({type: "DIALOG_OPEN"})
        },
        closeDialog: ()=>{
            dispatch ({type: "DIALOG_CLOSE"})
        }
    })
)(UserInfoHeader);
