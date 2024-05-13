import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
	return (
		<header className="custom-header">
			<div className="header-wrapper">
				<nav className="header-nav">
					<Link to="/" className="header-logo">
						IntVyew
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
			</div>
		</header>
	);
};

export default Header;
