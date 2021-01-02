import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../button-component/Button';

import CardItem from '../../general-view-component/CardItem';
import '../../../assets/css/Cards.css';
import '../../../assets/css/Lesson.css';

function KanaContainer() {

	return (
		<div className="lesson-container fill-page">
			<div className='cards'>
				<h3>Lesson 0: The Japanese Writing System</h3>
				<p align="center">『Choose a method of review.』</p>

				<div className='cards__container'>
					<div className='cards__wrapper'>
						<ul className='cards__items'>
							<CardItem
								src='images/genki1/shrine-writing.jpg'
								text='『Match Hiragana (あ) to its Katakana (ア)!』'
								label='Matching Game'
								path='/kana-match'
							/>

							<CardItem
								src='images/genki1/friends.jpg'
								text='『Quiz yourself on the writing system!』'
								label='Quiz Game'
								path='/quiz'
							/>
						</ul>
					</div>

					<div className="lesson-btns">

						<Link to="/genki1-home">
							<Button className="lesson-btns" buttonStyle="btn--primary" button-size="btn--medium"> Return Home  </Button>
						</Link>

					</div>
				</div>

			</div>

		</div>
	);
}

export default KanaContainer;