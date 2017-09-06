/**
 * Created by Kirary on 05.09.2017.
 */
import React from 'react';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import AddMoney from 'material-ui/svg-icons/editor/monetization-on';

const iconStyle={width: 24, height: 24};
const iconButtonStyle={width: 32, height: 32, padding: 4};

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

                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <div>На игровом счету: <span className="fontBold" style={{color: this.props.balance >= 0 ? '#AAFFAA' : '#FFAAAA'}}>{this.props.balance}</span></div>
                        <div>Кошелек:<span className="fontBold"> {this.props.wallet_amount} {this.props.wallet_currency}</span></div>
                    </div>
                    <IconButton
                        iconStyle={iconStyle}
                        style={iconButtonStyle}
                        onClick={(e)=>{ e.stopPropagation(); alert('Money'); }}
                    >
                        <AddMoney color="#CCAAFF" hoverColor="white"/>
                    </IconButton>
                </div>


                <Divider style={{marginTop: 5, marginBottom: 5}}/>
                <div>Операции пользователя:</div>
            </div>
        )
    }
}
