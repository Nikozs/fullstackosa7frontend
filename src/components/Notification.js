import React from "react";
import { connect } from "react-redux";

class Notification extends React.Component {

	render() {
		if (this.props.notification !== "") {
			const style = {
				border: "solid",
				padding: 10,
				borderWidth: 1
			};

			return (
				<div style={style}>
					{this.props.notification}
				</div>
			);
		} else { return (<div></div>); }
	}
}

const mapStateToProps = (state) => {
	return {
		blogs: state.blogs,
		notification: state.notification
	};
};

const ConnectedNotification = connect(
	mapStateToProps
)(Notification);

export default ConnectedNotification;

