import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../button-component/Button';
import MatchView from '../../game-component/match-game/MatchView';

import '../Lesson.css';

function KanaView() {

	return (
		<div className="lesson-container">
			<h2>Kana Match</h2>
			<p>『Find matching pairs: Match the hiragana to its katakana.』</p>

            <MatchView />

			<div className="lesson-btns">
				<Link to="/lesson-0">
					<Button className="btns" buttonStyle="btn--primary" button-size="btn--large">Return to Lesson Home &nbsp; <i className="fas fa-chevron-circle-right" /> </Button>
				</Link>

			</div>
            
		</div>
	);
}

export default KanaView;