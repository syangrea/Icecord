import React from 'react';
import AccountSettings from './account_settings';

export default class UserSettingsModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            setting: "My Account"
        }
        this.handleSettingClick = this.handleSettingClick.bind(this);
    }

    handleSettingClick(e) {
        this.setState({ setting: e.target.innerText })
    }

    render() {
        let component;
        switch (this.state.setting) {
            case 'My Account':
                component = <AccountSettings />
           
        }
        return (
            <div id="user-settings-modal" className="specific-settings-modal">
                <div className="settings-sidebar">

                    <div className="settings-nav">
                        <h5>User Settings</h5>
                        <ul>
                            <li onClick={this.handleSettingClick}>My Account</li>
                            {this.props.logoutModal}
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