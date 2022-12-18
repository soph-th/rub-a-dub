let URL = "http://localhost:3001";

export default function HomePage() {
	return (
		<div>
			<h1>Arooj and Sophie in da house</h1>
			<a href={`${URL}/search-mentors`}>Search Mentors</a>
		</div>
	);
}
