import React from 'react';
import ReviewSection from '../components/lesson-component/genki1/ReviewSection';
import '../App.css';

// split by grammar and vocabulary: Chapter 1 -> Grammar (create a senence using the following structure) | Vocabulary (flashcard review)
function Genki1() {

	return (
		<div className="genki1">
			{/* <h2>Work in Progress</h2> */}

			<ReviewSection />
		</div>
	);
}

export default Genki1;