import React from 'react';
import s from './profile_status.module.css';

class profile_Status extends React.Component {

    state = {
        editMode: false
    };


    toggleEditMode () {
        this.setState({
            editMode: !this.state.editMode
        })
    }


    render() {
        return (
            <div className={s.profile_status}>
                { !this.state.editMode
                    ? <div> <span onDoubleClick={
                        () => { this.toggleEditMode() } }>{ this.props.status }</span> </div>
                    : <div> <input autoFocus={true} onBlur={ () => { this.toggleEditMode() } } value={ this.props.status }/> </div> }
            </div>
        );
    }
};

export default profile_Status;