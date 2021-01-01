import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../button-component/Button';

import '../../../App.css';

function Lesson0() {

	return (
		<div className="review-container">
            <h2>Lesson 0: The Japanese Writing System</h2>
            <p>Which writing system would you like to review?</p>


			<div className="review-btns">
				<Link to="/hiragana">
					<Button className="btns" buttonStyle="btn--outline" button-size="btn--large">Hiragana (あ) </Button>
				</Link>

				<Link to="/katakana">
					<Button className="btns" buttonStyle="btn--outline" button-size="btn--large">Katakana (ア) </Button>
				</Link>
			</div>
		</div>
	);
}

export default Lesson0;