import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

interface Article {
	title: string;
	description: string;
	url: string;
}

const HomePage: React.FC = () => {
	const [news, setNews] = useState<Article[]>([]);

	useEffect(() => {
		fetchNews();
	}, []);

	const fetchNews = async () => {
		try {
			const response = await fetch(
				'https://newsapi.org/v2/top-headlines?country=us&apiKey=399bb8af786840aebd29e1044ed4c7f2'
			);
			const data = await response.json();
			setNews(data.articles);
		} catch (error) {
			console.error('Error fetching news:', error);
		}
	};

	return (
		<div className="container">
			<h1 className="title">INTVYEW</h1>
			<div className="grid">
				{news &&
					news.map((article, index) => (
						<Link to={`/article/${index}`} key={index} className="article-link">
							<div className="article">
								<h2 className="article-title">{article.title}</h2>
								<p className="article-description">{article.description}</p>
								<div className="article-actions">
									<button className="like-button">Like</button>
									<button className="dislike-button">Dislike</button>
									<Link to={`/article/${index}`} className="read-more-link">
										Read More
									</Link>
								</div>
							</div>
						</Link>
					))}
			</div>
		</div>
	);
};

export default HomePage;
