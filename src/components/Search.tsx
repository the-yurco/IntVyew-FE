import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

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
			<div className="search-container">
				<input
					type="text"
					placeholder="Search by title..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					className="search-input"
				/>
				<FaSearch className="search-icon" />
			</div>
		</form>
	);
};

export default Search;
