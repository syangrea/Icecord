import React from 'react'

export default class OverviewSettings extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            name: this.props.server.name,
            photoFile: null, 
            photoUrl: ""
        }

        this.handleReset = this.handleReset.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleChangePhoto = this.handleChangePhoto.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);

    }

    handleReset(e){
        this.setState({name: this.props.server.name,
            photoFile: null, 
            photoUrl: ""})
            
    }

    handleSave(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('server[name]', this.state.name);
        if (this.state.photoFile) {
            formData.append('server[photo]', this.state.photoFile);        
        }
        
        this.props.updateServer(formData, this.props.server.id)
            .then(() => {
                this.setState({
                    photoFile: null, 
                    photoUrl: ""
                })
            });
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
        let saveChanges = null;
        if(this.props.server.name !== this.state.name ||
            this.state.photoUrl){
            saveChanges = (
            <div id="server-save-changes">
                <span>Careful--you have unsaved changes!</span>
                <div>
                    <button id="server-change-reset" onClick={this.handleReset}>Reset</button>
                    <button id="server-change-save" onClick={this.handleSave}>Save Changes</button>
                </div>
            </div>
            )
        }
        let imageComp;
        if(this.state.photoUrl){
            imageComp = <div className="create-server-select-file">
                <img src={this.state.photoUrl}/>
            </div>
        }else if(this.props.server.photoUrl){
            imageComp = <div className="create-server-select-file">
                <img src={this.props.server.photoUrl}/>
            </div>
        }else{
            imageComp = <div className="create-server-select-file">
                {this.props.server.name.slice(0,2)}
            </div>
        }
        return(
            <div className="settings-body">
                <h5>SERVER OVERVIEW</h5>
                <div id="server-overview-1">
                    <div id="server-overview-1-photo">
                        <div onClick={this.handleChangePhoto}>
                            {imageComp}
                        </div>
                        <div>
                            <span>We recommend an image of at least 512x512 for the server</span>
                            <button onClick={this.handleChangePhoto}>Upload Image</button>
                        </div>
                        <input type="file" 
                        ref={comp => this.fileInput = comp} 
                        onChange={this.handleFileChange}
                        style={{display: 'none'}}
                        accept="image/*"/>
                    </div>
                    <div id="server-overview-1-body">

                        <label htmlFor="server-name">SERVER NAME</label>
                        <input type="text" value={this.state.name} 
                            onChange={e => this.setState({name: e.target.value})}
                        />
                    </div>
                </div>
                {saveChanges}
            </div>
        )
    }
}