import React from "react";
import { connect } from "react-redux";
import Comment from "./Comment";
import { ListGroup } from "react-bootstrap";

class CommentsList extends React.Component {

	render() {

		return (
			<ListGroup>
				<h4>Comments:</h4>
				{
					commentsToShow(this.props.comments, this.props.blogid).map(commentti =>
						<ListGroup.Item key={commentti.id}>
							<Comment key={commentti.id + 1} comment={commentti} />


						</ListGroup.Item>)}
			</ListGroup>
		);
	}
}


function commentsToShow(comments, blogid) {
	return comments.filter(x => x.blog === blogid);
}

const mapStateToProps = (state) => {
	return {
		comments: state.comments
	};
};

export default connect(
	mapStateToProps
)(CommentsList);