import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../button-component/Button';

import './LessonSection.css';

function LessonSection() {

	return (
		<div className="review-container">

			<p>This page isn't up yet!</p>

			<div className="review-btns">
				<Link to="/">
					<Button className="btns" buttonStyle="btn--primary" button-size="btn--large">Return Home &nbsp; <i className="fas fa-chevron-circle-right" /> </Button>
				</Link>

			</div>

		</div>
	);
}

export default LessonSection;