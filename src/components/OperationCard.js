/**
 * Created by Kirary on 03.09.2017.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

export default (data) => {
    debugger;
    return (
        <Paper style={{marginBottom:10, padding:'10px 15px', fontSize: 12}} key={`operation_${data.operation.operation_id}`}>
            <div>STATUS: {data.operation.status}</div>
            <div style={{display:'flex'}}>
                <div>operation_id: {data.operation.operation_id}</div>
                <div style={{marginLeft:'auto'}}>{new Date(data.operation.date).toLocaleString()}</div>
            </div>
            <div style={{display:'flex'}}>
                <div>
                    amount:
                    <span style={{color: data.operation.amount >= 0 ? 'green' : 'red'}}>
                            {data.operation.amount}
                        </span>
                </div>
                <div style={{marginLeft: 25}}>
                    user_balance:
                    <span style={{color: data.operation.user_balance >= 0 ? 'green' : 'red'}}>
                            {data.operation.user_balance}
                        </span>
                </div>
                <div style={{marginLeft: 25}}>sum: {data.operation.sum}</div>
                <div style={{marginLeft: 25}}>currency: {data.operation.currency}</div>
            </div>
            <div>comment: {data.operation.comment}</div>
            <Divider/>
            Купон
            <div style={{display:'flex'}}>
                <div>coupon_id: {data.operation.coupon_id}</div>
                <div style={{marginLeft:'auto'}}>coupon_code {data.operation.coupon_code}</div>
            </div>
            <Divider/>
            <div style={{display:'flex'}}>
                <div>transaction_id: {data.operation.transaction_id}</div>
                <div style={{marginLeft:'auto'}}>transaction_type: {data.operation.transaction_type}</div>
            </div>
        </Paper>)
}
