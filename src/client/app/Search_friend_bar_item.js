import React from 'react';


class SearchFriendBarListItem extends React.Component {
	constructor(props) {
		super(props);
	}


	changeListFromChild() {
		this.props.changeFunc();
	}

	render () {
		return (
			<li>
				<div className="list-group-item">{this.props.Userdata.name}</div>
				<button onClick={this.changeListFromChild.bind(this)}>AddFriend</button>
			</li>
		)
	};
}

SearchFriendBarListItem.propTypes = {

}

export default SearchFriendBarListItem; 
 


