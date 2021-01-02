import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button-component/Button';
import '../../assets/css/Cards.css';

function DisplayGenkiII() {
    return (
        <div className='cards'>
            <h2>GENKI II</h2>
            <p align="center">『Coming Soon.』</p>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <p>This page isn't up yet!</p>

                    <div className="lesson-btns">
                        <Link to="/">
                            <Button className="btns" buttonStyle="btn--primary" button-size="btn--large">Return Home </Button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default DisplayGenkiII;