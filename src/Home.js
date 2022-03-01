import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
	const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');	// data:blogs renames it to blogs

	return (
		<div className="home">	{/* variable && <element> used to only show the element if variable true/not null */}
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} title="All Blogs" />}	{/* sending props blogs and title */}
		</div>
	);
}

export default Home;