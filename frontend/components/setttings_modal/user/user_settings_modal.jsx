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
            <div id="user-settings-modal" className="specific-settings-modal">
                <div className="settings-sidebar">

                    <div className="settings-nav">
                        <h5>User Settings</h5>
                        <ul>
                            
                            {this.props.logoutModal}
                        </ul>
                    </div>
                </div>
                <div className="settings-main">

                    <div className="settings-body-container">
                        
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