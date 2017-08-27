/**
 * Created by Kirary on 27.08.2017.
 */
import React from 'react';
import Paper from 'material-ui/Paper';

export default class UserComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={{border: '1px solid grey', padding: 5}}>
                <div style={{fontWeight:600}}>{this.props.name}</div>
                <div style={{fontSize: 12,fontWeight:500}}>{this.props.custom}</div>
                <div style={{fontSize: 12, color: 'grey'}}>{this.props.email}</div>
            </div>
        )
    }
}
