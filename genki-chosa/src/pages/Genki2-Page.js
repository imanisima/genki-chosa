import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import LessonSection from '../components/genki2-component/lesson-list/LessonSection';
import { Button } from '../components/button-component/Button';

function Genki2() {

	return (
		<div className="genki2">

			<LessonSection />
			
		</div>
	);
}

export default Genki2;