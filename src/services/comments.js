import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL+"/comments/";

const getAll = async () => {
	const response = await axios.get(url);
	return response.data;
};

const addNewComment= async (blogId,comment) => {
	console.log(blogId);
	console.log(comment);

	const response = await axios.post(url + blogId, { comment });
	return response.data;
};

export default { getAll, addNewComment };