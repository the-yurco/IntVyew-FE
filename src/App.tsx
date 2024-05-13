import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './components/ArticlePage';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/article/:id" element={<ArticlePage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
