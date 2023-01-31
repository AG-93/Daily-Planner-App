alert("hi, time to plan your day")
$(document).ready(function(){

    //listen for save button clicks

    $(".saveBtn").on("click", function(){
        console.log('Saved');

        let timeID= $(this).parent().attr("id")
        let value = $(this).sibling(".description").val();

        console.log(timeID);
        console.log(value);

        localStorage.setItem(timeID, value);

        $(".notification").addClass('show');
// the code below removes the saved notifcation after 5 seconds
        setTimeout(function(){
            $(".notification").removeClass("show");
        }, 5000)


    })

function hourUpdate(){
    let currentHour = moment().hours();
    //console.log(currentHour);
//the code below gives the values of the calender one by one. In this project, it loops through each hour on the planner
    // $(".time-block").each(function(){
    //     let blockHour = parseInt($(this).att("id").split("-")[1]);
    //     alert(blockHour);
   

    for(let i = 0; i < $(".time-block").length; i++){
        let hour = parseInt($(".time-block")[i].getAttribute("id").split("-")[1])
        console.log(hour)
        console.log(currentHour)
        if(hour < currentHour) {
            $(".time-block")[i].classList.add("past")
        } else if(hour === currentHour){
            $(".time-block")[i].classList.add("past")
            $(".time-block")[i].classList.remove("present")
        } else {
            $(".time-block")[i].classList.remove("past")
            $(".time-block")[i].classList.remove("present")
            $(".time-block")[i].classList.add("future")
        }
    }
    

}

//setting the interval to an hour update
hourUpdate();

let interval = setInterval(hourUpdate, 15000);

$("#hour-9 , description").val(localStorage.getItem("hour-9"))
$("#hour-10 , description").val(localStorage.getItem("hour-10"))
$("#hour-11 , description").val(localStorage.getItem("hour-11"))
$("#hour-12 , description").val(localStorage.getItem("hour-12"))

$("#currentDay").text(moment().format("dddd, MMMM, Do"))



})
