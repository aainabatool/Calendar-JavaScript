// const select = document.querySelector('#calendar');
// const para = document.querySelector('#month_display');

// select.addEventListener(Change, setMonth);

// function setMonth(){
//     const choice = select.value;

    
// }



const select = document.querySelector("#calendar");
const list = document.querySelector("#month_display");
const h1 = document.querySelector("#month");

select.addEventListener("change", () => {
  const choice = select.value;
  createCalendar(choice);
});

function createCalendar(month) {
  let days = 31;

  if (month === "February") {
    days = 28;
  } else if (
    month === "April" || month === "June" || month === "September" ||month === "November") {
    days = 30;
  }

  list.textContent = "";
  h1.textContent = month;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

// select.value = "January";
// createCalendar("January");
