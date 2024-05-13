import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegClock } from 'react-icons/fa';

interface ArticleListItemProps {
	article: {
		title: string;
		description: string;
		url: string;
		publishedAt: string;
		content?: string;
	};
	index: number;
}

const ArticleListItem: React.FC<ArticleListItemProps> = ({
	article,
	index
}) => {
	const calculateReadTime = (content: string) => {
		const wordsPerMinute = 200;
		const wordCount = content.split(' ').length;
		return Math.ceil(wordCount / wordsPerMinute);
	};

	return (
		<Link to={`/article/${index}`} className="article-link">
			<div className="article">
				<h2 className="article-title">{article.title}</h2>
				<p className="article-description">{article.description}</p>
				<div className="article-details">
					<span className="article-watched-stats">
						<FaRegEye /> {Math.floor(Math.random() * 1000)} times
					</span>
					<span className="article-read-time">
						<FaRegClock /> {calculateReadTime(article.content || '')} min
					</span>
					<span className="article-published-at">
						{new Date(article.publishedAt).toDateString()}
					</span>
				</div>
			</div>
		</Link>
	);
};

export default ArticleListItem;
