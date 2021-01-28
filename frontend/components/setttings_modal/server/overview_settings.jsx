import React from 'react'

export default class OverviewSettings extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            name: this.props.server.name
        }

        this.handleReset = this.handleReset.bind(this);
        this.handleSave = this.handleSave.bind(this);

    }

    handleReset(e){
        this.setState({name: this.props.server.name})
    }

    handleSave(e){
        // debugger
        this.props.updateServer(Object.assign({}, this.props.server, this.state));
    }

    render(){
        let saveChanges = null;
        if(this.props.server.name !== this.state.name){
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
        return(
            <div className="settings-body">
                <h5>SERVER OVERVIEW</h5>
                <div id="server-overview-1">
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