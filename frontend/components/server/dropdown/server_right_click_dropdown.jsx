import React from 'react';

export default class ServerRightClickDropdown extends React.Component{
    contructor(props){
        super(props);
    }

    render(){
        return(
            <div className="server-right-click-dropdown server-dropdown">
                Invite People
                Server Settings
                Create Channel
                Leave Server
            </div>
        )
    }
}