import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../button-component/Button';

import './ReviewSection.css';

function ReviewSection() {

	return (
		<div className="review-container">
			<h2>Choose a Focus</h2>

			<p>What area would you like to focus on?</p>

			<div className="review-btns">
				<Link to="/vocabulary">
					<Button className="btns" buttonStyle="btn--primary" button-size="btn--large">Vocabulary <i className="fas fa-feather-alt" /> </Button>
				</Link>

				<Link to="grammar">
					<Button className="btns" buttonStyle="btn--primary" button-size="btn--large">Grammar <i className="fas fa-feather-alt" /> </Button>
				</Link>

			</div>

		</div>
	);
}

export default ReviewSection;