import React from 'react'

export default class OverviewSettings extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            name: this.props.server.name,
            photoFile: null, 
            photoUrl: "",
            removePhoto: false
        }

        this.handleReset = this.handleReset.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleChangePhoto = this.handleChangePhoto.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);

    }

    handleReset(e){
        this.setState({name: this.props.server.name,
            photoFile: null, 
            photoUrl: "",
            removePhoto: false
        })
            
    }

    handleSave(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('server[name]', this.state.name);
        if (this.state.photoFile) {
            formData.append('server[photo]', this.state.photoFile);        
        }else if(this.state.removePhoto){
            formData.append('server[photo]','delete')
        }
        
        this.props.updateServer(formData, this.props.server.id)
            .then(() => {
                this.setState({
                    photoFile: null, 
                    photoUrl: "",
                    removePhoto: false
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
          this.setState({ photoUrl: reader.result, photoFile: file, removePhoto: false});

        if (file) {
          reader.readAsDataURL(file);
        } else if(!this.state.photoFile){
          this.setState({ photoUrl: "", photoFile: null, removePhoto: false});
        }
    }



    render(){
        let saveChanges = null;
        if(this.props.server.name !== this.state.name ||
            this.state.photoUrl || this.state.removePhoto){
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
            imageComp = <div className="edit-server-select-file">
                <img src={this.state.photoUrl}/>
            </div>
        }else if(this.props.server.photoUrl && !this.state.removePhoto){
            imageComp = <div className="edit-server-select-file">
                <img src={this.props.server.photoUrl}/>
            </div>
        }else{
            imageComp = <div className="edit-server-select-file">
                <div>
                    {this.props.server.name.slice(0,2)}
                </div>
            </div>
        }
        let hoverImageComp;
        if(this.state.photoUrl){
            hoverImageComp = <div className="edit-server-select-file hover-image">
                <img src={this.state.photoUrl}/>
                <div>
                    <span>Change Icon</span>
                </div>
            </div>
        }else if(this.props.server.photoUrl && !this.state.removePhoto){
            hoverImageComp = <div className="edit-server-select-file hover-image">
                <img src={this.props.server.photoUrl}/>
                <div>
                    <span>Change Icon</span>                
                </div>
            </div>
        }else{
            hoverImageComp = <div className="edit-server-select-file hover-image">
                <div>
                    <span>Change Icon</span>
                    
                </div>
            </div>
        }
        return(
            <div className="settings-body">
                <h5>SERVER OVERVIEW</h5>
                <div id="server-overview-1">
                    <div id="server-overview-1-photo">
                        <div id="server-upload-image-container">
                            <div className="server-upload-image" 
                                onClick={this.handleChangePhoto}
                                onMouseEnter={e => this.setState({hover: true})}
                                onMouseLeave={e => this.setState({hover: false})}>
                                { this.state.hover ? hoverImageComp : imageComp }
                            </div>
                            {
                                (this.props.server.photoUrl && !this.state.removePhoto ) 
                                    || this.state.photoUrl ?

                                <button onClick={e => {
                                    if(this.state.photoFile){
                                        this.setState({photoFile: null, photoUrl: ""})
                                        this.fileInput.value = "";
                                    }else{
                                        this.setState({removePhoto: true});
                                    }
                                }}>
                                    Remove
                                </button> : null
                            }
                        </div>
                        <div className="server-upload-button">
                            <div>We recommend an image of at least 512x512 for the server</div>
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