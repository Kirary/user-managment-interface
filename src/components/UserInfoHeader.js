/**
 * Created by Kirary on 05.09.2017.
 */
import React from 'react';
import Divider from 'material-ui/Divider';

export default class UserInfoHeader extends React.Component{
    render(){
        return (
            <div style={{fontSize: 14}}>
                <div>
                    Пользователь <span className="fontBold">{this.props.user_name}</span> ({this.props.user_custom})
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>Почта: {this.props.email}</div>
                    <div>дата регистрации: {new Date(this.props.register_date).toLocaleString()}</div>
                </div>
                <Divider style={{marginTop: 5, marginBottom: 5}}/>
                <div>На игровом счету: <span className="fontBold" style={{color: this.props.balance >= 0 ? 'green' : 'red'}}>{this.props.balance}</span></div>
                <div>Кошелек:<span className="fontBold"> {this.props.wallet_amount} {this.props.wallet_currency}</span></div>
                <Divider style={{marginTop: 5, marginBottom: 5}}/>
                <div>Операции пользователя:</div>
            </div>
        )
    }
}
