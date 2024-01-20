document.addEventListener("DOMContentLoaded", function () {
  const currentDate = new Date();

  showCalendar(currentDate.getFullYear(), currentDate.getMonth() + 1);
});

function showCalendar(year, month) {
  console.log("Year:", year, "Month:", month);
}
