import usersService from "../services/users";

const userReducer = (store = [], action) => {
	console.log(store);
	console.log(action);

	if (action.type === "INIT_USERS") {
		return action.data;
	}

	return store;
};





export const usersInitialization = () => {

	return async (dispatch) => {

		const users = await usersService.getAll();

		dispatch({
			type: "INIT_USERS",
			data: users
		});
	};
};




export default userReducer;