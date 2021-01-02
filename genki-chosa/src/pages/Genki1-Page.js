import React from 'react';
import Cards from '../components/genki1-component/Display-Lesson-View';
import '../App.css';

// split by grammar and vocabulary: Chapter 1 -> Grammar (create a senence using the following structure) | Vocabulary (flashcard review)
function Genki1() {

	return (
		<div className="genki1">
			<Cards />
		</div>
	);
}

export default Genki1;