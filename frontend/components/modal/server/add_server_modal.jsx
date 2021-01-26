import React from 'react';

export default class AddServerModal extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="add-server">
                <button onClick={() => this.props.closeModal()}>X</button>
                <div id="add-server-create">

                    <h2>Create a server</h2>
                    <span>Your server is where you and your friends hang out. Make
                            yours and start talking.
                    </span>
                    {this.props.createServerModal}
                </div>
                <div id="add-server-invite">
                    <h4>Have and invite already?</h4>
                    {this.props.joinServerModal}
                </div>
                

            </div>
        )
    }
}