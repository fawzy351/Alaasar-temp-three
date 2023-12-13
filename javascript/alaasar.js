// show and hide mega menu 
let menu = document.getElementById('menu');
let others = document.getElementById('others');
function showMegaMenu(){
    menu.classList.toggle('show-menu');
}
// latest events 
let day = document.querySelector('.events .days')
let hour = document.querySelector('.events .hours')
let minute = document.querySelector('.events .minutes')
let second = document.querySelector('.events .seconds')
// set time counter 
let year = new Date().getFullYear()
let end = new Date(year,11,31,23,59,59).getTime()
let start = setInterval(() => {
    let current = new Date().getTime()
    let diffInTime = end - current
    let days = Math.floor(diffInTime/1000/60/60/24)
    let hours = Math.floor((diffInTime % (1000*60*60*24))/(1000*60*60))
    let minutes = Math.floor((diffInTime % (1000*60*60*24))%(1000*60*60)/(1000*60))
    let seconds = Math.floor((diffInTime % (1000*60*60*24))%(1000*60*60)%(1000*60)/(1000))
    day.innerHTML = days < 10? '0'+days:days
    hour.innerHTML = hours < 10? '0'+hours:hours
    minute.innerHTML = minutes < 10? '0'+minutes:minutes
    second.innerHTML = seconds < 10? '0'+seconds:seconds
}, 1000);
