let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;
let defaultBgColor = "#023047";

let checkLeadTeam = () => {
  if (homeScore > guestScore) {
    homeScoreEl.style.backgroundColor = "#ffb703";
    guestScoreEl.style.backgroundColor = defaultBgColor;
  } else if (guestScore > homeScore) {
    guestScoreEl.style.backgroundColor = "#ffb703";
    homeScoreEl.style.backgroundColor = defaultBgColor;
  } else {
    homeScoreEl.style.backgroundColor = defaultBgColor;
    guestScoreEl.style.backgroundColor = defaultBgColor;
  }
};

let homeIncrementOne = () => {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
  checkLeadTeam();
};

let homeIncrementTwo = () => {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
  checkLeadTeam();
};

let homeIncrementThree = () => {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
  checkLeadTeam();
};

let guestIncrementOne = () => {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
  checkLeadTeam();
};

let guestIncrementTwo = () => {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
  checkLeadTeam();
};

let guestIncrementThree = () => {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
  checkLeadTeam();
};

let startNewGame = () => {
  homeScore = 0;
  guestScore = 0;
  homeScoreEl.textContent = homeScore;
  guestScoreEl.textContent = guestScore;
  checkLeadTeam();
};
