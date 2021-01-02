import React from 'react';
import { Button } from '../button-component/Button';
import { Link } from 'react-router-dom';

// import './Contact.css';
import '../../assets/css/Lesson.css';

function Contact() {

	return (
		<div className="lesson-container fill-page">
			<h2>Need to get in touch?</h2>
			<p>『Found a bug or have a suggestion?』</p>

			<div className="lesson-btns">
				<Link to="/github-issues"
					target='_blank'>
					<Button className="btns" buttonStyle="btn--primary" button-size="btn--large"> SUBMIT AN ISSUE &nbsp;<i className="fab fa-github" /> </Button>
				</Link>

			</div>

		</div>
	);
}

export default Contact;