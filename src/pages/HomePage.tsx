import React, { useEffect, useState } from 'react';
import ArticleListItem from '../components/ArticleListItem';
import Search from '../components/Search';
import { getTopHeadlines } from '../services/ApiServices';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
	const [articles, setArticles] = useState<any[]>([]);
	const [filteredArticles, setFilteredArticles] = useState<any[]>([]);

	useEffect(() => {
		const fetchArticles = async () => {
			try {
				const data = await getTopHeadlines();
				setArticles(data.articles);
				setFilteredArticles(data.articles); // Initialize filteredArticles with all articles
			} catch (error) {
				console.error('Error fetching articles:', error);
			}
		};

		fetchArticles();
	}, []);

	const handleSearch = (query: string) => {
		const filtered = articles.filter((article) =>
			article.title.toLowerCase().includes(query.toLowerCase())
		);
		setFilteredArticles(filtered);
	};

	return (
		<>
			<Header />
			<div className="home-container">
				<div className="home-head">
					<h1 className="home-title">Latest News</h1>
					<Search onSearch={handleSearch} />
				</div>
				<div className="home-grid">
					{filteredArticles.map((article: any, index: number) => (
						<ArticleListItem key={index} article={article} />
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default HomePage;
