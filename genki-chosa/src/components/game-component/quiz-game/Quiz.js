import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../button-component/Button';
import './Quiz.css';

export default function Quiz() {
	const { questions } = require('./Questions.js');

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	return (
		<div className='quiz'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}

					<div className="lesson-btns">
						<Link to="/lesson-0">
							<Button className="btns" buttonStyle="btn--primary" button-size="btn--large">Back to main </Button>
						</Link>

						<Link to="/genki1">
							<Button className="btns" buttonStyle="btn--primary" button-size="btn--large">Back to Genki 1 Home </Button>
						</Link>

						<Link to="/game">
							<Button className="btns" buttonStyle="btn--primary" button-size="btn--large">Try Again </Button>
						</Link>
					</div>
				</div>

			) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button class="question-btn" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							))}
						</div>
					</>
				)}
		</div>
	);
}