import React from 'react';

export default class NewMessageForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            body: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    componentDidMount(){
        
    }

    handleChange(e){
        e.preventDefault();
        this.setState({body: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.body.length !== 0){
            
            this.props.subscription.sendMessage(
                Object.assign({}, this.state, 
                    {
                        userId: this.props.currentUserId,
                        channelId: this.props.channelId                
                    }
                )
            )
            this.setState({body: ""})
            
        }
    }

    render(){
        return(

            <div id="new-message-form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.body} onChange={this.handleChange}/>
                    
                </form>
            </div>
        )
    }

}