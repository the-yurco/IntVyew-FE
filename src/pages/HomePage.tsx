import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegClock } from 'react-icons/fa';
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

	const calculateAverageReadTime = (description: string | null): number => {
		if (!description) return 0;
		const wordsPerMinute = 200;
		const wordCount = description.split(' ').length;
		return Math.ceil(wordCount / wordsPerMinute);
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
								<div className="article-details">
									<span className="article-tags">#News #Global</span>
									<span className="article-watched-stats">
										<FaRegEye /> 120 times
									</span>
									<span className="article-read-time">
										<FaRegClock />{' '}
										{calculateAverageReadTime(article.description)} min
									</span>
								</div>
								<Link to={`/article/${index}`} className="read-more-link">
									Read More
								</Link>
							</div>
						</Link>
					))}
			</div>
		</div>
	);
};

export default HomePage;
