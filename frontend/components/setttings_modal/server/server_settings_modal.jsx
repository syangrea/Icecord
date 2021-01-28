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
            <div id="server-settings-modal" className="specific-settings-modal">
                <div className="settings-sidebar">

                    <div className="settings-nav">
                        <h5>{this.props.server.name}</h5>
                        <ul>
                            <li onClick={e => this.handleSettingClick}>Overview</li>
                            {this.props.deleteServerModal}
                        </ul>
                    </div>
                </div>
                <div className="settings-main">

                    <div className="settings-body-container">
                        {component}
                        
                    </div>
                    <div className="settings-exit">
                        <button onClick={e => this.props.closeSettingsModal()}>
                            <img src="https://img.icons8.com/plasticine/100/000000/exit.png" />
                        </button>
                        
                        
                    </div>
                </div>
            </div>
            

        )
    }
}