import React from 'react';
import s from './profile_status.module.css';


class profile_Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }


    activatedEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivatedEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }


    render() {
        return (
            <div className={s.profile_status}>
                { !this.state.editMode
                    ? <div> <span className={s.profile_status_input}
                                  onDoubleClick={() => { this.activatedEditMode() } }>{ this.props.status }</span> </div>

                    : <div> <input className={s.profile_status_input} onChange={this.onStatusChange} autoFocus={true}
                                   onBlur={ () => { this.deactivatedEditMode() } } value={ this.state.status }/> </div>
                }
            </div>
        );
    }


}

export default profile_Status;