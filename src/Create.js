import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
	const [title, setTitle] = useState('');		// hook, used to act as a dynamic element on the page
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('mario');
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();	// used to redirect as well as move forward and backward in history

	const handleSubmit = (e) => {
		e.preventDefault();	//prevents default action [in case of form, it refreshes on submit]
		const blog = { title, body, author };

		setIsPending(true);

		// NOTE: here we can also make this fetch api component a custom hook for get/post/put/delete for reusability
 
		setTimeout(() => {			//NOTE: timeout only to simulate real interaction with server
			fetch('http://localhost:8000/blogs', {
				method: 'POST',
				headers: { 'content-type': 'application/json'},
				body: JSON.stringify(blog)
			}).then(() => {
				console.log('new blog added');
				setIsPending(false);
				// history.go(-1); equivalent to pressing back button on browser
				history.push('/');
			})
			
		}, 1000);
	}

	return (
		<div className="create">	{/* NOTE: here className used NOT class as class is reserved keyword in js */}
			<h2>Add a New Blog</h2>
			<form method="post" onSubmit={handleSubmit}>	{/* for each form element we must keep value, and onChange to work */}
				<label>Blog Title:</label>
				<input
					type="text"
					required
					value={title}	 
					onChange={(e) => setTitle(e.target.value)}
				/>

				{/* here we see in onChange we access event object e to get value from form input */}

				<label>Blog Body:</label>
				<textarea
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				
				<label>Blog Author:</label>
				<select
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				>
					<option value="mario">kiryu</option>
					<option value="yoshi">kazama</option>
					<option value="luigi">majima</option>
					<option value="wario">daigo</option>
					<option value="waluigi">nakahara</option>
				</select>
				
				{!isPending && <button>Add Blog</button>}
				{isPending && <button disabled>Adding blog...</button>}
			</form>
		</div >
	);
}

export default Create;