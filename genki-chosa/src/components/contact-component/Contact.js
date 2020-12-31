import React from 'react';
import {Button} from '../button-component/Button';
import {Link} from 'react-router-dom';

import './Contact.css';

function Contact() {

	return (
		<div className="contact-container">
			<h2>Need to get in touch?</h2>
			<p>Found a bug or have a suggestion?</p>
            
			<div className="Contact-btns">
				<Link to="/github-issues"
                    target='_blank'>
					<Button className="btns" buttonStyle="btn--primary" button-size="btn--large"><i className="fas fa-exclamation-triangle"/> SUBMIT AN ISSUE <i className="fas fa-exclamation-triangle"/> </Button>
				</Link>
			</div>
			
		</div>
	);
}

export default Contact;