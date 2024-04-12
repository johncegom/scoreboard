let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;

let homeIncrementOne = () => {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
};

let homeIncrementTwo = () => {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
};

let homeIncrementThree = () => {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
};

let guestIncrementOne = () => {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
};

let guestIncrementTwo = () => {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
};

let guestIncrementThree = () => {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
};
