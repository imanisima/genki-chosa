import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../button-component/Button';

import '../Lesson.css';

function KanaContainer() {

	return (
		<div className="lesson-container fill-page">
            <h2>Lesson 0: The Japanese Writing System</h2>
            <p>Match the hiragana to it's katakana!</p>


			<div className="lesson-btns">
				<Link to="/kana-match">
					<Button className="lesson-btns" buttonStyle="btn--primary" button-size="btn--large">スタート <i className="fas fa-exclamation"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i className="fas fa-chevron-circle-right" /></Button>
				</Link>

				<Link to="/genki1-home">
					<Button className="lesson-btns" buttonStyle="btn--primary" button-size="btn--medium"><i className="fas fa-chevron-circle-left" /> &nbsp; Return Home  </Button>
				</Link>

			</div>
		</div>
	);
}

export default KanaContainer;