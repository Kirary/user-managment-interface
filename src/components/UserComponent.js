/**
 * Created by Kirary on 27.08.2017.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Edit from 'material-ui/svg-icons/editor/mode-edit';

const iconStyle={width: 18, height: 18};
const iconButtonStyle={width: 26, height: 26, padding: 4, position: 'absolute', top: 5, right: 5};

export default class UserComponent extends React.Component {
    constructor(props){
        super(props);
        this.cardClick = this.cardClick.bind(this);
    }

    cardClick() {
        this.props.getOperations(
            {id: this.props.id, name: this.props.name, data: this.props.data},
            this.props.data.register_date,
            new Date().toISOString()
        );
    }

    render(){
        return (
            <Paper
                style={{marginBottom:10, padding: 5, height: 55, position: 'relative'}}
                onClick={this.cardClick}
            >
                <div style={{fontWeight:600}}>{this.props.name ? this.props.name : 'Безымянный'}</div>
                <div style={{fontSize: 12,fontWeight:500}}>{this.props.custom ? this.props.custom : 'Unknown'}</div>
                <div style={{fontSize: 12, color: 'grey'}}>{this.props.email ? this.props.email : '-'}</div>
                <IconButton
                    iconStyle={iconStyle}
                    style={iconButtonStyle}
                    onClick={(e)=>{ e.stopPropagation(); alert('edit'); }}
                >
                    <Edit color="lightgrey" hoverColor="grey"/>
                </IconButton>
            </Paper>
        )
    }
}
