import React from "react";
import Blog from "./components/Blog";
import User from "./components/User";
import blogService from "./services/blogs";
import Notification from "./components/Notification";
import Togglable from "./components/Togglable";
import LoginForm from "./components/Loginform";
import UsersList from "./components/Users";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import {  Form, Button, } from "react-bootstrap";
import { getBlog } from "./reducers/blogsReducer";
import { blogInitialization } from "./reducers/blogsReducer";
import { usersInitialization } from "./reducers/usersReducer";
import { commentInitialization } from "./reducers/commentsReducer";
import { Logout } from "./reducers/loginReducer";
import { connect } from "react-redux";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import { persistor } from "./store";

class App extends React.Component {

	componentDidMount() {
		this.props.usersInitialization();
		this.props.blogInitialization();
		this.props.commentInitialization();
		try {
			if ( this.props.user !== null )
			{

				blogService.setToken(this.props.user.token);

			}
		}
		catch (e) {
			// statements to handle any exceptions
			//logMyErrors(e); // pass exception object to error handler
		}


	}


	handleBlogChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}


	toggleVisible = () => {
		this.setState({ showAll: !this.state.showAll });
	}

	handleLoginFieldChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}


	logout = (event) => {
		event.preventDefault();

		this.props.Logout();
		persistor.purge();
		console.log("Kirjauduttu ulos");
	}


	render() {



		const tglloginForm = () => (
			<div>
				<Togglable buttonLabel="Login">
					<LoginForm/>
				</Togglable>

			</div>
		);

		const logoutForm = () => (
			<div>
				<Form onSubmit={this.logout}>
					<Button variant="danger" size="sm" type="submit">Log out</Button>
				</Form>
			</div>
		);


		const navbarStyle = {
			background: "lightgrey"
		};

		const navStyle = {
			fontWeight: "bold",
			color: "black",
			margin: "2px",
			padding: "2px"
		};


		return (

			<div>
				<h1>Blog app</h1>
				<div>
					<Notification />
					<Router>
						<div style={navbarStyle}>

							<NavLink to="/blogs" activeStyle={navStyle} style={{ textDecoration: "none" }}>Blogs</NavLink> &nbsp;
							<NavLink to="/users" activeStyle={navStyle} style={{ textDecoration: "none" }}>Users</NavLink>&nbsp;
							{this.props.user
								? <em>{this.props.username} logged in {this.props.user !== null && logoutForm()}</em>
								: <em>{this.props.user === null && tglloginForm()}</em>
							}&nbsp;

						</div>

						<Link to="/create"><button>Create New</button></Link>

						<Switch>
							<Route exact path="/blogs" render={() => <BlogList />} />
							<Route path="/users" render={() => <UsersList />} />
							<Route path="/create" render={() => <BlogForm blogs={this.props.blogs}/>} />
							<Route exact path="/blog/:id" render={({ match }) =>
								<Blog blog={this.props.blogs.find(blog => blog.id === match.params.id)} />} />
							<Route exact path="/user/:id" render={({ match }) =>
								<User blog={this.props.blogs.find(blog => blog.id === match.params.id)} user={this.props.users.find(user => user.id === match.params.id)} />} />
						</Switch>


					</Router>
				</div>


			</div>
		);
	}
}




const mapStateToProps = (state) => {
	return {
		blogs: state.blogs,
		users: state.users,
		notification: state.notification,
		user: state.logins.user,
		username: state.logins.username
	};
};


export default connect(
	mapStateToProps,
	{ usersInitialization, commentInitialization, blogInitialization, getBlog, Logout }
)(App);