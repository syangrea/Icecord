import React from 'react';
import NewMessageForm from './new_message_form';
import MessageContainer from './message_container';
import actioncable from 'actioncable'

export default class MessagesBox extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            mounted: false,
            messageAllowContextMenu: null,
            messageAllowEdit: null
        }
        this.handleMessageContextMenu = this.handleMessageContextMenu.bind(this);
        this.handleMessageEdit = this.handleMessageEdit.bind(this);
    }

    handleMessageContextMenu(messageId){
        this.setState({messageAllowContextMenu: messageId});
    }
    handleMessageEdit(messageId){
        this.setState({messageAllowEdit: messageId});
    }

    componentDidMount(){
      
        
        this.subscription = App.cable.subscriptions.create(
            {channel: 'ChatChannel', id: this.props.channel.id},
            {
                received: data => {
                  
                    // 
                    switch(data.type){
                        case 'SENT_MESSAGE':
                            let parsedData = $.parseJSON(data.data);
                            this.props.receiveMessage(parsedData);
                            break;
                        case 'EDIT_MESSAGE':
                            
                            let parsedData2 = $.parseJSON(data.data);
                            this.props.receiveMessage(parsedData2);
                            break;
                        case 'DELETE_MESSAGE':
                            
                            let messageId = data.data;
                            this.props.removeMessage(messageId)
                        // case 'LOAD_MESSAGES':
                        //     // 
                        
                        //     this.props.receiveMessages(parsedData);
                        //     break;
                    }
                    
                }, 
                sendMessage: function(message){
                    // 
                  
                    return this.perform("sendMessage", message)
                },
                editMessage: function(message){
                    return this.perform("editMessage", message)

                },
                deleteMessage: function(messageId){
                    return this.perform("deleteMessage", {messageId})

                }
                // ,
                // getMessages: function(){
                
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
                messages.push(<MessageContainer isStartingMessage={true} 
                                key={message.id * idx} 
                                message={message} 
                                subscription={this.subscription}
                                handleMessageContextMenu={this.handleMessageContextMenu}
                                handleMessageEdit={this.handleMessageEdit}
                                messageAllowContextMenu={this.state.messageAllowContextMenu}
                                messageAllowEdit={this.state.messageAllowEdit}
                                />)
            }else{
                messages.push(<MessageContainer isStartingMessage={false} 
                                key={message.id * idx} 
                                message={message}
                                subscription={this.subscription}
                                handleMessageContextMenu={this.handleMessageContextMenu}
                                handleMessageEdit={this.handleMessageEdit}
                                messageAllowContextMenu={this.state.messageAllowContextMenu}
                                messageAllowEdit={this.state.messageAllowEdit}
                                />)
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