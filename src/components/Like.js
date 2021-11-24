import React, { Component } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Like extends Component {
state = { liked: false };
toggle = () => {
	let localLiked = this.state.liked;

	// Toggle the state variable liked
	localLiked = !localLiked;
	this.setState({ liked: localLiked });
};
render() {
	return (
	<div>
		
		<div onClick={() => this.toggle()}>
			{this.state.liked === false ? (
			<FontAwesomeIcon icon={faHeart} />
			) : (
			<FontAwesomeIcon icon={faHeartBroken} />
			)}
		</div>
	</div>
	);
}
}

export default Like;
