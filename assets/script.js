var dateDisplayEL = $("#currentDay");

$(document).ready(function () {
  var saveBtnEL = $(".saveBtn");
  $(".description").each(function () {
    this.value=localStorage.getItem($(this).parent().attr("id"));
  });

  saveBtnEL.click(function () {
    localStorage.setItem(
      $(this).parent().attr("id"),
      $(this).siblings("textarea").val()
    );
  });

});

var todayDate = dayjs().format("MMMM DD YYYY");
dateDisplayEL.text(todayDate);



const eventElements = document.querySelectorAll(".time-block");
function time() {
  var now = dayjs().hour();
  $(".time-block").each(function updaterMethod() {
    const eventHour = parseInt($(this).attr("id").split("-")[1]);
    if (eventHour < now) {
      $(this).removeClass("present future").addClass("past");
    } else if (eventHour === now) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
    }
  });
}

time()
setInterval(time, 1000);
