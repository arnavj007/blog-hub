import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
	const { id } = useParams();
	const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
	const [deletePending, setDeletePending] = useState(false);
	const history = useHistory();

	const handleClick = () => {

		setDeletePending(true);

		setTimeout(() => {			//NOTE: timeout only to simulate real interaction with server
			fetch('http://localhost:8000/blogs/' + blog.id, {
				method: 'DELETE'
			}).then(() => {
				history.push('/'); // routes us back to home page
				setDeletePending(false);
			})
		}, 1000);
	}

	return (
		<div className="blog-details">
			{isPending && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<div>{blog.body}</div>
					{!deletePending && <button onClick={handleClick}>Delete</button>}
					{deletePending && <button disabled>Deleting blog...</button>}
				</article>
			)}
		</div>
	);
}

export default BlogDetails;