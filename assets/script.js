
//calls the function on the callup of the page
$(function () {
  //date and time display function!
  setInterval(function (){
  var now=dayjs();
   displayTimeEl = $("#currentDay");
  displayTimeEl.text(now.format("ddd-MMMM-YYYY-HH-mm-ss"));
  }, 1000);

  //my time constants
  const start = 00;
  const end = 24;
 

  //calls timeDate
timeDate()
  function timeDate() {
    //sets the name of the localstorage item concerning each text area
   for (i= 0; i<24; i++){
    var parentId = "hour-" + i;
    var textarea = localStorage.getItem(parentId)
    //this is how it saves said textarea's values, #+parentId is the element we are calling, children calls that specific child, value accepts input from the textarea
    $("#" + parentId).children("textarea").val(textarea)
    if (dayjs().hour()===i){
      $("#" + parentId).children("textarea").addClass("present")
      //this is how it sets the colours on the text areas depending on what time it is
    } else if (dayjs().hour() <i){
      $("#" + parentId).children("textarea").addClass("future")
    } else {
      $("#" + parentId).children("textarea").addClass("past")
    }
   }
    //sets the variable as the button
    timeSlotContainer = $(".saveBtn")
    //tells the button what should happen on click
    timeSlotContainer.on("click", function(event){
      //puts the item into local storage
      var textArea = $(this).siblings("textarea").val();
      var parentId = $(this).parent("div").attr("id")
      localStorage.setItem(parentId, textArea)


    })
  }
  
});











