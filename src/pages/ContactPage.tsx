import React from 'react';

const ContactPage: React.FC = () => {
	return (
		<div className="contact-container">
			<h1 className="contact-title">Contact Us</h1>
			<p>
				If you have any questions, suggestions, or feedback, feel free to reach
				out to us:
			</p>
			<ul>
				<li>Email: info@example.com</li>
				<li>Phone: +1 123-456-7890</li>
				<li>Address: 123 Main Street, City, Country</li>
			</ul>
		</div>
	);
};

export default ContactPage;
