
import axios from "axios";

const url =process.env.REACT_APP_BACKEND_URL+ "/users";

const getAll = async () => {
	const response = await axios.get(url);
	return response.data;
};

export default {
	getAll
};