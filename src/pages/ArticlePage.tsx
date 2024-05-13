import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleByUrl } from '../services/ApiServices';
import '../index.css';

interface Article {
	title: string;
	description: string;
	url: string;
}

const ArticlePage: React.FC = () => {
	const { url = '' } = useParams<{ url?: string }>();
	const [article, setArticle] = useState<Article | null>(null);

	useEffect(() => {
		console.log('Fetching article...');
		const fetchArticle = async () => {
			try {
				if (!url) return;
				const data = await getArticleByUrl(decodeURIComponent(url));
				console.log('Article Data:', data);
				setArticle(data);
			} catch (error) {
				console.error('Error fetching article:', error);
			}
		};

		fetchArticle();
	}, [url]);

	if (!article) return <div className="article-container">Loading...</div>;

	return (
		<div className="article-container">
			<h1 className="article-title">{article.title}</h1>
			<p className="article-description">{article.description}</p>
			<a
				className="read-more-link"
				href={article.url}
				target="_blank"
				rel="noopener noreferrer"
			>
				Read More
			</a>
		</div>
	);
};

export default ArticlePage;
