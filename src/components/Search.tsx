import React, { useState } from 'react';

interface SearchProps {
	onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
	const [query, setQuery] = useState('');

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSearch(query);
	};

	return (
		<form onSubmit={handleSearch} className="search-form">
			<input
				type="text"
				placeholder="Search by title..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="search-input"
			/>
			<button type="submit" className="search-button">
				Search
			</button>
		</form>
	);
};

export default Search;
