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
                <div className="modal-header" id="invite-modal-header">

                    <h5>INVITE FRIENDS TO {this.props.server.name}</h5>
                </div>
                <button className="modal-exit-button" onClick={e => this.props.closeModal()}>
                    <img src="https://img.icons8.com/officel/16/000000/multiply.png" />
                </button>
                <div className="modal-body" id="invite-modal-body">

                    <span>Share this link with others to grant access to this server</span>
                    <div id="invite-link-container">
                        <input type="text" value={this.props.server.link} readOnly
                            ref={input => this.linkInput = input}
                        />
                        <button onClick={this.handleCopy} >{this.state.copyButton}</button>
                    </div>
                </div>
                
            </div>
        )
    }
}