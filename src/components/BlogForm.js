import React from "react";
import { Form , Button, Container } from "react-bootstrap";
import { blogCreation } from "./../reducers/blogsReducer";
import { newblogNotification, thunkNotify, clearNotification } from "./../reducers/notificationReducer";
import { connect } from "react-redux";

class BlogForm extends React.Component {

	addBlogi = async (event) => {
		event.preventDefault();
		const blogObjecti = {
			title: event.target.newTitle.value,
			author: event.target.newAuthor.value,
			url: event.target.newUrl.value,
			likes: 0,
			user: this.props.user
		};

		await	this.props.blogCreation(blogObjecti);
		this.props.thunkNotify(`Added blog: '${blogObjecti.title}'`, 10000);
	}

handleBlogChange = (event) => {
	this.setState({ [event.target.name]: event.target.value });
}


render() {
	return (
		<div>
			<Container>
				<h2>Create a new blog</h2>

				<Form onSubmit={this.addBlogi}>
					<Form.Label>Title: </Form.Label>
					<Form.Control
						name="newTitle"
						value={this.newTitle}
						onChange={this.handleBlogChange}
					/>
					<Form.Label>Blog text:</Form.Label>
					<Form.Control
						name="newBlog"
						value={this.newBlog}
						onChange={this.handleBlogChange}
					/>
					<Form.Label>Author:</Form.Label>
					<Form.Control
						name="newAuthor"
						value={this.newAuthor}
						onChange={this.handleBlogChange}
					/>
					<Form.Label>URL-link:</Form.Label>
					<Form.Control
						name="newUrl"
						value={this.newUrl}
						onChange={this.handleBlogChange}
					/>
					<br />

					<Button variant="primary" type="submit">Save</Button>
				</Form>
			</Container>
		</div>
	);
}
}


const mapStateToProps = (state) => {
	return {
		newTitle: state.newTitle,
		newBlog: state.newBlog,
		newAuthor: state.newAuthor,
		newUrl: state.newUrl,
		likes: state.newLikes,
		user: state.logins.user
	};
};

export default connect(
	mapStateToProps,
	{ blogCreation, thunkNotify, newblogNotification, clearNotification }
)(BlogForm);



