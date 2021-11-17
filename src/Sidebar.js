import React from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { SearchOutlined } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className = "sidebar">
            <div className = "sidebar_header">
                <Avatar />
                <div className = "sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>


                </div>
            </div>

            <div className="sidebar_search">
                 
                <div className = "sidebar_searchContainer">

                    <SearchOutlined />
                    <input placeholder = "Search or start new chat" type = "text" />
                </div>
            </div>

            <div className="sidebar_chats">

                <h1>Sidebar Chat</h1>
                <h1>Sidebar Chat</h1>
                <h1>Sidebar Chat</h1>
                <h1>Sidebar Chat</h1>
                <h1>Sidebar Chat</h1>
                

            </div>
        </div>
    )
}

export default Sidebar
