import React from 'react';
import ServerListItemContainer from './server_list_item';

export default class ServerList extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        <div id="server-list">
            <ul>
                {
                    this.props.servers.map((server,idx) => {
                        return <ServerListItemContainer server={server} key={idx} />
                    })
                }
            </ul>

        </div>
    }

}