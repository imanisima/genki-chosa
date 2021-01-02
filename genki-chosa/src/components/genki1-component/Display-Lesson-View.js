import React from 'react';
import '../general-view-component/Cards.css';
import CardItem from '../general-view-component/CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h2>GENKI I</h2>
      <p align="center">『Choose a lesson from below.』</p>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/genki1/shrine-writing.jpg'
              text='『Japanese Writing System: Hiragana & Katakana.』'
              label='Lesson 0'
              path='lesson-0'
            />
            <CardItem
              src='images/genki1/friends.jpg'
              text='『Introductions & Time.』'
              label='Lesson 1'
              path='/genk1/lesson-1'
            />
            <CardItem
              src='images/genki1/tokyo-chef.jpg'
              text='『Shopping & Eating at a restaurant.』'
              label='Lesson 2'
              path='/genk1/lesson-2'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/genki1/akihabara.jpg'
              text='『Going out with friends.』'
              label='Lesson 3'
              path='/genk1/lesson-3'
            />
            <CardItem
              src='images/genki1/hiroshima-castle.jpg'
              text='『Talking about the past.』'
              label='Lesson 4'
              path='/genk1/lesson-4'
            />
            <CardItem
              src='images/genki1/osaka-trip.jpg'
              text='『Describing experiences in past & present.』'
              label='Lesson 5'
              path='/genk1/lesson-5'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;