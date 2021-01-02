import React from 'react';
import DisplayGenkiI from '../components/general-view-component/Display-G1-View';
import '../App.css';

// split by grammar and vocabulary: Chapter 1 -> Grammar (create a senence using the following structure) | Vocabulary (flashcard review)
function Genki1() {

	return (
		<div className="genki1">
			<DisplayGenkiI />
		</div>
	);
}

export default Genki1;