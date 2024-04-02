import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';

interface Article {
	title: string;
	description: string;
	url: string;
}

const ArticlePage: React.FC = () => {
	const { id } = useParams<{ id?: string }>();
	const [article, setArticle] = useState<Article | null>(null);

	useEffect(() => {
		const fetchArticle = async () => {
			try {
				const response = await fetch(
					'https://newsapi.org/v2/top-headlines?country=us&apiKey=399bb8af786840aebd29e1044ed4c7f2'
				);
				const data = await response.json();
				const selectedArticle = data.articles[parseInt(id || '0', 10)];
				setArticle(selectedArticle);
			} catch (error) {
				console.error('Error fetching article:', error);
			}
		};

		fetchArticle();
	}, [id]);

	if (!article) return <div className="container">Loading...</div>;

	return (
		<div className="container">
			<h1 className="title">{article.title}</h1>
			<p className="article-description">{article.description}</p>
			<a href={article.url} target="_blank" rel="noopener noreferrer">
				Read More
			</a>
		</div>
	);
};

export default ArticlePage;
