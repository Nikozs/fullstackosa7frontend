import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Login } from "../reducers/loginReducer";



class LoginForm extends React.Component{

	Loginsubmit = async (event) =>  {
		event.preventDefault();
		let credentials=
		{
			username: event.target.username.value,
			password: event.target.password.value
		};

		this.props.Login(credentials);
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}


	render()
	{
		return (
			<div>
				<h2>Kirjaudu</h2>

				<Form onSubmit={this.Loginsubmit}>

					<Form.Group controlId="username">
						<Form.Label> Username: &nbsp; </Form.Label>
						<input
							value={this.username}
							onChange={this.handleChange}
							name="username"
						/>
					</Form.Group>

					<Form.Group controlId="password">
						<Form.Label> Password: &nbsp; </Form.Label>
						<input
							type="password"
							name="password"
							value={this.password}
							onChange={this.handleChange}
						/>
					</Form.Group>

					<Button variant="primary" type="submit">Kirjaudu sisään</Button>
				</Form>
			</div>
		);
	}
}

/*LoginForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired
}*/


// const mapStateToProps = (state) => {
//   return {
//     username: state.username,
//     password: state.password
//   }
// }


export default connect(
	null,
	{ Login }
)(LoginForm);