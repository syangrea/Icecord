import React from 'react';
import {timeDisplay} from '../../../utils/date_util';
import {ContextMenuTrigger, MenuItem, ContextMenu} from 'react-contextmenu';

export default class Message extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            hovering: false,
            editMessageState: false,
            contextMenuShow: false,
            newMessage: this.props.message.body
        }
        this.clickMessage = this.clickMessage.bind(this);
        this.handleHover = this.handleHover.bind(this);
        this.handleLeaveHover = this.handleLeaveHover.bind(this);
        this.startEdit = this.startEdit.bind(this);
        this.handleDeleteMessage = this.handleDeleteMessage.bind(this);
        this.openContextMenu = this.openContextMenu.bind(this);
        this.handleEscapeOnForm = this.handleEscapeOnForm.bind(this);
        this.handleEditMessage = this.handleEditMessage.bind(this);
    }

    componentDidMount(){
        this.dropDownListener = e => {
            if (this.contextMenu && !this.contextMenu.contains(e.target)) this.setState({ contextMenuShow: false });
        }
        document.addEventListener('click', this.dropDownListener, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.dropDownListener);
    }
    
    clickMessage(e){
        
        if(this.props.privateChannel){
            this.props.history.push(`/server/home/${this.props.privateChannel.id}`)
        }else{

            const formData = new FormData();
            formData.append('server[name]', 'privateServer');
            formData.append('server[direct_message]', true);
            formData.append('server[ownerId]', this.props.currentUserId);
            this.props.createPrivateServer(formData)
                .then(res => {
                    
                    this.props.joinServer(res.payload.server.link, this.props.user.id)
                        .then(res2 => {
                            
                            this.props.history.push(`/server/home/${Object.values(res.payload.channels)[0].id}`)
                        })
                })
        }
    }

    handleHover(e){
        this.setState({hovering: true})
    }
    handleLeaveHover(e){
        this.setState({hovering: false})
    }

    startEdit(e){
        e.stopPropagation();
        this.setState({
            editMessageState: true,
            hovering: false,
            contextMenuShow: false
        })
        this.props.handleMessageEdit(this.props.message.id);
    }

    handleDeleteMessage(e){
        e.stopPropagation();
        this.props.subscription.deleteMessage(this.props.message.id);
        this.setState({
            hovering: false,
          
            contextMenuShow: false,
            
        })
    }

    handleEditMessage(e){
        e.preventDefault();
        if(this.props.message.body !== this.state.newMessage){

            this.props.subscription.editMessage(Object.assign({},
                    this.props.message,
                    {body: this.state.newMessage}))

        }
        this.setState({
            hovering: false,
            editMessageState: false,
            contextMenuShow: false,
            
        })
        

    }

    componentDidUpdate(oldProps){
        if(oldProps.messageAllowContextMenu !== this.props.messageAllowContextMenu
            && this.props.message.id !== this.props.messageAllowContextMenu){
            this.setState({contextMenuShow: false})
        }
        if(oldProps.messageAllowEdit !== this.props.messageAllowEdit
            && this.props.message.id !== this.props.messageAllowEdit){
            this.setState({editMessageState: false, newMessage: this.props.message.body})
        }
    }

    openContextMenu(e){
        e.stopPropagation();
        this.setState({contextMenuShow: true})
        this.props.handleMessageContextMenu(this.props.message.id)
    }

    handleEscapeOnForm(){
        this.setState({
            hovering: false,
            editMessageState: false,
            contextMenuShow: false,
            newMessage: this.props.message.body
        })
 
    }

    render() {
        let editCircles = (
            <div id="edit-message-dots" onClick={this.openContextMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
           </div>
        )
        let contextMenu = (
            <div id="edit-message-context-menu" ref={comp => this.contextMenu = comp}>
                <div className="edit-message-menu-item" onClick={this.startEdit}>
                    <div>Edit Message</div>
                    <i className="fas fa-pencil-alt"></i>
                </div>
                <div className="edit-message-menu-item delete-message" onClick={this.handleDeleteMessage}>
                    <div>Delete Message</div>
                    <i className="fas fa-trash-alt"></i>
                </div>
            </div>
        )
        let component;
        if(this.props.isStartingMessage){
            let photoComp = this.props.user.photoUrl ? 
                <img className="profile-icon" src={this.props.user.photoUrl} />
                :
                <img className="default-icon" src="https://img.icons8.com/dusk/64/000000/discord-logo.png" />
            component = (
                <div className={this.state.editMessageState ? "starting-message message-edit" : "starting-message" }
                    onMouseEnter={this.handleHover} onMouseLeave={this.handleLeaveHover}>
                    <ContextMenuTrigger id={`user-image-message-context-menu-${this.props.user.id}`}>
                        {photoComp}
                    </ContextMenuTrigger>
                    <ContextMenu id={`user-image-message-context-menu-${this.props.user.id}`}>
                        {(this.props.currentUserId !== this.props.user.id) ? 
                        <MenuItem className="message-user-menu-item" onClick={this.clickMessage}>
                            <div>Message</div>
                        </MenuItem> : 
                        <MenuItem className="current-user-menu-item" onClick={e => this.props.openUserSettings()}>
                            <div>Settings</div>
                        </MenuItem>
                        }
                     </ContextMenu>
                    
                    
                    <div className="starting-message-container">
                        <div className="starting-message-header">
                            <ContextMenuTrigger id={`user-message-context-menu-${this.props.user.id}`}>
                                <h3>{this.props.user.username}</h3>
                            </ContextMenuTrigger>
                            <ContextMenu id={`user-message-context-menu-${this.props.user.id}`}>
                                    {(this.props.currentUserId !== this.props.user.id) ? 
                                    <MenuItem className="message-user-menu-item" onClick={this.clickMessage}>
                                        <div>Message</div>
                                    </MenuItem> : 
                                    <MenuItem className="current-user-menu-item" onClick={e => this.props.openUserSettings()}>
                                        <div>Settings</div>
                                    </MenuItem>
                                    }
                            </ContextMenu>
                            <span>{timeDisplay(this.props.message.createdAt)}</span>
                        </div>

                        {
                            this.state.editMessageState ? 
                            <div className="edit-message-form-container">

                                <form onSubmit={this.handleEditMessage} >
                                    <input type="text" value={this.state.newMessage} onChange={e => this.setState({newMessage: e.target.value})}/>
                                </form> 
                                <div>enter to <span>save</span></div>
                            </div>:
                            <div className="message-text">{this.props.message.body}</div>
                        }
                        
                    </div>

                    {
                        this.state.hovering 
                            && this.props.user.id === this.props.currentUserId
                            && !this.state.editMessageState ?
                        editCircles : null
                    }
                    {
                        this.state.contextMenuShow  ?
                        contextMenu : null
                    }
                </div>
            )
        }else{
            component = (
                <div className={this.state.editMessageState ? "message message-edit" : "message" } 
                    onMouseEnter={this.handleHover} onMouseLeave={this.handleLeaveHover}>
                    {
                        this.state.editMessageState ? 
                        <div className="edit-message-form-container">
                            <form onSubmit={this.handleEditMessage} >
                                <input type="text" value={this.state.newMessage} onChange={e => this.setState({newMessage: e.target.value})}/>
                            </form> 
                            <div>enter to <span>save</span></div>
                        </div>:
                        <div className="message-text">{this.props.message.body}</div>
                    }
                    {
                        this.state.hovering 
                            && this.props.user.id === this.props.currentUserId 
                            && !this.state.editMessageState ?
                        editCircles : null
                    }
                    {
                        this.state.contextMenuShow ?
                        contextMenu : null
                    }
                </div>
            )
        }

        return component;
    }
}