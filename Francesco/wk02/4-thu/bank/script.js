const inputSaving = document.querySelector("#saving-input");
const inputCheck = document.querySelector("#checking-input");
const savingWithd = document.querySelector("#btn-saving-withdraw");
const savingDeposit = document.querySelector("#btn-saving-deposit");
const checkWithd = document.querySelector("#btn-checking-withdraw");
const checkDeposit = document.querySelector("#btn-checking-deposit");
let savingBalance = document.querySelector("#saving-balance");
let checkBalance = document.querySelector("#check-balance");
let alert = document.querySelector("#alert");

let balance = document.querySelector("#saving-balance").textContent;
//Event listner
document.addEventListener("click", e => {
  if (e.target.id === "btn-saving-withdraw") {
    savingBalance.textContent =
      Number(savingBalance.textContent) - Number(inputSaving.value);
    if (isNegative()) {
      alert.textContent = "Your Saving Account is Negative";
    } else if (!isNegative()) {
      alert.textContent = "";
    }
  } else if (e.target.id === "btn-saving-deposit") {
    savingBalance.textContent =
      Number(savingBalance.textContent) + Number(inputSaving.value);
    if (isNegative()) {
      alert.textContent = "Your Saving Account is Negative";
    } else if (!isNegative()) {
      alert.textContent = "";
    }
  } else if (e.target.id === "btn-checking-withdraw") {
    checkBalance.textContent =
      Number(checkBalance.textContent) - Number(inputCheck.value);
    if (isNegative()) {
      alert.textContent = "Your Check Account is Negative";
    } else if (!isNegative()) {
      alert.textContent = "";
    }
  } else if (e.target.id === "btn-checking-deposit") {
    checkBalance.textContent =
      Number(checkBalance.textContent) + Number(inputCheck.value);
    if (isNegative()) {
      alert.textContent = "Your Check Account is Negative";
    } else if (!isNegative()) {
      alert.textContent = "";
    }
  }
});

function isNegative() {
  if (Number(savingBalance.textContent < 0)) {
    return true;
  } else if (Number(checkBalance.textContent < 0)) {
    return true;
  }
}

// function checkIfNegative() {
//   if (
//     Number(savingBalance.textContent < 0) ||
//     Number(checkBalance.textContent < 0)
//   ) {
//     alert.textContent = "Your Check Account isin Negative";
//   } else if (
//     Number(savingBalance.textContent > 0) ||
//     Number(checkBalance.textContent > 0)
//   ) {
//     alert.textContent = "";
//   }
// }
