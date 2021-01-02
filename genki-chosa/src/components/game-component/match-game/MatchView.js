import React, { useState } from 'react';
import Board from './Board/Board';

function MatchView() {
  const cards = buildCards();
  return (
    <div className="matchview-container">
      <Board cards={cards} />
    </div>
  )
}

export default MatchView;

function buildCards() {
  let id = 0
  const images = {
    friends: 'images/genki1/friends.jpg',
    akihabara: 'images/genki1/akihabara.jpg',
    train: 'images/genki1/train-station.jpg',
    shrine: 'images/genki1/shrine-writing.jpg',
    chef: 'images/genki1/tokyo-chef.jpg',
    castle: 'images/genki1/hiroshima-castle.jpg',
    osaka: 'images/genki1/osaka-trip.jpg', 
    hanabi: 'images/genki1/hanabi.jpg',
  }

  const cards = Object.keys(images).reduce((result, item) => {
    const getCard = () => ({
      id: id++,
      type: item,
      backImg: 'images/genki1/blossoms.jpg',
      frontImg: images[item],
      flipped: false,
    })
    return [...result, getCard(), getCard()]
  }, [])
  return shuffle(cards)
}

function shuffle(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let randomIdx = Math.floor(Math.random() * len)
    let copyCurrent = {...arr[i]}
    let copyRandom = {...arr[randomIdx]}
    arr[i] = copyRandom
    arr[randomIdx] = copyCurrent
  }
  return arr
}