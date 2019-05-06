import React from "react";
import CommentForm from "./CommentForm";
import { Jumbotron } from "react-bootstrap";

import CommentsList from "./CommentsList";


class Blog extends React.Component {
	render() {
		return (
			<div>
				<Jumbotron>

					<div key={this.props.blog.id}>
						<h2>{this.props.blog.title}  </h2>
						<div>Added by: {this.props.blog.author}</div>
						<div>{this.props.blog.likes} likes<button>like</button></div>
					</div>
				</Jumbotron>

				<CommentsList blogid={this.props.blog.id}></CommentsList>

				<CommentForm blogid={this.props.blog.id} />

			</div>
		);
	}


}

export default Blog;
