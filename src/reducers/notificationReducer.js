const initialState = "";

const notificationReducer = (store = initialState, action) => {
	switch (action.type) {
	case "NOTIFY":
		return action.data.content;

	case "NOTIFYNEW":
		return "Added blog" /* + action.data.content + "'"*/;

	case "NOTIFYCOMMENT":
		return "Comment added";


	case "CLEAR":
		return "";

	default:
	}

	return store;
};

export const commentNotification = (content) => {
	return {
		type: "NOTIFYCOMMENT",
		data: {
			content
		}
	};
};

export const voteNotification = (content) => {
	return {
		type: "NOTIFYVOTE",
		data: {
			content
		}
	};
};

export const newblogNotification = (content) => {
	return {
		type: "NOTIFYNEW",
		data: {
			content
		}
	};
};


export const thunkNotify = (content, time) => {
	return async (dispatch) => {
		dispatch({
			type: "NOTIFY",
			data: {
				content
			}
		});
		setTimeout(() => {
			dispatch({
				type: "CLEAR"
			});
		}, time);
	};

};

export const clearNotification = () => {
	return {
		type: "CLEAR"
	};
};

export default notificationReducer;