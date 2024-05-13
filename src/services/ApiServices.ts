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

export async function getArticleByUrl(url: string) {
	try {
		console.log('Fetching article from URL:', url);
		const response = await fetch(
			`https://newsapi.org/v2/everything?url=${encodeURIComponent(
				url
			)}&apiKey=${API_KEY}`
		);
		if (!response.ok) {
			throw new Error('Failed to fetch article');
		}
		const data = await response.json();
		console.log('Article Data:', data);
		return data.articles[0];
	} catch (error) {
		console.error('Error fetching article:', error);
		throw error;
	}
}
