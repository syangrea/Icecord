import React from 'react';
import NewMessageForm from './new_message_form';
import MessageContainer from './message_container';
import actioncable from 'actioncable'

export default class MessagesBox extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            mounted: false
        }
    }

    componentDidMount(){
        // debugger
        
        this.subscription = App.cable.subscriptions.create(
            {channel: 'ChatChannel', id: this.props.channel.id},
            {
                received: data => {
                    // debugger
                    let parsedData = $.parseJSON(data.data);
                    // 
                    switch(data.type){
                        case 'SENT_MESSAGE':
                            // debugger
                            this.props.receiveMessage(parsedData);
                            break;
                        // case 'LOAD_MESSAGES':
                        //     // 
                        //     debugger
                        //     this.props.receiveMessages(parsedData);
                        //     break;
                    }
                    
                }, 
                sendMessage: function(message){
                    // 
                    return this.perform("sendMessage", message)
                }
                // ,
                // getMessages: function(){
                //     debugger
                //     return this.perform("getMessages")
                // }
            }
        )
        

        // this.subscription.getMessages();
        this.setState({mounted: true})
    }

    componentDidUpdate(oldProps){
        if(oldProps.messages.length != this.props.messages.length){
            this.bottom.scrollIntoView();
        }
    }

    componentWillUnmount(){
        App.cable.subscriptions.remove(this.subscription);
    }

    render(){
        
        let messages = [];

        this.props.messages.forEach((message,idx) => {
            
            if(idx === 0 || this.props.messages[idx - 1].userId !== message.userId){
                messages.push(<MessageContainer isStartingMessage={true} key={message.id * idx} message={message} />)
            }else{
                messages.push(<MessageContainer isStartingMessage={false} key={message.id * idx} message={message}/>)
            }
        })

        messages.push(<div key={-100} ref={el => this.bottom = el}></div>)
        
        return (
            <div id="message-box">
                <div id="messages">
                    <ul>{messages}</ul>
                </div>

                {
                   this.state.mounted ?  
                   <NewMessageForm 
                       currentUserId={this.props.currentUserId}
                       subscription={this.subscription} 
                       channelId={this.props.channel.id}
                   /> : null
                }
            </div>
        )
    }


}