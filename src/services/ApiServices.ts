const API_KEY = 'baaad890b21141afa4b594d2763c07d7';

export async function getTopHeadlines() {
	try {
		const response = await fetch(
			`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
		);
		if (!response.ok) {
			throw new Error('Failed to fetch top headlines');
		}
		return response.json();
	} catch (error) {
		console.error('Error fetching top headlines:', error);
		throw error;
	}
}
