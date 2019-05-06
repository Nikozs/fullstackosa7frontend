import loginService from "../services/login";
import blogService from "../services/blogs";
const initialState = { user: null, username: "", password: "" };

const loginReducer = (store = initialState, action) => {

	if (action.type === "LOGIN") {
		const user = { ...action.data };
		return user;
	}
	if (action.type === "LOGOUT") {
		let user = { user: null, username: "", password: "" };
		return user;
	}

	return store;
};

export const Login = (credentials) => {
	return async (dispatch) => {
		const user = await loginService.login(credentials);
		blogService.setToken(user.token);
		dispatch({
			type: "LOGIN",
			data: { user:user,username: credentials.username,password:credentials.password }
		});
	};
};

export const Logout = () => {
	return {
		type: "LOGOUT"
	};
};

export default loginReducer;