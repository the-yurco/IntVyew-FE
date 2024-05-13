import React, { useEffect, useState } from 'react';
import ArticleListItem from '../components/ArticleListItem';
import { getTopHeadlines } from '../services/ApiServices';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
	const [articles, setArticles] = useState<any[]>([]);

	useEffect(() => {
		const fetchArticles = async () => {
			try {
				const data = await getTopHeadlines();
				setArticles(data.articles);
			} catch (error) {
				console.error('Error fetching articles:', error);
			}
		};

		fetchArticles();
	}, []);

	return (
		<>
			<Header />
			<div className="home-container">
				<div className="home-head">
					<h1 className="home-title">Latest News</h1>
				</div>
				<div className="home-grid">
					{articles.map((article: any, index: number) => (
						<ArticleListItem key={index} article={article} />
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default HomePage;
