import React from 'react';
import OverviewSettingsContainer from './overview_settings_container';

export default class ServerSettingsModal extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            setting: "Overview"
        }
    }

    handleSettingClick(e){
        this.setState({setting: e.target.innerText})
    }

    render(){
        let component;
        switch(this.state.setting){
            case 'Overview':
                component = <OverviewSettingsContainer />;
                break;
            default:
                return null;
        }
        return(
            <div id="server-settings-modal">
                <div className="settings-nav">
                    <span>{this.props.server.name}</span>
                    <ul>
                        <li onClick={e => this.handleSettingClick}>Overview</li>
                        {this.props.deleteServerModal}
                    </ul>
                </div>
                <div className="settings-body-container">
                    {component}
                    <div className="settings-exit">
                        <button onClick={e => this.props.closeSettingsModal()}>X</button>
                        ESC
                    </div>
                </div>
            </div>
            

        )
    }
}