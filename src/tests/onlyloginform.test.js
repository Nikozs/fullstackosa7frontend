import React from "react";
import { mount } from "enzyme";
import App from "../App";
import Blog from "../components/Blog";

import { Provider , connect } from "react-redux";
import { store, persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";

jest.mock("../services/blogs");



describe("<App />", () => {
	let app;

	describe("when user is not logged", () => {
		beforeAll(() => {

			app = mount(<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<App />
				</PersistGate>
			</Provider>,);

			app.user = null;
		});


		it("only login form is rendered", () => {
			app.update();

			const blogComponents = app.find(Blog);
			expect(blogComponents.length).toEqual(0);
		});
	});
});
