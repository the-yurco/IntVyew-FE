const API_KEY = '399bb8af786840aebd29e1044ed4c7f2';

class ApiService {
	static async getTopHeadlines() {
		const response = await fetch(
			`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
		);
		if (!response.ok) {
			throw new Error('Failed to fetch top headlines');
		}
		return response.json();
	}

	static async getArticleByUrl(url: string) {
		const response = await fetch(
			`https://newsapi.org/v2/everything?url=${encodeURIComponent(
				url
			)}&apiKey=${API_KEY}`
		);
		if (!response.ok) {
			throw new Error('Failed to fetch article');
		}
		const data = await response.json();
		return data.articles[0];
	}
}

export default ApiService;
