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
        return this.props.joinServer(this.state.link);
    }

    render() {
        return (
            <div id="join-server">
                <button onClick={e => this.props.closeModal()}>X</button>
                <div id="join-server-form">
                    <h3>Join a server</h3>
                    <span>Enter an invite below to join an existing server
                    </span>

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
                        <span id="link-examples">NEq6offxxZu9U2vf06idug</span>
                    </label>
                </div>
                <div id="join-server-buttons">
                    {this.props.addServerModal}
                    <button onClick={this.handleJoin}>Join Server</button>
                </div>
            </div>
        )
    }
}