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
            <div id="create-server">
                <button onClick={e => this.props.closeModal()}>X</button>
                <div id="create-server-form">
                    <h3>Customize your server</h3>
                    <span>Give your new server a personality with a name.
                            You can always change it later.
                    </span>

                    <label htmlFor="server-name">SERVER NAME</label>
                    <input type="text" id="server-name" 
                        value={this.state.serverName}
                        onChange={e => this.setState({serverName: e.target.value})}
                    />
                    <span className="small-span">By creating a server, you aren't 
                        agreeing to anything.    
                    </span>
                </div>
                <div id="create-server-buttons">
                    {this.props.addServerModal}
                    <button onClick={this.handleCreate} disabled={this.state.serverName.length === 0}>Create</button>
                </div>
            </div>
        )
    }
}