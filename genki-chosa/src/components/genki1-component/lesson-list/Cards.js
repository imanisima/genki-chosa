import React from 'react';
import '../../card-component/Cards.css';
import CardItem from '../../card-component/CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h2>GENKI I</h2>
      <p align="center">Choose a lesson from below.</p>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/genki1/shrine-writing.jpg'
              text='Japanese Writing System: Hiragana & Katakana'
              label='Lesson 0'
              path='/services'
            />
            <CardItem
              src='images/genki1/friends.jpg'
              text='Introductions and time.'
              label='Lesson 1'
              path='/services'
            />
            <CardItem
              src='images/genki1/tokyo-chef.jpg'
              text='Shopping and eating at a restaurant.'
              label='Lesson 2'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/genki1/akihabara.jpg'
              text='Going out with friends.'
              label='Lesson 3'
              path='/products'
            />
            <CardItem
              src='images/genki1/hiroshima-castle.jpg'
              text='Talking about the past.'
              label='Lesson 4'
              path='/sign-up'
            />
            <CardItem
              src='images/genki1/osaka-trip.jpg'
              text='Describing experiences in past and present.'
              label='Lesson 5'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;