import { useState, useEffect } from 'react';

// custom hook, used for making reusable fetch request

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortCont = new AbortController();	/*used to abort task, in case of user backing out, 
													  clicking another link mid-fetch etc. */

		setTimeout(() => {	//timeout added to simulate real fetch request from server
			fetch(url, { signal: abortCont.signal })
				.then(res => {
					if (!res.ok) {
						throw Error('could not fetch data');
					}
					return res.json();
				})
				.then(data => {
					setData(data);
					setIsPending(false);
					setError(null);
				})
				.catch((err) => {
					if (err.name === 'AbortError') {
						console.log('fetch aborted');
					}
					else {
						setIsPending(false);
						setError(err.message);
					}
				});
		}, 1000);

		return () => abortCont.abort();

	}, [url]); 

	// useEffect contains function ran whenever page renders
	// the array apart from the function contains dependencies of it, i.e. func only runs when url changes here

	return { data, isPending, error };	//we can also return array like other hooks, but this allows us to not bother with order
}

export default useFetch;