import React from "react";
import { ListGroup } from "react-bootstrap";


class User extends React.Component {
	render() {
		return (
			<div>
				<div key={this.props.user.id}>
					<h2> {this.props.user.username}</h2>
				</div>

				<h3>Added blogs:</h3>
				<ListGroup>
					<ListGroup.Item>
						{this.props.user.blogs.map(blog => <div key={blog.id}>


							<li key={blog.id}>{blog.title}</li>

						</div>

						)}</ListGroup.Item>
				</ListGroup>

			</div>
		);
	}
}

export default User;
