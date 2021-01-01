import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../button-component/Button';
import Cards from './Cards';

import './LessonSection.css';

function LessonSection() {

	return (
		<div className="review-container">

			<Cards />




			{/* <div className="review-btns">
				<Link to="/vocabulary">
					<Button className="btns" buttonStyle="btn--primary" button-size="btn--large">Vocabulary <i className="fab fa-buffer" /> </Button>
				</Link>

				<Link to="/grammar">
					<Button className="btns" buttonStyle="btn--primary" button-size="btn--large">Grammar <i className="fas fa-quote-right" /> </Button>
				</Link>
			</div> */}
		</div>
	);
}

export default LessonSection;