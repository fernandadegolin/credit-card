import "./css/index.css";

const ccBgColor01 = document.querySelector(".cc-bg svg >g g:nth-child(1) path");

const ccBgColor02 = document.querySelector(".cc-bg svg >g g:nth-child(2) path");

const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img");

console.log(ccLogo);

function setCard(typeCard) {
  const colors = {
    visa: ["#0578A6", "#E4EEF2"],
    mastercard: ["#BF1120", "#F2AE30"],
    default: ["black", "gray"],
  };

  ccBgColor01.setAttribute("fill", colors[typeCard][0]);
  ccBgColor02.setAttribute("fill", colors[typeCard][1]);
  ccLogo.setAttribute("src", `cc-${typeCard}.svg`);
}

setCard("mastercard");
