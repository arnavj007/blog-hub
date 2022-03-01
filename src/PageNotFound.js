import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<div className="page-not-found">
			<h2>Sorry</h2>
			<p>Page specified cannot be found</p>
			<Link to="/">Back to homepage...</Link>
		</div>
	);
}
 
export default PageNotFound;