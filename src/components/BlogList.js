import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

class BlogList extends React.Component {

	render() {

		return (
			<ListGroup>
				<h2>Blogs</h2>
				<ListGroup.Item>
					{this.props.blogs.map(blog =>
						<ListGroup.Item key={blog.id}>
							<Link to={`/blog/${blog.id}`}>{blog.title} {blog.author}</Link>
						</ListGroup.Item>
					)}
				</ListGroup.Item>
			</ListGroup>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		blogs: state.blogs
	};
};

export default connect(
	mapStateToProps
)(BlogList);