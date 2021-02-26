import React from 'react';

export default class JoinServerModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            link: ""
        }
        this.handleJoin = this.handleJoin.bind(this);
    }

    handleJoin(e) {
        return this.props.joinServer(this.state.link, this.props.currentUserId);
    }

    render() {
        return (
            <div id="join-server" className="add-server-modals">
                <button className="modal-exit-button" onClick={() => this.props.closeModal()}>
                    <img src="https://img.icons8.com/officel/16/000000/multiply.png" />
                </button>                
                <div id="join-server-header" className="add-server-modals-header">
                    
                    <h2>Join a server</h2>
                    <span>Enter an invite below to join an existing server
                    </span>
                </div>

                <div id="join-server-body" className="add-server-modals-body">

                    <label htmlFor="server-link" className={this.props.errors.length > 0 ? "error-link" : null}>
                        INVITE LINK {this.props.errors.length > 0 ? `- ${this.props.errors.join(" ")}`
                            : null}

                    </label>
                    <input type="text" id="server-link"
                        placeholder="NEq6offxxZu9U2vf06idug"
                        value={this.state.link}
                        className={this.state.link.length > 0 ? "default-link" : null}
                        onChange={e => this.setState({ link: e.target.value })}
                    />
                    <label>
                        INVITES SHOULD LOOK LIKE
                    </label>
                    <span id="link-examples">NEq6offxxZu9U2vf06idug</span>
                    <span id="link-examples">4A4RnHlIAiAjiJbEnND_wg</span>
                    <span id="link-examples">xpCSwUYQsPjHPoa1lzaVQQ</span>
                </div>
                    
               
                <div id="join-server-footer" className="add-server-modals-footer create-join-modal-footer">
                    {this.props.addServerModal}
                    <button onClick={this.handleJoin} id="join-server-button" className="create-join-button">Join Server</button>
                </div>
            </div>
        )
    }
}