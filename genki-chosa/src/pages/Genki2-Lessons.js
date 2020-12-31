import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../components/welcome-component/Welcome.css';
import { Button } from '../components/button-component/Button';

function Genki2() {

	return (
		<div className="genki2">
			<div>
				<Link to="/">
					<Button className="btns" buttonStyle="btn--primary" button-size="btn--large">Coming Soon! <i className="fas fa-feather-alt" /> </Button>
				</Link>
			</div>
		</div>
	);
}

export default Genki2;