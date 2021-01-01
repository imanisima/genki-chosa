import React from 'react';
import LessonSection from '../components/genki1-component/lesson-list/LessonSection';
import '../App.css';

// split by grammar and vocabulary: Chapter 1 -> Grammar (create a senence using the following structure) | Vocabulary (flashcard review)
function Genki1() {

	return (
		<div className="genki1">
			{/* <h2>Work in Progress</h2> */}

			<LessonSection />
		</div>
	);
}

export default Genki1;