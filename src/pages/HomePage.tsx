import React, { useEffect, useState } from 'react';
import ArticleListItem from '../components/ArticleListItem';

const HomePage: React.FC = () => {
	const [articles, setArticles] = useState<any[]>([]);

	useEffect(() => {
		const fetchArticles = async () => {
			try {
				const response = await fetch(
					'https://newsapi.org/v2/top-headlines?country=us&apiKey=399bb8af786840aebd29e1044ed4c7f2'
				);
				if (!response.ok) {
					throw new Error('Failed to fetch articles');
				}
				const data = await response.json();
				setArticles(data.articles);
			} catch (error) {
				console.error('Error fetching articles:', error);
			}
		};

		fetchArticles();
	}, []);

	return (
		<div className="container">
			<h1 className="title">Latest News</h1>
			<div className="grid">
				{articles.map((article: any, index: number) => (
					<ArticleListItem key={index} article={article} index={index} />
				))}
			</div>
		</div>
	);
};

export default HomePage;
