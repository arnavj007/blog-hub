import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {	// blogs, title are the props which were passed from Home.js

	return (
		<div className="blog-list">
			<h2>{title}</h2>
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<Link to={`/blogs/${blog.id}`}> {/* the way json server works, this works out of the box */}
						<h2>{blog.title}</h2>
						<p>Written by {blog.author}</p>
					</Link>
				</div>
			))}
		</div>
	);
}

export default BlogList;