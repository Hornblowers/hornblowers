import React from 'react';
import ReactDOM from 'react-dom';
import Yelp from './Yelp';
import RoomUsers from './RoomUsers';
import Chat from './Chat';
import axios from 'axios';
import {Link} from 'react-router';
import HeaderBar from './headerbar';

class Room extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chatVisible: true,
      usersVisible: true,
      yelpVisible: true,
      roomUsers: null
    }
    this.toggleChat = this.toggleChat.bind(this);
    this.toggleYelp = this.toggleYelp.bind(this);
    this.toggleUsers = this.toggleUsers.bind(this);
  }

  toggleChat(event) {
    this.setState({chatVisible: !this.state.chatVisible})
  }

  toggleYelp(event) {
    this.setState({yelpVisible: !this.state.yelpVisible})
  }

  toggleUsers(event) {
    this.setState({usersVisible: !this.state.usersVisible})
  }

  render() {
    var chatVisible;
    var yelpVisible;
    var usersVisible;
    if (!this.state.chatVisible) {
      chatVisible = {display: "none"};
    }
    if (!this.state.yelpVisible) {
      yelpVisible = {display: "none"};
    }
    if (!this.state.usersVisible) {
      usersVisible = {display: "none"};
    }
    return (
      <div className="room">
        <HeaderBar />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="yelpEmbed">
                <h2 onClick={this.toggleYelp}>Yelp</h2>
                <div style={yelpVisible}>
                  <Yelp />
                </div>
              </div>
            </div>
            
            <div className="col-md-8">
              <div className="col-md-8">
                <h2 onClick={this.toggleChat}>Chat</h2>
                <div style={chatVisible}>
                  <Chat />
                </div>
              </div>
              <div className="col-md-4">
                <h2 onClick={this.toggleUsers}>List</h2>
                <div style={usersVisible} >
                  <RoomUsers users={this.state.roomUsers} />
                </div>
              </div>
            </div>
          
          </div>
        
        </div>
      </div>
    )
  }
}

export default Room;

