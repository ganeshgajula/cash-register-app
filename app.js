let enteredBill = document.querySelector("#billAmount");
let enteredCash = document.querySelector("#cashGiven");
let submitBtn = document.querySelector("#submit");
let notesCount = document.querySelectorAll(".notesCount");
let notesCountAgain = document.querySelector(".notesCountAgain");

console.log(notesCount);

function clickHandler() {
  let billAmount = enteredBill.value;
  let cashGiven = enteredCash.value;
  let remainingAmount = cashGiven - billAmount;
  console.log(cashGiven);
  console.log(billAmount);
  console.log(remainingAmount);
  const currencies = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  if (billAmount > 0 && cashGiven > 0 && remainingAmount > 0) {
    for (let i = 0; i < currencies.length; i++) {
      let notes = remainingAmount / currencies[i];
      console.log("No. of " + currencies[i] + " notes is ", Math.floor(notes));
      let noOfNotes = Math.floor(notes);
      console.log(noOfNotes);
      notesCount[i].innerText = noOfNotes;

      // notesCountAgain.innerText = noOfNotes;

      let newRemainingBalance =
        remainingAmount - Math.floor(notes) * currencies[i];
      remainingAmount = newRemainingBalance;
      console.log(newRemainingBalance);
      if (newRemainingBalance === 0) {
        break;
      }
    }
  } else if (billAmount > 0 && cashGiven > 0 && remainingAmount === 0) {
    alert("Thank you! you paid the exact amount");
  } else if (billAmount === "" && cashGiven === "") {
    alert("Please enter the billed amount and cash given by the customer");
  } else if (billAmount !== "" && cashGiven === "") {
    alert("Please enter the amount of cash given by the customer");
  } else {
    alert("Cash paid is less than the billed amount");
  }
}

submitBtn.addEventListener("click", clickHandler);
