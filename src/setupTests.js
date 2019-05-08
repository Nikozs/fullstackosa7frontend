const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new Adapter() });


let savedItems = {};

const localStorageMock = {
	setItem: (key, item) => {
		savedItems[key] = item;
	},
	getItem: (key) => savedItems[key],
	clear: savedItems = {}
};

window.localStorage = localStorageMock;