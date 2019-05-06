// @flow




import * as React from "react";
import { connect } from "react-redux";

/*::type Props = {
	comment: any
  };*/


class Comment extends React.Component/*::<Props>*/ {


	render() {
		return(
			<div>

				{this.props.comment.comment}

			</div>
		);
	}
}

/*
Comment.propTypes = {
	comment: PropTypes.string.isRequired
};*/

// const mapStateToProps = (state) => {
//     return {
//       comment: state.comment
//     }
//   }

export default connect(
	null
)(Comment);