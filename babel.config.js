
module.exports = {
	env: {
		test: {
			presets: [
				[
					"@babel/preset-env",
					{
						targets: {
							node: "current",
						},
						modules: "commonjs",
						debug: false
					}
				],
				"@babel/preset-react", "flow"
			],
			plugins: [
				"@babel/plugin-proposal-class-properties",
				"@babel/plugin-transform-flow-strip-types"
			],
		}
	}
};