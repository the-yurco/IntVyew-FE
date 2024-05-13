import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className="custom-footer">
			<div className="footer-content">
				<p>&copy; {new Date().getFullYear()} ANews. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
