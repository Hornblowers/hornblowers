import React from 'react';


class FriendListItem extends React.Component {
	constructor(props) {
		super(props);
	}

	addFriendToRoom() {
		console.log('added FriendToRoom ', this.props.frienddata );
		this.props.AddFriendToRoomFunc(this.props.frienddata)
	}

	deleteFriendFromUser() {
		console.log('delete friend');
	}

	render() {
		console.log(this.props.frienddata.Friend_a.user_name)
		return (
			<div className='card width text-center'>
				<div className='card-block'>
					<h4 className='card-title'>Friend: {this.props.frienddata.Friend_a.user_name}</h4>
	      			<button className="btn btn-info mar" onClick={this.addFriendToRoom.bind(this)}>Add To Room</button>
	      			<button className="btn btn-danger mar" onClick={this.deleteFriendFromUser.bind(this)}>DeleteFriend</button>
				</div>
			</div>
		);
	}
}




export default FriendListItem; 
 
  

