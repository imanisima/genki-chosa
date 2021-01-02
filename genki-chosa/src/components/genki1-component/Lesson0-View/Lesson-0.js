import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../button-component/Button';

import '../Lesson.css';

function Lesson0() {

	return (
		<div className="lesson-container fill-page">
            <h2>Lesson 0: The Japanese Writing System</h2>
            <p>Match the hiragana to it's katakana!</p>


			<div className="lesson-btns">
				<Link to="/kana-match">
					<Button className="btns" buttonStyle="btn--primary" button-size="btn--large">スタート <i className="fas fa-exclamation"/> </Button>
				</Link>

			</div>
		</div>
	);
}

export default Lesson0;