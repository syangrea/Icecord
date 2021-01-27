import React from 'react';

export default class ServerContextMenu extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let serverSettings = null;
        if(this.props.isOwner){
            serverSettings = this.props.serverSettingsModal
        }

        let leaveServer = null;
        if(!this.props.isOwner){
            leaveServer = this.props.leaveServerModal
        }
        
        return(
            <div className="server-context-menu" 
                onClick={e => e.stopPropagation()}
                style={{top: this.props.posx}}>
                {this.props.invitePeopleModal}
                {serverSettings}
                {leaveServer}
            </div>
        )
    }
}