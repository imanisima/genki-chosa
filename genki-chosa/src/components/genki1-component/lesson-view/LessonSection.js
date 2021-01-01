import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../button-component/Button';
import Cards from './LessonCards';

import './LessonSection.css';

function LessonSection() {

	return (
		<div className="review-container">

			<Cards />

		</div>
	);
}

export default LessonSection;