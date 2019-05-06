// @flow

import React from "react";

const SimpleBlog = ({ blog }: { blog: any }, { onClick }: { onClick: any }) => (
	<div className="wrapper">
		<div className="titleauthor">
			{blog.title} {blog.author}
		</div>
		<div className="likes">
      blog has {blog.likes} likes
			<button onClick={onClick}>like</button>
		</div>
	</div>
);

export default SimpleBlog;