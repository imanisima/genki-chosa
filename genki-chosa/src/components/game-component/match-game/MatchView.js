import React, { useState } from 'react';
import Board from './Board/Board';

function MatchView(props) {
  console.log("MATCH VIEW: {imgCards}: ", props.imageCards);

  const cards = buildCards(props);

  return (
    <div className="matchview-container">
      <Board cards={cards} />
    </div>
  )
}

export default MatchView;

function buildCards(props) {
  let id = 0
  const imgCard = props.imageCards;

  const cards = Object.keys(imgCard).reduce((result, item) => {
    const getCard = () => ({
      id: id++,
      type: item,
      backImg: 'images/genki1/blossoms.jpg',
      frontImg: imgCard[item],
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