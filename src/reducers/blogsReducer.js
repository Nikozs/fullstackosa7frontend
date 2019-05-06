import blogsService from "../services/blogs";

const blogReducer = (store = [], action) => {

	if (action.type === "CREATE") {
		const newblog = { ...action.data };
		return [...store, newblog];
	}

	if (action.type === "INIT_BLOGS")
	{
		return action.data;
	}
	if (action.type === "GETBLOG")
	{
		return action.data;
	}

	return store;
};


export const blogCreation = (data) => {
	return async (dispatch) => {
		const newblog=await blogsService.create(data);

		dispatch( {
			type: "CREATE",
			data: newblog
		});
	};
};

export const getBlog = () => {
	return async (dispatch) => {
		const blog = await blogsService.getBlog();
		dispatch({
			type: "GETBLOG",
			data: blog
		});
	};
};

export const blogInitialization = () => {
	return async (dispatch) => {
		const blogs = await blogsService.getAll();
		dispatch({
			type: "INIT_BLOGS",
			data: blogs
		});
	};
};

export default blogReducer;