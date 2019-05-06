//import blogsService from '../services/blogs'
import commentsService from "../services/comments";

const commentReducer = (store = [], action) => {

	if (action.type === "CREATE") {
		const newcomment = { ...action.data };
		return [...store, newcomment];
	}

	if (action.type === "INIT_COMMENTS")
	{
		return action.data;
	}
	if (action.type === "GETCOMMENT")
	{
		return action.data;
	}

	if (action.type === "ADDCOMMENT")
	{
		return action.data;
	}

	if (action.type === "GETCOMMENTS")
	{
		return action.data;
	}

	return store;
};


export const commentCreation = (data) => {
	return {
		type: "CREATE",
		data
	};
};


export const commentInitialization = () => {
	return async (dispatch) => {
		const comments = await commentsService.getAll();
		dispatch({
			type: "INIT_COMMENTS",
			data: comments
		});
	};
};

export const getComments = () => {
	return async (dispatch) => {
		const comment = await commentsService.getAll();
		dispatch({
			type: "GETCOMMENTS",
			data: comment
		});
	};
};

export const getComment = (id) => {
	return async (dispatch) => {
		const comment = await commentsService.getComment(id);
		dispatch({
			type: "GETCOMMENT",
			data: comment
		});
	};
};

export const addComment = (blogId,Comment) => {
	return async (dispatch) => {
		const comment = await commentsService.addNewComment(blogId,Comment);
		dispatch({
			type: "CREATE",
			data: comment
		});
	};
};

export default commentReducer;