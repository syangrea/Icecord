import React from 'react';

export default class InviteModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            copyButton: "Copy"
        }
        this.handleCopy = this.handleCopy.bind(this);
    }

    handleCopy(e){
        this.linkInput.select();
        document.execCommand('copy');
        this.setState({copyButton: "Copied"});
        setTimeout(() => {
            this.setState({copyButton: "Copy"})
        }, 3000);
    }

    render(){
        return(
            <div id="invite-modal modal">

                <h5>INVITE FRIENDS TO {this.props.server.name}</h5>
                <button onClick={this.props.closeModal()}>X</button>
                <span>Share this link with others to grant access to this server</span>
                <div id="invite-link-container">
                    <input type="text" value={this.props.server.link} readOnly
                        ref={input => this.linkInput = input}
                    />
                    <button onClick={this.handleCopy} >{this.state.copyButton}</button>
                </div>
            </div>
        )
    }
}