import React from "react";
import { Button, Form } from "react-bootstrap";
import { commentNotification, thunkNotify, clearNotification } from "./../reducers/notificationReducer";
import { connect } from "react-redux";
import { addComment } from "../reducers/commentsReducer";



class CommentForm extends React.Component {

		btnAddComment = (event) => {
			event.preventDefault();
			this.props.addComment(this.props.blogid,event.target.newComment.value);
			this.props.thunkNotify(`Added comment: '${event.target.newComment.value}'`, 5000);
		}

			handleCommentChange = (event) => {
				this.setState({ [event.target.name]: event.target.value });
			}

			render() {
				return (
					<div>
						<h3>Add comment</h3>

						<Form onSubmit={this.btnAddComment}>
							<Form.Group id="comment">
								<Form.Label>Comment: </Form.Label>
								<input
									name="newComment"
									value={this.newComment}
									onChange={this.handleCommentChange}
								/>
								<br />

								<Button variant="primary" type="submit">Add comment</Button>
							</Form.Group>
						</Form>
					</div>
				);
			}
}


export default connect(
	null,
	{ commentNotification, thunkNotify, clearNotification,addComment }
)(CommentForm);

