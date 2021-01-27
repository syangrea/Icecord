import React from 'react';
import ServerListItemContainer from './server_list_item_container';

export default class ServerList extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return (
            <div id="server-list">
                <ul>
                    {
                        this.props.servers.map((server,idx) => {
                            return <ServerListItemContainer server={server} key={idx} />
                        })
                    }
                </ul>

            </div>
        )
    }

}