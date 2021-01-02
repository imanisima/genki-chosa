import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../button-component/Button';
import MatchView from '../../game-component/match-game/MatchView';

import {kanaImg} from '../../game-component/match-game/CardPairs';

import '../../../assets/css/Lesson.css';

function KanaView() {

	const kanaImages = kanaImg;
	console.log("KANA VIEW: {imagesTest}", kanaImages);

	return (
		<div className="lesson-container">
			<h2>Kana Match</h2>
			<p>『Find matching pairs: Match the hiragana to its katakana.』</p>

			<MatchView 
				imageCards={kanaImages} />

			<div className="lesson-btns">
				<Link to="/lesson-0">
					<Button className="btns" buttonStyle="btn--primary" button-size="btn--medium">Lesson Home  </Button>
				</Link>

			</div>

		</div>
	);
}

export default KanaView;