import React from 'react';

export default class CreateServerModal extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            serverName: `${this.props.user.username}'s server`
        }
        this.handleCreate = this.handleCreate.bind(this);
    }

    handleCreate(e){
        return this.props.createServer({name: this.state.serverName, direct_message: false, ownerId: this.props.user.id});
    }

    render(){
        return(
            <div id="create-server" className="add-server-modals">
                <button className="modal-exit-button" onClick={() => this.props.closeModal()}>
                    <img src="https://img.icons8.com/officel/16/000000/multiply.png" />
                </button>
                <div id="create-server-header" className="add-server-modals-header">
                    <h2>Customize your server</h2>
                    <span>Give your new server a personality with a name.
                            You can always change it later.
                    </span>
                </div>
                <div id="create-server-body" className="add-server-modals-body">

                    <label htmlFor="server-name">SERVER NAME</label>
                    <input type="text" id="server-name" 
                        value={this.state.serverName}
                        onChange={e => this.setState({serverName: e.target.value})}
                    />
                    <span className="small-span">By creating a server, you aren't 
                        agreeing to anything.    
                    </span>
                </div>
                
                <div id="create-server-footer" className="add-server-modals-footer create-join-modal-footer">
                    {this.props.addServerModal}
                    <button id="create-server-button" className="create-join-button" onClick={this.handleCreate} disabled={this.state.serverName.length === 0}>Create</button>
                </div>
            </div>
        )
    }
}