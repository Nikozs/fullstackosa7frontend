import { combineReducers, createStore, applyMiddleware } from "redux";
import notificationReducer from "./reducers/notificationReducer";
import userReducer from "./reducers/usersReducer";
import blogsReducer from "./reducers/blogsReducer";
import loginReducer from "./reducers/loginReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import commentsReducer from "./reducers/commentsReducer";


const persistConfig = {
	key: "root",
	storage
};

const reducer = combineReducers({
	users: userReducer,
	notification: notificationReducer,
	blogs: blogsReducer,
	comments: commentsReducer,
	logins: loginReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
	persistedReducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);

export const persistor = persistStore(store);

