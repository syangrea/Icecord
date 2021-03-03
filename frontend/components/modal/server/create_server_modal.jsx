import React from 'react';

export default class CreateServerModal extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            serverName: `${this.props.user.username}'s server`,
            photoFile: null,
            photoUrl: ""
        }
        this.handleCreate = this.handleCreate.bind(this);
        this.handleChangePhoto = this.handleChangePhoto.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }

    handleCreate(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('server[name]', this.state.serverName);
        formData.append('server[direct_message]', false);
        formData.append('server[ownerId]', this.props.user.id);
        if (this.state.photoFile) {
            formData.append('server[photo]', this.state.photoFile);        
        }
        return this.props.createServer(formData);
    }

    handleChangePhoto(e){
        this.fileInput.click();
    }

    handleFileChange(e){
        e.preventDefault();
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
          this.setState({ photoUrl: reader.result, photoFile: file});

        if (file) {
          reader.readAsDataURL(file);
        } else if(!this.state.photoFile){
          this.setState({ photoUrl: "", photoFile: null});
        }
    }

    render(){
        let imageComp;
        if(this.state.photoUrl){
            imageComp = <div className="create-server-select-file">
                <img src={this.state.photoUrl}/>
            </div>
        }else{
            imageComp = <div className="create-server-select-file">
                <i className="fas fa-camera"></i>
                <span>UPLOAD</span>
            </div>
        }
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
                    <div id="create-server-photo" onClick={this.handleChangePhoto}>
                        {imageComp}
                    </div>
                    <input type="file" 
                        ref={comp => this.fileInput = comp} 
                        onChange={this.handleFileChange}
                        style={{display: 'none'}}
                        accept="image/*"/>

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