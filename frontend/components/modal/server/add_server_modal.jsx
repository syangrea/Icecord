import React from 'react';

export default class AddServerModal extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        // debugger
        return(
            <div id="add-server" className="add-server-modals">
                <button className="modal-exit-button" onClick={() => this.props.closeModal()}>
                    <img src="https://img.icons8.com/officel/16/000000/multiply.png" />
                </button>
                <div id="add-server-header" className="add-server-modals-header">
                    <h2>Create a server</h2>
                    <span>Your server is where you and your friends hang out. Make
                        yours and start talking.
                    </span>
                </div>

                <div id="add-server-body" className="add-server-modals-body">

                    
                    {this.props.createServerModal}
                </div>
                
                <div id="add-server-divider"></div>
                <div id="add-server-footer" className="add-server-modals-footer">
                    <h4>Have and invite already?</h4>
                    {this.props.joinServerModal}
                </div>
                

            </div>
        )
    }
}