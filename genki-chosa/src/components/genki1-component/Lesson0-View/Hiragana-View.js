import React from 'react';
import { Link } from 'react-router-dom';
import MatchView from '../../game-component/match-game/MatchView';

import './../Lesson-View/Lesson.css';

function HiraganaView() {

	return (
		<div className="lesson-container">
            <MatchView />
            
		</div>
	);
}

export default HiraganaView;