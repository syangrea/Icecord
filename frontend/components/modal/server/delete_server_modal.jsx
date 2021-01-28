import React from 'react';

export default class DeleteServerModal extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            serverName: "",
            errors: false
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e){
        if(this.props.server.name !== this.state.serverName){
            this.setState({errors: true})
            // debugger
        }else{
            // debugger
            this.props.deleteServer(this.props.server.id)
        }
    }

    render() {
        return (
            <div id="delete-server">
                <div className="modal-header" id="delete-modal-header">

                    <h5>DELETE '{this.props.server.name}'</h5>
                </div>
                
                <div className="modal-body" id="delete-modal-body">


                    <span>
                        Are you sure you want to delete {this.props.server.name} ?
                        This action cannot be undone
                    </span>

                    <label htmlFor="delete-server-name">ENTER SERVER NAME</label>
                    <input type="text" value={this.state.serverName}
                        onChange={e => this.setState({ serverName: e.target.value })}
                    />
                    {this.state.errors ? <span>You didn't enter the server name correctly</span> : null}


                </div>



                <div className="modal-footer" id="delete-modal-footer">

                    <button className="modal-cancel" onClick={() => this.props.closeModal()}>
                        <div>
                            Cancel
                        </div>
                    </button>
                    
                    <button className="modal-leave-delete-button" onClick={this.handleDelete}>
                        <div>
                            Delete Server
                        </div>
                    </button>
                    
                </div>


            </div>
        )
    }

}