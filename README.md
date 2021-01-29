# Icecord

Icecord is a chat application that allows users to be in servers that act as a small community for it's members. Within each server, there are channels, allowing server members to chat about different topics at the same time without cluttering a single chat.

https://icecord.herokuapp.com/#/



## Technology
* Rails
* PostgreSQL
* React 
* Redux
* CSS
* ActionCable

## Key Features

### Servers
Once a user logs in, there will always be a bar all the way to the left that holds all thumbnails of servers the user is part of.
These thumbnails open up each server's list of channels, list of members, and a chat box.  This was dont nicely using React-Router to keep track of which server and channel is currently in focus. The thumnails also have a custom right click menu that was implemented using React-ContextMenu, and Redux to keep track of the last clicked server.

[logo]: https://github.com/syangrea/Icecord/blob/main/readme_images/discord_side_bar.PNG "server nav bar"
[logo]: https://github.com/syangrea/Icecord/blob/main/readme_images/server_right_click_2.png "custom right click menu"

### Live Chat
This means that users can receive messages and have it show up on the page without having to refresh. This was implemented with Rails ActionCable, the framework's WebSocket approach. What this allows me to do is to use WebSockets instead of classic HTTP Requests, to open a "channel" between clients and the server. The channel automatically broadcasts to clients, any changes that happen in the backend - someone somewhere else sent a message.

[logo]: https://github.com/syangrea/Icecord/blob/main/readme_images/discord_chat.png "chat"

##### Future Features
* Direct Messaging
* Message editing and delete
* Voice chat
