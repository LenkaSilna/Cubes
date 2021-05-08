import './style.css';

//roll a random number form 1 to 6
const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

//create a dice
const Dice = (props) => {
  const cubeElm = document.createElement('div');
  cubeElm.className = 'dice';
  const innerElm = document.createElement('div');
  innerElm.className = `dice__side dice__side--${props.side}`;
  const button = document.createElement('button');
  button.className = 'btn btn--small roll-btn';
  button.textContent = 'hodit';
  // click event to roll and show a random number(side) on a dice
  button.addEventListener('click', () => {
    innerElm.className = `dice__side dice__side--${roll()}`;
  });
  cubeElm.appendChild(innerElm);
  cubeElm.appendChild(button);
  return cubeElm;
};

//create dices in a row
const diceRow = document.querySelector('#dice-row');

for (let i = 0; i < 4; i++) {
  diceRow.appendChild(Dice({ side: roll() }));
}

// add a new dice in a row
const btnAdd = document.querySelector('#btn-add');
btnAdd.addEventListener('click', () => {
  diceRow.appendChild(Dice({ side: roll() }));
});

// shuffle all dices at once
const btnShuffle = document.querySelector('#btn-shuffle');
btnShuffle.addEventListener('click', () => {
  const dices = document.querySelectorAll('.dice__side');
  for (let i = 0; i < dices.length; i++) {
    const diceElm = dices[i];
    diceElm.className = `dice__side dice__side--${roll()}`;
  }
});
