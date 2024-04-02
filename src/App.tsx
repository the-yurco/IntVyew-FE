import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import HomePage from './pages/HomePage';
import './index.css';
import ArticlePage from './components/ArticlePage';

const App: React.FC = () => {
	return (
		<AppProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/article/:id" element={<ArticlePage />} />
				</Routes>
			</BrowserRouter>
		</AppProvider>
	);
};

export default App;
