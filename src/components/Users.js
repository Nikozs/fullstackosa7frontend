import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

class UsersList extends React.Component {

	render() {
		return (
			<div>
				<h2>Users</h2>

				<ListGroup>
					<ListGroup.Item>
						{this.props.users.map(user =>
							<li key={user.id}>
								<Link to={`/user/${user.id}`}>{user.username} {user.blogs.length}</Link>
							</li>
						)}
					</ListGroup.Item>
				</ListGroup>
			</div>
		);
	}


}


const mapStateToProps = (state) => {
	return {
		users: state.users
	};
};


export default connect(
	mapStateToProps
)(UsersList);