import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }

    }

    // As a function
    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

        // As a method
    deactivateEditMode() {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                        <div>
                            <span onDoubleClick={this.activateEditMode}>
                                {this.props.status && 'No status'}
                            </span>
                        </div>
                }
                {
                    this.state.editMode &&
                        <div>
                            <input
                                onChange={this.onStatusChange}
                                autoFocus={true}
                                value={this.state.status}
                                onBlur={this.deactivateEditMode.bind(this)}
                            />
                        </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;