import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
	return (
		<header className="custom-header">
			<nav className="header-nav">
				<Link to="/" className="header-logo">
					Your Website
				</Link>
				<ul className="header-links">
					<li>
						<Link to="/" className="header-link">
							Home
						</Link>
					</li>
					<li>
						<Link to="/about" className="header-link">
							About
						</Link>
					</li>
					<li>
						<Link to="/contact" className="header-link">
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
