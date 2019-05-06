import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import renderer from "react-test-renderer";
import BlogForm from "./../components/BlogForm";
import { shallow } from "enzyme";
import { Provider , connect } from "react-redux";
import { store, persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import App from "../App";

jest.mock("../services/blogs");




describe("render test", () => {
	it("renders correctly", () => {
		const tree = renderer
			.create(<Router><Link to="http://localhost:3000/">Blog app</Link></Router>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});


describe("BlogForm component", () => {
	it("matches the snapshot", () => {

		const tree = renderer
			.create(<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}><BlogForm />
				</PersistGate>
			</Provider>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});