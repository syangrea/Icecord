import React from 'react';

export default class UserSettingsModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            setting: ""
        }
    }

    // handleSettingClick(e) {
    //     this.setState({ setting: e.target.innerText })
    // }

    render() {
        // let component;
        // switch (this.state.setting) {
        //     case 'Overview':
        //         component = <OverviewSettingsContainer />
        //     default:
        //         return null;
        // }
        return (
            <div id="user-settings-modal">
                <div className="settings-nav">
                    
                    <ul>
                        
                        {this.props.logoutModal}
                    </ul>
                </div>
                <div className="settings-body-container">
                    
                    <div className="settings-exit">
                        <button onClick={e => this.props.closeSettingsModal()}>X</button>
                        ESC
                    </div>
                </div>
            </div>


        )
    }
}