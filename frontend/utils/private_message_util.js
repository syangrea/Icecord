import { getDMChannels, getDMUsers } from "./server_home_util"

export const getPrivateChannel = (state, otherUser) => {
    
    let dmUsers = getDMUsers(state);
    let dmChannels = getDMChannels(state);
    
    for(let serverId in dmUsers){
        if(!dmUsers[serverId][0] || !dmUsers[serverId][1]) continue;
        
        
        if(dmUsers[serverId][0].id === otherUser.id 
            || dmUsers[serverId][1].id === otherUser.id){
                return dmChannels[serverId];
            }
    }   

    return null;
}