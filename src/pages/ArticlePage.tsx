import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../services/ApiServices';

const ArticlePage: React.FC = () => {
	const { url } = useParams<{ url?: string }>();
	const [article, setArticle] = useState<any | null>(null);

	useEffect(() => {
		const fetchArticle = async () => {
			try {
				const data = await ApiService.getArticleByUrl(url ?? '');
				setArticle(data);
			} catch (error) {
				console.error('Error fetching article:', error);
			}
		};

		fetchArticle();
	}, [url]);

	if (!article) return <div className="container mx-auto">Loading...</div>;

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">{article.title}</h1>
			<p className="text-gray-600 mb-4">{article.description}</p>
			<p className="text-gray-800">{article.content}</p>
		</div>
	);
};

export default ArticlePage;
