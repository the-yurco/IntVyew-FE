import React from 'react';
import { Link } from 'react-router-dom';

interface ArticleListItemProps {
	article: {
		id: number;
		title: string;
		description: string;
		url: string;
		publishedAt: string;
		urlToImage: string;
	};
}

const ArticleListItem: React.FC<ArticleListItemProps> = ({ article }) => {
	return (
		<Link
			to={`/article/${encodeURIComponent(article.id)}`}
			className="tweet-card"
		>
			<div className="tweet-card-content">
				<div className="tweet-card-body">
					<img
						src={article.urlToImage}
						alt={article.title}
						className="tweet-image"
					/>
					<h2 className="tweet-title">{article.title}</h2>
					<p className="tweet-description">{article.description}</p>
					<p className="tweet-published">
						Published on {new Date(article.publishedAt).toDateString()}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default ArticleListItem;
